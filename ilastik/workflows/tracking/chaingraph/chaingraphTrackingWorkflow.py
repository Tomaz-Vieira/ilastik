from lazyflow.graph import Graph
from ilastik.workflow import Workflow
from ilastik.applets.dataSelection import DataSelectionApplet
from ilastik.applets.objectExtraction import ObjectExtractionApplet
from ilastik.applets.tracking.chaingraph.chaingraphTrackingApplet import ChaingraphTrackingApplet
from ilastik.applets.thresholdTwoLevels.thresholdTwoLevelsApplet import ThresholdTwoLevelsApplet
from lazyflow.operators.adaptors import Op5ifyer


class ChaingraphTrackingWorkflow( Workflow ):
    workflowName = "Tracking Workflow (Chaingraph)"

    def __init__( self, headless, *args, **kwargs ):
        graph = kwargs['graph'] if 'graph' in kwargs else Graph()
        if 'graph' in kwargs: del kwargs['graph']
        super(ChaingraphTrackingWorkflow, self).__init__(headless=headless, graph=graph, *args, **kwargs)
        
        ## Create applets 
        self.rawDataSelectionApplet = DataSelectionApplet(self,
                                                       "Input: Raw",
                                                       "Input Raw",
                                                       batchDataGui=False,
                                                       force5d=False)
        
        self.dataSelectionApplet = DataSelectionApplet(self,
                                                       "Input: Prediction",
                                                       "Input Prediction",
                                                       batchDataGui=False,
                                                       force5d=False)
                
        self.thresholdTwoLevelsApplet = ThresholdTwoLevelsApplet( self, 
                                                                  "Threshold & Size Filter", 
                                                                  "ThresholdTwoLevels" )
        
        self.objectExtractionApplet = ObjectExtractionApplet( workflow=self, interactive=False )
        
        self.trackingApplet = ChaingraphTrackingApplet( workflow=self )
        
        self._applets = []                
        self._applets.append(self.rawDataSelectionApplet)
        self._applets.append(self.dataSelectionApplet)
        self._applets.append(self.thresholdTwoLevelsApplet)
        self._applets.append(self.objectExtractionApplet)
        self._applets.append(self.trackingApplet)

    @property
    def applets(self):
        return self._applets

    @property
    def imageNameListSlot(self):
        return self.dataSelectionApplet.topLevelOperator.ImageName
    
    def connectLane( self, laneIndex ):
        opData = self.dataSelectionApplet.topLevelOperator.getLane(laneIndex)
        opRawData = self.rawDataSelectionApplet.topLevelOperator.getLane(laneIndex)
        opTwoLevelThreshold = self.thresholdTwoLevelsApplet.topLevelOperator.getLane(laneIndex)
        opObjExtraction = self.objectExtractionApplet.topLevelOperator.getLane(laneIndex)
        opTracking = self.trackingApplet.topLevelOperator.getLane(laneIndex)
                
        ## Connect operators ##
        op5Raw = Op5ifyer(parent=self)
        op5Raw.input.connect(opRawData.Image)
        
        op5Predictions = Op5ifyer( parent=self )
        op5Predictions.input.connect( opData.Image )
               
        opTwoLevelThreshold.InputImage.connect( opData.Image )
        opTwoLevelThreshold.RawInput.connect( opRawData.Image ) # Used for display only
        
        # Use Op5ifyers for both input datasets such that they are guaranteed to 
        # have the same axis order after thresholding
        op5Binary = Op5ifyer( parent=self )                
        op5Binary.input.connect( opTwoLevelThreshold.CachedOutput )
        
        opObjExtraction.RawImage.connect( op5Raw.output )
        opObjExtraction.BinaryImage.connect( op5Binary.output )
        
        opTracking.RawImage.connect( op5Raw.output )
        opTracking.LabelImage.connect( opObjExtraction.LabelImage )
        opTracking.ObjectFeatures.connect( opObjExtraction.RegionFeatures )        
        
