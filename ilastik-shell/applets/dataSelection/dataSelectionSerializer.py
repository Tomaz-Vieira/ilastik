from opDataSelection import OpDataSelection
Location = OpDataSelection.DatasetInfo.Location

import os
import vigra
import copy
from utility import SimpleSignal # from the ilastik-shell utility module
from utility import VersionManager

import logging
logger = logging.getLogger(__name__)

class DataSelectionSerializer(object):
    """
    Serializes the user's input data selections to an ilastik v0.6 project file.
    """
    SerializerVersion = 0.1
    TopGroupName = 'DataSelection'

    # Constants    
    LocationStrings = { Location.FileSystem      : 'FileSystem',
                        Location.ProjectInternal : 'ProjectInternal' }

    def __init__(self, mainOperator, topGroupName=None):
        self.mainOperator = mainOperator
        if topGroupName is not None:
             self.TopGroupName = topGroupName
    
    def serializeToHdf5(self, hdf5File, projectFilePath):
        # Check the overall file version
        ilastikVersion = hdf5File["ilastikVersion"].value

        # Make sure we can find our way around the project tree
        if not VersionManager.isProjectFileVersionCompatible(ilastikVersion):
            return
        
        # If the operator has a some other project file, something's wrong
        if self.mainOperator.ProjectFile.connected():
            assert self.mainOperator.ProjectFile.value == hdf5File
        
        # Access our top group (create it if necessary)
        topGroup = self.getOrCreateGroup(hdf5File, self.TopGroupName)
        
        # Set the version
        if 'StorageVersion' not in topGroup.keys():
            topGroup.create_dataset('StorageVersion', data=self.SerializerVersion)
        else:
            topGroup['StorageVersion'][()] = self.SerializerVersion
        
        # Access the info group
        infoDir = self.getOrCreateGroup(topGroup, 'infos')
        
        # Delete all infos
        for infoName in infoDir.keys():
            del infoDir[infoName]
                
        # Rebuild the list of infos
        for index, slot in enumerate(self.mainOperator.Dataset):
            infoGroup = infoDir.create_group('info{:03d}'.format(index))
            datasetInfo = slot.value
            locationString = self.LocationStrings[datasetInfo.location]
            infoGroup.create_dataset('location', data=locationString)
            infoGroup.create_dataset('filePath', data=datasetInfo.filePath)
            infoGroup.create_dataset('datasetId', data=datasetInfo.datasetId)
        
        # Write any missing local datasets to the local_data group
        localDataGroup = self.getOrCreateGroup(topGroup, 'local_data')
        wroteInternalData = False
        for index, slot in enumerate(self.mainOperator.Dataset):
            info = slot.value
            # If this dataset should be stored in the project, but it isn't there yet
            if  info.location == Location.ProjectInternal \
            and info.datasetId not in localDataGroup.keys():
                # Obtain the data from the corresponding output and store it to the project.
                # TODO: Optimize this for large datasets by streaming it chunk-by-chunk.
                dataSlot = self.mainOperator.Image[index]
                data = dataSlot[...].wait()

                # Vigra thinks its okay to reorder the data if it has axistags,
                #  but we don't want that. To avoid reordering, we write the data
                #  ourselves and attach the axistags afterwards.
                dataset = localDataGroup.create_dataset(info.datasetId, data=data)
                dataset.attrs['axistags'] = dataSlot.meta.axistags.toJSON()
                wroteInternalData = True

        # Construct a list of all the local dataset ids we want to keep
        localDatasetIds = [ slot.value.datasetId
                             for index, slot 
                             in enumerate(self.mainOperator.Dataset)
                             if slot.value.location == Location.ProjectInternal ]

        # Delete any datasets in the project that aren't needed any more
        for datasetName in localDataGroup.keys():
            if datasetName not in localDatasetIds:
                del localDataGroup[datasetName]

        if wroteInternalData:
            # The operator should use the same project file that we're using
            self.mainOperator.ProjectFile.setValue(hdf5File)
            
            # Force the operator to setupOutputs() again so it gets data from the project, not external files
            # TODO: This will cause a slew of 'dirty' operators for any inputs we saved.
            #       Is that a problem?
            infoCopy = copy.copy(self.mainOperator.Dataset[0].value)
            self.mainOperator.Dataset[0].setValue(infoCopy)

    def deserializeFromHdf5(self, hdf5File, projectFilePath):
        # Check the overall file version
        ilastikVersion = hdf5File["ilastikVersion"].value

        # Make sure we can find our way around the project tree
        if not VersionManager.isProjectFileVersionCompatible(ilastikVersion):
            return

        # The 'working directory' for the purpose of constructing absolute 
        #  paths from relative paths is the project file's directory.
        projectDir = os.path.split(projectFilePath)[0]
        self.mainOperator.WorkingDirectory.setValue( projectDir )

        # Provide the project file to our operator
        self.mainOperator.ProjectFile.setValue(hdf5File)

        # Access the top group and the info group
        try:
            topGroup = hdf5File[DataSelectionSerializer.TopGroupName]
            infoDir = topGroup['infos']
        except KeyError:
            # If our group (or subgroup) doesn't exist, then make sure the operator is empty
            self.mainOperator.Dataset.resize( 0 )
            return
        
        self.mainOperator.Dataset.resize( len(infoDir) )
        for index, (infoGroupName, infoGroup) in enumerate( sorted(infoDir.items()) ):
            datasetInfo = OpDataSelection.DatasetInfo()

            # Make a reverse-lookup of the location storage strings            
            LocationLookup = { v:k for k,v in self.LocationStrings.items() }
            datasetInfo.location = LocationLookup[ str(infoGroup['location'].value) ]
            
            # Write to the 'private' members to avoid resetting the dataset id
            datasetInfo._filePath = str(infoGroup['filePath'].value)
            datasetInfo._datasetId = str(infoGroup['datasetId'].value)
            
            # If the data is supposed to be in the project,
            #  check for it now.
            if datasetInfo.location == Location.ProjectInternal:
                assert datasetInfo.datasetId in topGroup['local_data'].keys()
            
            # Give the new info to the operator
            self.mainOperator.Dataset[index].setValue(datasetInfo)

    def isDirty(self):
        """ Return true if the current state of this item 
            (in memory) does not match the state of the HDF5 group on disk.
            SerializableItems are responsible for tracking their own dirty/notdirty state."""
        return False

    def unload(self):
        """ Called if either
            (1) the user closed the project or
            (2) the project opening process needs to be aborted for some reason
                (e.g. not all items could be deserialized properly due to a corrupted ilp)
            This way we can avoid invalid state due to a partially loaded project. """ 
        self.mainOperator.Dataset.resize( 0 )

    def getOrCreateGroup(self, parentGroup, groupName):
        try:
            return parentGroup[groupName]
        except KeyError:
            return parentGroup.create_group(groupName)



