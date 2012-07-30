from PyQt4.QtGui import QApplication, QSplashScreen, QPixmap
from PyQt4.QtCore import QTimer 

import lazyflow
from ilastik.shell.gui import IlastikShell, SideSplitterSizePolicy
from ilastik.applets.dataSelection import DataSelectionApplet
from ilastik.applets.vigraWatershedViewer import VigraWatershedViewerApplet

import ilastik.ilastik_logging

def createShell():
    # This Graph is shared by all applets and operators
    graph = lazyflow.graph.Graph()
    
    # Create applets 
    dataSelectionApplet = DataSelectionApplet(graph, "Input Data", "Input Data", supportIlastik05Import=True, batchDataGui=False)
    watershedApplet = VigraWatershedViewerApplet(graph, "Watershed", "Watershed")
    
    # Connect top-level operators
    watershedApplet.topLevelOperator.InputImage.connect( dataSelectionApplet.topLevelOperator.Image )
    
    # Create the shell and add the applets
    shell = IlastikShell(sideSplitterSizePolicy=SideSplitterSizePolicy.Manual)    
    shell.addApplet(dataSelectionApplet)
    shell.addApplet( watershedApplet )

    # The shell populates his "current view" image list combo using a slot of image names from the data selection applet.    
    shell.setImageNameListSlot( dataSelectionApplet.topLevelOperator.ImageName )

    return shell

if __name__ == "__main__":
    ilastik.ilastik_logging.default_config.init()
    ilastik.ilastik_logging.startUpdateInterval(10)
    app = QApplication([])
    
    # Splash Screen
    splashImage = QPixmap("../ilastik-splash.png")
    splashScreen = QSplashScreen(splashImage)
    splashScreen.show()

    # Create workflow and add it to the shell    
    shell = createShell()
    
    # Start the shell GUI.
    shell.show()

    # Hide the splash screen
    splashScreen.finish(shell)
    
    def test():
        from functools import partial
        
        # Open a test project
        shell.openProjectFile('/home/bergs/water.ilp')
        
        # Select a drawer
        shell.setSelectedAppletDrawer( 1 )
    
    # Run a test
#    QTimer.singleShot(1, test )

    app.exec_()
    
