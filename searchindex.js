Search.setIndex({envversion:49,filenames:["applet_api","applet_library","dependencies","index","overview","plugin_system","projectManager","testing","utilities","workflow_design"],objects:{"ilastik.applets.base.applet":{Applet:[0,0,1,""],ShellRequest:[0,0,1,""]},"ilastik.applets.base.applet.Applet":{__init__:[0,1,1,""],appletStateUpdateRequested:[0,2,1,""],dataSerializers:[0,2,1,""],getMultiLaneGui:[0,1,1,""],progressSignal:[0,2,1,""],sendMessageToServer:[0,2,1,""],shellRequestSignal:[0,2,1,""],topLevelOperator:[0,2,1,""]},"ilastik.applets.base.applet.ShellRequest":{RequestSave:[0,2,1,""]},"ilastik.applets.base.appletGuiInterface":{AppletGuiInterface:[0,0,1,""]},"ilastik.applets.base.appletGuiInterface.AppletGuiInterface":{allowLaneSelectionChange:[0,1,1,""],appletDrawer:[0,1,1,""],centralWidget:[0,1,1,""],imageLaneAdded:[0,1,1,""],imageLaneRemoved:[0,1,1,""],menus:[0,1,1,""],setEnabled:[0,1,1,""],setImageIndex:[0,1,1,""],stopAndCleanUp:[0,1,1,""],viewerControlWidget:[0,1,1,""]},"ilastik.applets.base.appletSerializer":{AppletSerializer:[0,0,1,""],SerialBlockSlot:[0,0,1,""],SerialClassifierSlot:[0,0,1,""],SerialListSlot:[0,0,1,""],SerialSlot:[0,0,1,""]},"ilastik.applets.base.appletSerializer.AppletSerializer":{_deserializeFromHdf5:[0,1,1,""],_serializeToHdf5:[0,1,1,""],deserializeFromHdf5:[0,1,1,""],initWithoutTopGroup:[0,1,1,""],isDirty:[0,1,1,""],progressIncrement:[0,1,1,""],repairFile:[0,1,1,""],serializeToHdf5:[0,1,1,""],shouldSerialize:[0,1,1,""],updateWorkingDirectory:[0,1,1,""]},"ilastik.applets.base.appletSerializer.SerialBlockSlot":{__init__:[0,1,1,""]},"ilastik.applets.base.appletSerializer.SerialClassifierSlot":{__init__:[0,1,1,""],_deserialize:[0,1,1,""],_serialize:[0,1,1,""],deserialize:[0,1,1,""]},"ilastik.applets.base.appletSerializer.SerialListSlot":{__init__:[0,1,1,""]},"ilastik.applets.base.appletSerializer.SerialSlot":{__init__:[0,1,1,""],_deserialize:[0,1,1,""],_serialize:[0,1,1,""],deserialize:[0,1,1,""],serialize:[0,1,1,""],shouldSerialize:[0,1,1,""]},"ilastik.applets.base.standardApplet":{StandardApplet:[0,0,1,""]},"ilastik.applets.base.standardApplet.StandardApplet":{__init__:[0,1,1,""],broadcastingSlots:[0,2,1,""],createSingleLaneGui:[0,1,1,""],getMultiLaneGui:[0,1,1,""],singleLaneGuiClass:[0,2,1,""],singleLaneOperatorClass:[0,2,1,""],topLevelOperator:[0,2,1,""]},"ilastik.applets.dataSelection.dataSelectionApplet":{DataSelectionApplet:[1,0,1,""]},"ilastik.applets.dataSelection.dataSelectionApplet.DataSelectionApplet":{configure_operator_with_parsed_args:[1,1,1,""],convertStacksToH5:[1,3,1,""],parse_known_cmdline_args:[1,3,1,""]},"ilastik.applets.dataSelection.opDataSelection":{OpDataSelection:[1,0,1,""]},"ilastik.applets.dataSelection.opDataSelection.OpDataSelection":{AllowLabels:[1,2,1,""],Dataset:[1,2,1,""],Image:[1,2,1,""],ImageName:[1,2,1,""],InvalidDimensionalityError:[1,4,1,""],ProjectDataGroup:[1,2,1,""],ProjectFile:[1,2,1,""],WorkingDirectory:[1,2,1,""]},"ilastik.applets.deviationFromMean.deviationFromMeanApplet":{DeviationFromMeanApplet:[1,0,1,""]},"ilastik.applets.featureSelection.featureSelectionApplet":{FeatureSelectionApplet:[1,0,1,""]},"ilastik.applets.labeling.labelingApplet":{LabelingApplet:[1,0,1,""]},"ilastik.applets.labeling.labelingGui":{LabelingGui:[1,0,1,""]},"ilastik.applets.labeling.labelingGui.LabelingGui":{LabelingSlots:[1,0,1,""],__init__:[1,1,1,""],allowDeleteLastLabelOnly:[1,1,1,""],createLabelLayer:[1,1,1,""],getLayer:[1,1,1,""],getNextLabelColor:[1,1,1,""],getNextLabelName:[1,1,1,""],getNextPmapColor:[1,1,1,""],hideEvent:[1,1,1,""],onLabelColorChanged:[1,1,1,""],onLabelListDataChanged:[1,1,1,""],onLabelNameChanged:[1,1,1,""],onPmapColorChanged:[1,1,1,""],selectLabel:[1,1,1,""],setupLayers:[1,1,1,""]},"ilastik.applets.labeling.opLabeling":{OpLabelingSingleLane:[1,0,1,""],OpLabelingTopLevel:[1,0,1,""]},"ilastik.applets.labeling.opLabeling.OpLabelingSingleLane":{InputImage:[1,2,1,""],LabelDelete:[1,2,1,""],LabelEraserValue:[1,2,1,""],LabelImage:[1,2,1,""],LabelInput:[1,2,1,""],NonzeroLabelBlocks:[1,2,1,""]},"ilastik.applets.labeling.opLabeling.OpLabelingTopLevel":{InputImages:[1,2,1,""],LabelDelete:[1,2,1,""],LabelEraserValue:[1,2,1,""],LabelImages:[1,2,1,""],LabelInputs:[1,2,1,""],NonzeroLabelBlocks:[1,2,1,""],addLane:[1,1,1,""],removeLane:[1,1,1,""]},"ilastik.applets.layerViewer.layerViewerApplet":{LayerViewerApplet:[1,0,1,""]},"ilastik.applets.layerViewer.layerViewerGui":{LayerViewerGui:[1,0,1,""]},"ilastik.applets.layerViewer.layerViewerGui.LayerViewerGui":{__init__:[1,1,1,""],createStandardLayerFromSlot:[1,3,1,""],initAppletDrawerUi:[1,1,1,""],initViewerControlUi:[1,1,1,""],setupLayers:[1,1,1,""]},"ilastik.applets.layerViewer.opLayerViewer":{OpLayerViewer:[1,0,1,""]},"ilastik.applets.layerViewer.opLayerViewer.OpLayerViewer":{checkConstraints:[1,1,1,""]},"ilastik.applets.objectClassification.objectClassificationApplet":{ObjectClassificationApplet:[1,0,1,""]},"ilastik.applets.objectClassification.objectClassificationGui":{ObjectClassificationGui:[1,0,1,""]},"ilastik.applets.objectClassification.objectClassificationGui.ObjectClassificationGui":{createLabelLayer:[1,1,1,""],handleWarnings:[1,1,1,""],initAppletDrawerUi:[1,1,1,""],onClick:[1,1,1,""]},"ilastik.applets.objectClassification.opObjectClassification":{OpMaxLabel:[1,0,1,""],OpMultiRelabelSegmentation:[1,0,1,""],OpObjectClassification:[1,0,1,""],OpObjectPredict:[1,0,1,""],OpObjectTrain:[1,0,1,""],OpRelabelSegmentation:[1,0,1,""]},"ilastik.applets.objectClassification.opObjectClassification.OpObjectClassification":{assignObjectLabel:[1,1,1,""],do_export:[1,1,1,""],exportLabelInfo:[1,1,1,""],importLabelInfo:[1,1,1,""],save_export_progress_dialog:[1,1,1,""],setupCaches:[1,1,1,""]},"ilastik.applets.objectExtraction.objectExtractionApplet":{ObjectExtractionApplet:[1,0,1,""]},"ilastik.applets.objectExtraction.opObjectExtraction":{OpAdaptTimeListRoi:[1,0,1,""],OpCachedRegionFeatures:[1,0,1,""],OpObjectCenterImage:[1,0,1,""],OpObjectExtraction:[1,0,1,""],OpRegionFeatures:[1,0,1,""]},"ilastik.applets.objectExtraction.opObjectExtraction.OpObjectExtraction":{createExportTable:[1,5,1,""]},"ilastik.applets.objectExtraction.opObjectExtraction.OpRegionFeatures":{compute_extent:[1,1,1,""],compute_rawbbox:[1,1,1,""]},"ilastik.applets.pixelClassification.pixelClassificationApplet":{PixelClassificationApplet:[1,0,1,""]},"ilastik.applets.projectMetadata.projectMetadataApplet":{ProjectMetadataApplet:[1,0,1,""]},"ilastik.applets.thresholdMasking.thresholdMaskingApplet":{ThresholdMaskingApplet:[1,0,1,""]},"ilastik.applets.vigraWatershedViewer.vigraWatershedViewerApplet":{VigraWatershedViewerApplet:[1,0,1,""]},"ilastik.plugins":{ObjectFeaturesPlugin:[1,0,1,""]},"ilastik.plugins.ObjectFeaturesPlugin":{availableFeatures:[1,1,1,""],compute_global:[1,1,1,""],compute_local:[1,1,1,""],do_channels:[1,1,1,""],fill_properties:[1,1,1,""]},"ilastik.shell.projectManager":{ProjectManager:[6,0,1,""]},"ilastik.shell.projectManager.ProjectManager":{FileMissingError:[6,4,1,""],ProjectVersionError:[6,4,1,""],SaveError:[6,4,1,""],__init__:[6,1,1,""],cleanUp:[6,1,1,""],createBlankProjectFile:[6,3,1,""],downloadProjectFromDvid:[6,3,1,""],getDirtyAppletNames:[6,1,1,""],openProjectFile:[6,3,1,""],saveProject:[6,1,1,""],saveProjectAs:[6,1,1,""],saveProjectSnapshot:[6,1,1,""]},"ilastik.utility":{MultiLaneOperatorABC:[8,0,1,""],OpMultiLaneWrapper:[8,0,1,""],OperatorSubView:[8,0,1,""],SimpleSignal:[8,0,1,""],bind:[8,0,1,""]},"ilastik.utility.MultiLaneOperatorABC":{addLane:[8,1,1,""],getLane:[8,1,1,""],removeLane:[8,1,1,""]},"ilastik.utility.OpMultiLaneWrapper":{addLane:[8,1,1,""],getLane:[8,1,1,""],removeLane:[8,1,1,""]},"ilastik.utility.OperatorSubView":{__init__:[8,1,1,""]},"ilastik.utility.SimpleSignal":{connect:[8,1,1,""],disconnectAll:[8,1,1,""],emit:[8,1,1,""]},"ilastik.utility.bind":{__call__:[8,1,1,""],__init__:[8,1,1,""]},"ilastik.utility.gui":{ThreadRouter:[8,0,1,""],ThunkEventHandler:[8,0,1,""],threadRouted:[8,6,1,""]},"ilastik.utility.gui.ThreadRouter":{__init__:[8,1,1,""]},"ilastik.utility.gui.ThunkEventHandler":{__init__:[8,1,1,""],post:[8,1,1,""],send:[8,1,1,""]},"ilastik.workflow":{Workflow:[0,0,1,""]},"ilastik.workflow.Workflow":{__init__:[0,1,1,""],applets:[0,2,1,""],cleanUp:[0,1,1,""],connectLane:[0,1,1,""],handleAppletStateUpdateRequested:[0,1,1,""],handleNewLanesAdded:[0,1,1,""],imageNameListSlot:[0,2,1,""],menus:[0,1,1,""],onProjectLoaded:[0,1,1,""],prepareForNewLane:[0,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","classmethod","Python class method"],"4":["py","exception","Python exception"],"5":["py","staticmethod","Python static method"],"6":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:classmethod","4":"py:exception","5":"py:staticmethod","6":"py:function"},terms:{"abstract":[0,8],"case":[0,1],"default":[0,1,7],"export":1,"final":0,"function":[0,1,5,8,9],"import":[5,6,9],"int":1,"new":[0,1,6,8],"return":[0,1,6],"static":1,"switch":0,"true":[0,1],"while":8,__call__:8,__init__:[0,1,6,8],_deseri:0,_deserializefromhdf5:0,_serial:0,_serializetohdf5:0,abl:[0,5],about:[0,8],abov:[0,9],absolut:1,accept:[0,8],access:[0,6,8],accord:[0,1],achiev:9,action:0,activ:0,actual:[0,1],adapt:[0,1,8],add:[0,1,5,6,8],addit:[1,5],addition:0,additionalmonitoredslot:1,addlan:[0,1,8],adher:[0,8],adjust:8,advanc:[],affect:[0,1],after:[0,1],aggreg:1,all:[0,1,5,6,7,8],allow:[0,1,6],allowdeletelastlabelonli:1,allowlabel:1,allowlaneselectionchang:0,almost:0,along:[0,1],alpha:1,alreadi:[0,1,6],also:[0,1,5,8],alwai:[0,9],ani:[0,1,2,6,8],anoth:1,any:[1,5,8,9],app:1,appear:[0,1,8],append:6,appletdraw:0,appletguiinterfac:0,appletseri:0,appletstateupdaterequest:0,appli:0,applic:4,appropri:[0,1,8],arbitrari:0,area:0,aren:1,arg:[0,1,8],argpars:[1,2],argument:[0,6,7,8],argumentpars:1,around:[0,1],arrai:1,ask:0,assign:[0,1],assignedlabel:1,assignobjectlabel:1,associ:[0,1],assum:[0,1],assumpt:0,attempt:[0,6],auto:8,automat:[0,8],avail:[1,5],availablefeatur:1,awar:[0,1],axi:1,bad:1,bar:[0,1],basic:1,batchdatagui:1,batchprocess:0,batchprocessingapplet:0,becaus:7,been:[0,6],befor:[0,9],begin:[0,9],behav:8,belong:[0,1],below:1,better:0,between:[0,9],binar:1,binary_bbox:1,bind:8,bit:0,blank:[0,1,6],blist:2,block:[0,8],blockdim:1,blockshap:1,blockslot:0,bool:[1,6],boost:[2,8],both:0,bottomright:1,bound:[0,1],box:[0,1],broadcast:0,broadcastingslot:0,broadcastingslotnam:8,build:[0,2],built:4,cach:[0,1],calcul:1,call:[0,1,6,8],callabl:8,callback:8,can:[0,1,5,6,8,9],cancel:[0,6],cannot:[0,7],capabl:[5,8],capbabl:0,care:1,categori:[],caus:[0,7],cell:1,center:[0,1],central:[0,1],centralwidget:0,centralwidgetonli:1,certain:[0,8],chain:4,chang:[0,1,9],channel:1,characterist:8,check:[1,6],checkconstraint:1,child:0,choos:1,classifi:[0,1],classifiergroup:0,classmethod:[1,6],clean:[0,1],cleanup:[0,6],clear:1,click:[0,1],client:6,close:[0,1,6],cmake:2,cmdline_arg:1,code:[0,4,8,9],color:1,colort:1,column:1,com:[],combin:[0,4,9],combobox:0,come:7,command:[0,1,6],commandlin:6,common:0,commun:0,compar:8,comparison:0,compil:2,complet:0,compon:[0,1,9],composit:9,compression_level:0,comput:[0,1,4,9],compute_ext:1,compute_glob:1,compute_loc:1,compute_rawbbox:1,concern:0,conda:2,configur:[0,1,4,5,6,9],configure_operator_with_parsed_arg:1,confirm:0,connect:[0,1,8,9],connectlan:0,conserv:1,consid:0,consist:[0,1,4],constraint:1,construct:8,constructor:[0,1,6,8],consum:0,contain:[0,1,4,5,6],content:[0,3],control:[0,1],conveni:[1,7],convert:[0,1],convertstackstoh5:1,cool_featur:1,coordin:1,copi:[0,6],copycont:6,correct:[1,8],correctli:0,correspond:[0,1,8],corrupt:0,could:1,count:1,creat:[0,1,4,6,8],createblankprojectfil:6,createexportt:1,createlabellay:1,createmultilanegui:0,createsinglelanegui:0,createstandardlayerfromslot:1,cross:1,crosshair:1,csv:1,current:[0,6,9],custom:0,data:[],dataexport:0,dataselect:[0,1,9],dataselectionapplet:1,dataselectiongui:0,dataseri:0,dataset:[1,6],datasetinfo:1,deal:0,debug:[1,7],decid:0,decis:0,declar:[0,6],decor:8,def:8,defin:[0,1,4],delet:[1,6],demonstr:1,depend:[],deprecated:0,descript:5,deseri:0,deserializefromhdf5:0,design:[],destroi:0,detail:[0,1,8,9],detailtext:1,detect:1,determin:0,develop:[],deviationfrommean:1,deviationfrommeanapplet:1,diagram:[0,9],dialog:1,dict:[0,1],dictionari:1,differ:[0,1,7],dimens:1,dimension:1,direct:[1,6],directli:[0,1,6,7],directori:[0,1,5,7],dirti:[0,6],disabl:[0,7],discard:8,disconnectal:8,discov:1,disk:[0,6],displai:[0,1,9],displaytext:1,distinguish:8,distribut:[2,5],do_channel:1,do_export:1,doe:[0,1],doesn:[0,6],don:0,done:[0,6,8],dot:0,download:6,downloadprojectfromdvid:6,downstream:[0,1],drawer:[0,1],draweruipath:1,drawn:1,dropdown:0,dtype:1,dvid:6,each:[0,1,4,9],easier:0,easiest:[0,2],either:1,element:[0,1,4],emit:[0,8],empti:0,empty:1,enabl:[0,1,8],end:0,enough:0,ensur:0,enter:1,entir:[0,4],entri:1,enumer:0,environ:2,equal:8,equival:[1,6],eras:1,error:6,essenti:1,etc:1,event:[1,8],eventu:8,everi:[0,1,6],everyth:0,exactli:0,exampl:[],except:[0,1,6,8],exclus:9,execut:[7,8],exist:[1,6],expand:[1,8],expect:[0,1,9],expectedvers:6,experi:0,explain:[0,2],explicitli:[1,8],export_object_data:1,exportlabelinfo:1,exportoper:1,expos:[0,8],extend:1,extens:[7,8],extent:1,extern:1,extra:[0,8],extract:1,facilit:4,fact:[0,8],fail:[0,7],fals:[0,1,6],familar:8,far:0,faster:1,feature_dict:1,feature_nam:1,featuredict:1,featureselect:1,featureselectionapplet:1,feed:0,few:0,fftw3:2,field:1,figur:[0,9],file:[0,1,5,6],file_path:1,filemissingerror:6,filename_suffix:1,filepath:1,filesystem:1,fill:1,fill_properti:1,filt:0,filter:8,filter_implement:1,finallength:[0,1,8],find:[1,5],fine:8,finicki:8,fire:[0,8],first:[0,1],fix:[0,6],flag:0,flat:1,flow:4,follow:[0,1,2,6,8],forc:8,force_all_sav:6,forceaxisord:1,forcereadonli:6,forest:1,form:[0,4],format:[0,1],found:[1,6,9],framework:[4,9],free:0,from:[],full:[1,6],fulli:[0,8],func:8,functool:8,futur:[1,8],gener:[],get:[0,1,5,8],getallplugin:5,getcwd:1,getdirtyappletnam:6,getlan:8,getlay:1,getmultilanegui:0,getnextlabelcolor:1,getnextlabelnam:1,getnextpmapcolor:1,getpluginsofcategori:5,github:[],given:[0,1,6,8],globstr:1,goal:4,grain:8,graph:[0,1,4,8],grasp:9,grayscalelay:1,greenlet:2,group:[0,1],groupvers:0,guinam:1,h5_file_kwarg:6,h5py:[0,2,6],handl:[0,1,9],handleappletstateupdaterequest:0,handlenewlanesad:0,handler:1,handlewarn:1,happen:0,hash:8,have:[0,1,7,8,9],hdf5:[0,1,2],hdf5file:0,headless:[0,1,6],help:[1,8],helper:1,here:[0,9],hidden:1,hideev:1,home:1,hood:9,hook:0,hostnam:6,how:[0,1,9],http:5,ilastik:[],ilastikrc:[1,5],ilp:6,imag:[0,1,4,8,9],imageindex:[0,1],imagelanead:0,imagelaneindex:0,imagelaneremov:0,imagenam:[0,1],imagenamelistslot:0,immedi:0,immut:8,implement:[0,1,4,5,6,8,9],impli:0,importlabelinfo:1,includ:[0,1,7,8],incom:1,inconsist:6,increas:1,index:[1,3,8,9],indic:[1,6],individu:0,inform:[0,5],inherit:[0,8],initappletdrawerui:1,initi:[0,6,8],initviewercontrolui:1,initwithouttopgroup:0,inner:8,input:[0,1,8,9],inputimag:1,inputslot:1,insert:[0,8],inslot:0,inspire:8,instal:[7,8],instanc:[0,1,5,6,8],instanti:[0,6,8],instantiat:0,instead:[0,1],instructiontext:1,integ:0,intend:[0,1],interact:[0,1],interest:0,interfac:[0,4,8],intern:[0,1,7,8,9],interpret:0,invalid:0,invaliddimensionalityerror:1,invoc:0,iplugin:5,isdirti:0,item:0,iter:0,itself:[0,6,8],json:1,just:[0,1],keep:1,keeper:0,keyvalu:6,keyvalue_nam:6,kind:6,kit:4,know:9,known:4,kwarg:[0,1,8],label:[],labeldelet:1,labeleraservalu:1,labelimag:1,labelindex:1,labelingapplet:1,labelinggui:1,labelingslot:1,labelinput:1,labelvolum:1,lane_index:1,laneindex:[0,1,8],last:1,lastchannelisalpha:1,later:1,launch:0,layer:[],layerview:1,layerviewerapplet:1,layerviewergui:1,lazyflow:[1,2,4,7,8,9],least:0,leverag:4,libjpeg:2,libpng:2,libtiff:2,like:[0,1,5,8],limit:7,line:[0,1,5,6],list:[0,1,5,6,9],listen:0,load:[0,1,6,9],local:1,local_filepath:6,locat:[1,6],log:7,logger:7,logic:0,look:[0,1,8],loop:8,lost:0,lot:7,made:[0,6],mai:[0,1,5,8],main:[0,1,8],mainli:1,make:[0,1,5,7,8,9],manag:5,mangl:1,mani:[0,1],manipul:0,map:1,margin:1,master:0,match:0,max_lan:1,maxcoord:1,maximum:1,mechan:8,member:[0,6,8],memori:0,menu:[0,1],mere:8,merger:1,messag:1,method:[0,1,6,8],might:0,mimic:8,mincoord:1,mind:1,minim:1,miss:1,mode:[0,6],modul:3,moment:0,monitor:1,more:[0,1,5,8,9],most:[0,1,8,9],mous:1,much:0,multi:8,multilaneoperatorabc:[0,8],multipl:[0,1,8,9],multislot:[0,8],multithread:4,must:[0,1,5,6,7,8,9],myproject:6,mywidget:8,name:[0,1,6],namespac:1,ndarrai:1,ndim:1,necessari:[0,1,2],need:[0,1,8,9],nest:1,net:5,network:8,newdir:0,newpath:6,next:[1,9],node_uuid:6,nologcaptur:7,non:[],none:[0,1,6,8],nonzero:0,nonzerolabelblock:1,nosetest:[2,7],note:[0,1,8],noth:1,notic:[0,9],notion:0,now:5,number:[0,1,8],numpi:[1,2],object:[],objectclassif:1,objectclassificationapplet:1,objectclassificationgui:1,objectextract:1,objectextractionapplet:1,objectfeatur:5,objectfeaturesplugin:1,observ:8,occupi:0,offici:5,old:[1,6],olddir:0,omit:9,onc:[0,1,9],once:6,onclick:1,onlabelcolorchang:1,onlabellistdatachang:1,onlabelnamechang:1,onli:[0,1,5,6,8],only:8,onpmapcolorchang:1,onprojectload:0,onto:1,opadapttimelistroi:1,opcachedregionfeatur:1,opcompresseduserlabelarrai:1,opdataselect:1,open:[0,1,6],openprojectfil:6,oper:[0,1,6,8,9],operator_arg:8,operator_kwarg:8,operatorclass:8,operatorsubview:8,operatorwrapp:[1,8,9],oplabel:1,oplabelingsinglelan:1,oplabelingtoplevel:1,oplayerview:1,opmaxlabel:1,opmultilanewrapp:8,opmultirelabelsegment:1,opobjectcenterimag:1,opobjectclassif:1,opobjectextract:1,opobjectpredict:1,opobjecttrain:1,opregionfeatur:1,oprelabelsegment:1,option:[0,1,2,7],optional:[0,1],origin:[0,1,6,8],oring:0,orphan:0,other:[0,1,8],otherwis:[0,1],our:1,out:6,outdat:6,outer:8,outputslot:1,overlap:1,overrid:[0,1],overview:[],overwrit:0,overwritten:6,own:[0,1,4,5],page:[0,3],pair:1,param:[1,6],paramet:[0,1,6,8,9],parent:[0,1,8],parentapplet:1,pars:1,parse_known_arg:1,parse_known_cmdline_arg:1,parsed_arg:1,part:8,partial:8,particular:[0,1,4,5],pass:[0,6,8,9],path:[0,1,6],pattern:8,per:1,percentag:0,percentcomplet:0,perform:[0,1],piec:4,pipelin:[0,1,4,8,9],pixelclassif:[1,7],pixelclassificationapplet:1,place:[0,1],platform:2,plugin:[],plugin_directori:[1,5],pluginmanag:5,plugins_default:5,point:8,polici:5,pop:1,pos5d:1,posit:1,possibl:0,post:8,postcondit:[6,8],potenti:6,precalcul:1,predict:1,prefer:1,prepar:[0,8],preparefornewlan:0,present:[0,1],preserv:1,previou:[0,1],previous:0,privat:0,probabl:1,process:[0,1,4],produc:1,programmat:1,progress:[0,1],progress_slot:1,progressdialog:1,progressincr:0,progresssign:0,project:[],project_creation_arg:[0,6],project_kei:6,projectdatagroup:1,projectfil:1,projectfilegroupnam:1,projectfilepath:[0,6],projectmanag:[0,6],projectmetadata:[0,1],projectmetadataapplet:1,projectvers:6,projectversionerror:6,promotedslotnam:8,propag:[0,9],proper:0,properti:[0,1],provid:[0,1,4,8],psutil:2,purpos:1,put:0,pyqt4:2,pyqt:8,qapplicat:8,qcolor:1,qimage2ndarrai:2,qmenu:0,qobject:8,qt4:2,queri:1,rais:[0,1,6],random:1,rapid:4,raw:1,rawinputslot:1,rawvolum:1,read:[0,1,6],readi:[0,1],real:1,reason:[0,9],receiv:1,recurs:5,reduc:0,refer:[0,8],regard:0,region:1,regionfeatur:1,regress:7,reimplement:0,rel:[0,1],relev:8,rememb:5,remov:[0,1,8],removelan:[1,8],renam:6,render:0,repairfil:0,repeat:0,replac:[1,8],repo:[2,4],report:1,repositori:4,request:[0,1],requestsav:0,requir:0,resid:1,resiz:[1,8],resourc:0,resourec:0,respond:[0,1],respons:[0,1],rest:8,restor:0,result:[0,1,6,9],reusabl:1,rgbalayer:1,right:[0,1],roi:1,role_nam:1,room:0,rout:8,row:1,rtype:1,run:7,safe:8,sai:0,said:0,same:[0,1],satisfi:8,save:[0,1,6],save_export_progress_dialog:1,saveerror:6,saveproject:6,saveprojecta:6,saveprojectsnapshot:6,screenshot:0,script:[0,7],search:[3,5],second:0,section:0,see:[0,1,5,8],segment:1,select:[],selected_featur:1,selectedfeatur:1,selectlabel:1,self:[0,8],selfdepend:0,send:[0,8],sendmessagetoserv:0,sent:1,separ:4,sequenc:0,serialblockslot:0,serialclassifierslot:0,serializetohdf5:0,seriallistslot:0,serialslot:0,serv:[0,1,4],server:0,servernam:0,set:[0,1,6,7],setcapt:8,setcategoriesfilt:5,setenabl:0,setimageindex:0,settext:8,setup:1,setupcach:1,setuplay:1,shape:1,shell:[0,1,4,6,9],shellrequest:0,shellrequestsign:0,should:[0,1,5,6,8,9],shouldseri:0,show:0,show_axis_detail:1,shown:[0,1,9],shrink_to_bb:0,signal:[0,8],signatur:[0,8],signifi:1,silent:8,similar:1,simpl:[0,1,4,8,9],simpler:0,simplesign:8,simplest:0,simpli:[1,5,8,9],simplifi:[0,9],sinc:1,singl:[0,1,8,9],singlelaneguiclass:0,singlelaneoperatorclass:0,sink:1,slice:1,slow:8,snapshotpath:6,solid:9,some:[0,1,6,8],someth:0,sometim:7,sourc:[0,1,6,8],sourceforg:5,special:[0,1],specif:[],specifi:8,stack:1,stackvolumecachedir:1,stai:8,standard:[],start:[1,8],state:[0,6,9],statu:[0,1],statusupdatesign:0,step:[0,1,2,6],still:6,stop:0,stopandcleanup:0,store:[0,1,6],store_transform:0,string:[0,6],subclass:[0,1,5,6],subdirectori:7,subgroup:0,subnam:0,subscrib:8,subset:[1,8],subslot:8,subview:8,succe:0,suffici:[1,8],suitabl:1,support:[0,1,8],supportilastik05import:1,sure:[8,9],sweat:0,sync:[6,8],synchron:[1,8],syncwithimageindex:0,system:[],tabl:[],tag:1,take:[0,1,7],taken:1,task:0,tcp:0,tell:0,temporari:6,terminolog:0,test_applet:7,testeach:7,testpixelclassificationgui:7,testpixelclassificationmultiimagegui:7,text:8,than:[1,8],thei:[0,1,7,8],them:[0,1,7,9],themselv:0,thi:[0,1,4,6,7,8,9],thin:9,thing:[0,5],those:[0,1],thread:[7,8],threadrout:8,threadsaf:8,three:[0,4],thresholdmask:[1,9],thresholdmaskingapplet:1,thunkevent:8,thunkeventhandl:8,time:[0,1,7],timelin:0,titl:[0,1],tmp:6,togeth:[0,4,8],too:1,tool:7,topgroup:0,topgroupnam:0,topleft:1,topleveloper:0,topleveloperatorview:[0,1],touch:6,trackingworkflow:1,train:1,transfer:1,transform:[0,1],travi:7,tri:1,trigger:0,turn:0,two:[0,8,9],type:[0,6,8],typic:0,under:9,underneath:1,unecessari:7,unfortun:7,unit:7,unknown:6,unless:0,unreadi:1,unsubcrib:8,unused_arg:1,updat:[0,1,8],update:[1,6],updateworkingdirectori:0,upstream:1,usabl:0,use:[1,7],useful:[],user:[0,1,4,8,9],using:[],usual:1,util:8,utiliti:[],valu:[0,1],variou:0,veri:1,version:[0,6],via:[0,4,8,9],view:[0,1,4,8],viewabl:1,viewer:[],viewercontrolwidget:0,vigra:2,vigranumpi:2,vigrawatershedview:1,vigrawatershedviewerapplet:1,visibl:0,visual:[],volum:1,volumeeditor:1,volumina:[1,2,4],voxel:1,vtk:2,vtk_use_qt:2,vtk_use_qvtk_qtopengl:2,vtk_wrap_python:2,vtk_wrap_python_sip:2,wai:[0,2],want:[0,8],warn:1,were:[1,8,9],what:[1,8],when:[0,1,6,8],where:[0,1],whether:[0,1,6],which:[0,1,4,5,7,8,9],whole:1,whose:[1,8],widget:[0,1,8],window:1,wise:1,within:[1,7,8],without:[0,1,6],work:[0,1],workflow_class:6,workflow_cmdline_arg:[0,6],workflowclass:6,workingdirectori:1,worklow:1,would:1,wrap:1,wrapper:1,write:[],written:[0,1],wsgiref:2,xyzc:1,yapsi:[1,2,5],you:[0,1,5,7,8,9],your:[0,1,5,8],zero:[0,1],zoom:0},titles:["Applet API","Applet Library","Appendix: Development Dependencies","ilastik 1.0 developer documentation","Overview","Plugin System","Project Manager","Appendix: Testing Ilastik","Utility Classes","Advanced Workflow Design"],titleterms:{"class":[0,1,8],advanc:9,api:0,appendix:[2,7],applet:[0,1],base:[0,1],batch:1,categori:5,classif:1,concept:0,data:1,depend:2,design:9,develop:[2,3],deviat:1,document:3,exampl:1,extraction:1,featur:1,from:1,gener:2,gui:[0,7,8],ilastik:[2,3,7],image:[0,9],indice:3,label:1,lane:0,layer:1,level:0,librari:[0,1],manag:6,mask:1,mean:1,metadata:1,multi:9,non:7,object:1,operat:0,output:1,overview:4,pixel:1,plugin:5,project:[1,2,6],python:2,select:1,serial:0,serializ:0,slot:0,specif:1,standard:1,standardapplet:0,sub:2,system:5,tabl:3,test:[2,7],threshold:1,top:0,useful:1,using:5,utiliti:8,viewer:1,visual:9,watersh:1,workflow:[0,1,9],write:5}})