class Ilastik05DataSelectionDeserializer(object):
    """
    Deserializes the user's input data selections from an ilastik v0.5 project file.
    """

    def __init__(self, mainOperator):
        self.mainOperator = mainOperator
    
    def serializeToHdf5(self, hdf5File, projectFilePath):
        # This class is for DEserialization only.
        pass

    def deserializeFromHdf5(self, hdf5File, projectFilePath):
        # Check the overall file version
        ilastikVersion = hdf5File["ilastikVersion"].value

        # This is the v0.5 import deserializer.  Don't work with 0.6 projects (or anything else).
        if ilastikVersion != 0.5:
            return

        # The 'working directory' for the purpose of constructing absolute 
        #  paths from relative paths is the project file's directory.
        projectDir = os.path.split(projectFilePath)[0]
        self.mainOperator.WorkingDirectory.setValue( projectDir )

        # Provide the project file to our operator
        self.mainOperator.ProjectFile.setValue(hdf5File)

        # Access the top group and the info group
        try:
            #dataset = hdf5File["DataSets"]["dataItem00"]["data"]
            dataDir = hdf5File["DataSets"]
        except KeyError:
            # If our group (or subgroup) doesn't exist, then make sure the operator is empty
            self.mainOperator.Dataset.resize( 0 )
            return
        
        self.mainOperator.Dataset.resize( len(dataDir) )
        for index, (datasetDirName, datasetDir) in enumerate( sorted(dataDir.items()) ):
            datasetInfo = OpDataSelection.DatasetInfo()

            # Since we are importing from a 0.5 file, all datasets will be external 
            #  to the project (pulled in from the old file as hdf5 datasets)
            datasetInfo.location = Location.FileSystem
            
            # Write to the 'private' members to avoid resetting the dataset id
            totalDatasetPath = projectFilePath + '/DataSets/' + datasetDirName + '/data'
            datasetInfo._filePath = str(totalDatasetPath)
            datasetInfo._datasetId = datasetDirName # Use the old dataset name as the new dataset id
            
            # Give the new info to the operator
            self.mainOperator.Dataset[index].setValue(datasetInfo)

    def isDirty(self):
        """ Return true if the current state of this item 
            (in memory) does not match the state of the HDF5 group on disk.
            SerializableItems are responsible for tracking their own dirty/notdirty state."""
        return False

    def unload(self):
        """ Called if either
            (1) the user closed the project or
            (2) the project opening process needs to be aborted for some reason
                (e.g. not all items could be deserialized properly due to a corrupted ilp)
            This way we can avoid invalid state due to a partially loaded project. """ 
        self.mainOperator.Dataset.resize( 0 )


