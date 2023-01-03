gdjs.THANKSCode = {};
gdjs.THANKSCode.GDTankyoutextObjects1= [];
gdjs.THANKSCode.GDTankyoutextObjects2= [];
gdjs.THANKSCode.GDCreditsButtonObjects1= [];
gdjs.THANKSCode.GDCreditsButtonObjects2= [];

gdjs.THANKSCode.conditionTrue_0 = {val:false};
gdjs.THANKSCode.condition0IsTrue_0 = {val:false};
gdjs.THANKSCode.condition1IsTrue_0 = {val:false};
gdjs.THANKSCode.condition2IsTrue_0 = {val:false};


gdjs.THANKSCode.mapOfGDgdjs_46THANKSCode_46GDCreditsButtonObjects1Objects = Hashtable.newFrom({"CreditsButton": gdjs.THANKSCode.GDCreditsButtonObjects1});
gdjs.THANKSCode.eventsList0 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.THANKSCode.GDCreditsButtonObjects1);

gdjs.THANKSCode.condition0IsTrue_0.val = false;
gdjs.THANKSCode.condition1IsTrue_0.val = false;
{
gdjs.THANKSCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.THANKSCode.mapOfGDgdjs_46THANKSCode_46GDCreditsButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.THANKSCode.condition0IsTrue_0.val ) {
{
gdjs.THANKSCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.THANKSCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}}

}


};

gdjs.THANKSCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.THANKSCode.GDTankyoutextObjects1.length = 0;
gdjs.THANKSCode.GDTankyoutextObjects2.length = 0;
gdjs.THANKSCode.GDCreditsButtonObjects1.length = 0;
gdjs.THANKSCode.GDCreditsButtonObjects2.length = 0;

gdjs.THANKSCode.eventsList0(runtimeScene);

return;

}

gdjs['THANKSCode'] = gdjs.THANKSCode;