if __name__ == "__main__":
    import os
    import h5py
    from lazyflow.graph import Graph, OperatorWrapper
    from opDataSelection import OpDataSelection

    # Define the files we'll be making    
    testProjectName = 'test_project.ilp'
    testProjectName = os.path.split(__file__)[0] + '/' + testProjectName
    # Clean up: Remove the test data files we created last time (just in case)
    for f in [testProjectName]:
        try:
            os.remove(f)
        except:
            pass

    # Create an empty project
    testProject = h5py.File(testProjectName)
    testProject.create_dataset("ilastikVersion", data=0.6)
    
    ##
    ## Serialization
    ##

    # Create an operator to work with and give it some input
    graph = Graph()
    operatorToSave = OperatorWrapper( OpDataSelection(graph=graph) )
    operatorToSave.ProjectFile.setValue(testProject)
    operatorToSave.WorkingDirectory.setValue( os.path.split(__file__)[0] )
    
    info = OpDataSelection.DatasetInfo()
    info.filePath = '/home/bergs/5d.npy'
    info.location = Location.ProjectInternal
    
    operatorToSave.Dataset.resize(1)
    operatorToSave.Dataset[0].setValue(info)
    
    # Now serialize!
    serializer = DataSelectionSerializer(operatorToSave)
    serializer.serializeToHdf5(testProject, testProjectName)
    
    # Check for dataset existence
    datasetInternalPath = serializer.TopGroupName + '/local_data/' + info.datasetId
    dataset = testProject[datasetInternalPath][...]
    
    # Check axistags attribute
    axistags = vigra.AxisTags.fromJSON(testProject[datasetInternalPath].attrs['axistags'])
    
    # Debug info...
    #logging.basicConfig(level=logging.DEBUG)
    logger.debug('dataset.shape = ' + str(dataset.shape))
    logger.debug('should be ' + str(operatorToSave.Image[0].meta.shape))
    logger.debug('dataset axistags:')
    logger.debug(axistags)
    logger.debug('should be:')
    logger.debug(operatorToSave.Image[0].meta.axistags)

    originalShape = operatorToSave.Image[0].meta.shape
    originalAxisTags = operatorToSave.Image[0].meta.axistags
#    originalAxisOrder = [tag.key for tag in originalAxisTags]
#
#    # The dataset axis ordering may have changed when it was written to disk,
#    #  so convert it to the original ordering before we inspect it.
#    dataset = dataset.withAxes(*originalAxisOrder)
    
    # Now we can directly compare the shape and axis ordering
    assert dataset.shape == originalShape
    assert axistags == originalAxisTags
    
    ##
    ## Deserialization
    ##

    # Create an empty operator
    graph = Graph()
    operatorToLoad = OperatorWrapper( OpDataSelection(graph=graph) )
    
    deserializer = DataSelectionSerializer(operatorToLoad)
    deserializer.deserializeFromHdf5(testProject, testProjectName)
    
    assert len(operatorToLoad.Dataset) == len(operatorToSave.Dataset)
    assert len(operatorToLoad.Image) == len(operatorToSave.Image)
    
    assert operatorToLoad.Image[0].meta.shape == operatorToSave.Image[0].meta.shape
    assert operatorToLoad.Image[0].meta.axistags == operatorToSave.Image[0].meta.axistags





































