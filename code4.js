gdjs.INtroCode = {};
gdjs.INtroCode.GDBard4Objects1_1final = [];

gdjs.INtroCode.GDBard6Objects2_1final = [];

gdjs.INtroCode.GDBard4Objects1= [];
gdjs.INtroCode.GDBard4Objects2= [];
gdjs.INtroCode.GDBard4Objects3= [];
gdjs.INtroCode.GDGrassObjects1= [];
gdjs.INtroCode.GDGrassObjects2= [];
gdjs.INtroCode.GDGrassObjects3= [];
gdjs.INtroCode.GDBard6Objects1= [];
gdjs.INtroCode.GDBard6Objects2= [];
gdjs.INtroCode.GDBard6Objects3= [];
gdjs.INtroCode.GDStoneObjects1= [];
gdjs.INtroCode.GDStoneObjects2= [];
gdjs.INtroCode.GDStoneObjects3= [];
gdjs.INtroCode.GDFakestoneObjects1= [];
gdjs.INtroCode.GDFakestoneObjects2= [];
gdjs.INtroCode.GDFakestoneObjects3= [];
gdjs.INtroCode.GDFakebricksObjects1= [];
gdjs.INtroCode.GDFakebricksObjects2= [];
gdjs.INtroCode.GDFakebricksObjects3= [];
gdjs.INtroCode.GDBricksObjects1= [];
gdjs.INtroCode.GDBricksObjects2= [];
gdjs.INtroCode.GDBricksObjects3= [];
gdjs.INtroCode.GDGlitchObjects1= [];
gdjs.INtroCode.GDGlitchObjects2= [];
gdjs.INtroCode.GDGlitchObjects3= [];
gdjs.INtroCode.GDFloorTileObjects1= [];
gdjs.INtroCode.GDFloorTileObjects2= [];
gdjs.INtroCode.GDFloorTileObjects3= [];

gdjs.INtroCode.conditionTrue_0 = {val:false};
gdjs.INtroCode.condition0IsTrue_0 = {val:false};
gdjs.INtroCode.condition1IsTrue_0 = {val:false};
gdjs.INtroCode.condition2IsTrue_0 = {val:false};
gdjs.INtroCode.conditionTrue_1 = {val:false};
gdjs.INtroCode.condition0IsTrue_1 = {val:false};
gdjs.INtroCode.condition1IsTrue_1 = {val:false};
gdjs.INtroCode.condition2IsTrue_1 = {val:false};


gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBard4Objects1ObjectsGDgdjs_46INtroCode_46GDBard6Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.INtroCode.GDBard4Objects1, "Bard6": gdjs.INtroCode.GDBard6Objects1});
gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.INtroCode.GDStoneObjects1});
gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.INtroCode.GDStoneObjects1});
gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.INtroCode.GDStoneObjects1});
gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBard4Objects1ObjectsGDgdjs_46INtroCode_46GDBard6Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.INtroCode.GDBard4Objects1, "Bard6": gdjs.INtroCode.GDBard6Objects1});
gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBricksObjects1Objects = Hashtable.newFrom({"Bricks": gdjs.INtroCode.GDBricksObjects1});
gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBricksObjects1Objects = Hashtable.newFrom({"Bricks": gdjs.INtroCode.GDBricksObjects1});
gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBricksObjects1Objects = Hashtable.newFrom({"Bricks": gdjs.INtroCode.GDBricksObjects1});
gdjs.INtroCode.eventsList0 = function(runtimeScene) {

{


gdjs.INtroCode.condition0IsTrue_0.val = false;
gdjs.INtroCode.condition1IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.INtroCode.condition0IsTrue_0.val ) {
{
{gdjs.INtroCode.conditionTrue_1 = gdjs.INtroCode.condition1IsTrue_0;
gdjs.INtroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8488140);
}
}}
if (gdjs.INtroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects2);
{for(var i = 0, len = gdjs.INtroCode.GDBard4Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard4Objects2[i].setAnimationName("Left");
}
}}

}


{


gdjs.INtroCode.condition0IsTrue_0.val = false;
gdjs.INtroCode.condition1IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.INtroCode.condition0IsTrue_0.val ) {
{
{gdjs.INtroCode.conditionTrue_1 = gdjs.INtroCode.condition1IsTrue_0;
gdjs.INtroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8488796);
}
}}
if (gdjs.INtroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects2);
{for(var i = 0, len = gdjs.INtroCode.GDBard4Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard4Objects2[i].setAnimationName("Right");
}
}}

}


{


gdjs.INtroCode.condition0IsTrue_0.val = false;
gdjs.INtroCode.condition1IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.INtroCode.condition0IsTrue_0.val ) {
{
{gdjs.INtroCode.conditionTrue_1 = gdjs.INtroCode.condition1IsTrue_0;
gdjs.INtroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8489500);
}
}}
if (gdjs.INtroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects2);
{for(var i = 0, len = gdjs.INtroCode.GDBard4Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard4Objects2[i].setAnimationName("Up");
}
}}

}


{


gdjs.INtroCode.condition0IsTrue_0.val = false;
gdjs.INtroCode.condition1IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.INtroCode.condition0IsTrue_0.val ) {
{
{gdjs.INtroCode.conditionTrue_1 = gdjs.INtroCode.condition1IsTrue_0;
gdjs.INtroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8489956);
}
}}
if (gdjs.INtroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects2);
{for(var i = 0, len = gdjs.INtroCode.GDBard4Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard4Objects2[i].setAnimationName("Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects2);

gdjs.INtroCode.condition0IsTrue_0.val = false;
gdjs.INtroCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.INtroCode.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.INtroCode.GDBard4Objects2[i].getBehavior("TopDownMovement").getXVelocity() == 0 ) {
        gdjs.INtroCode.condition0IsTrue_0.val = true;
        gdjs.INtroCode.GDBard4Objects2[k] = gdjs.INtroCode.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.INtroCode.GDBard4Objects2.length = k;}if ( gdjs.INtroCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.INtroCode.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.INtroCode.GDBard4Objects2[i].getBehavior("TopDownMovement").getYVelocity() == 0 ) {
        gdjs.INtroCode.condition1IsTrue_0.val = true;
        gdjs.INtroCode.GDBard4Objects2[k] = gdjs.INtroCode.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.INtroCode.GDBard4Objects2.length = k;}}
if (gdjs.INtroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.INtroCode.GDBard4Objects2 */
{for(var i = 0, len = gdjs.INtroCode.GDBard4Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard4Objects2[i].pauseAnimation();
}
}}

}


{

gdjs.INtroCode.GDBard4Objects1.length = 0;


gdjs.INtroCode.condition0IsTrue_0.val = false;
{
{gdjs.INtroCode.conditionTrue_1 = gdjs.INtroCode.condition0IsTrue_0;
gdjs.INtroCode.GDBard4Objects1_1final.length = 0;gdjs.INtroCode.condition0IsTrue_1.val = false;
gdjs.INtroCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects2);
for(var i = 0, k = 0, l = gdjs.INtroCode.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.INtroCode.GDBard4Objects2[i].getBehavior("TopDownMovement").getXVelocity() != 0 ) {
        gdjs.INtroCode.condition0IsTrue_1.val = true;
        gdjs.INtroCode.GDBard4Objects2[k] = gdjs.INtroCode.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.INtroCode.GDBard4Objects2.length = k;if( gdjs.INtroCode.condition0IsTrue_1.val ) {
    gdjs.INtroCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.INtroCode.GDBard4Objects2.length;j<jLen;++j) {
        if ( gdjs.INtroCode.GDBard4Objects1_1final.indexOf(gdjs.INtroCode.GDBard4Objects2[j]) === -1 )
            gdjs.INtroCode.GDBard4Objects1_1final.push(gdjs.INtroCode.GDBard4Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects2);
for(var i = 0, k = 0, l = gdjs.INtroCode.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.INtroCode.GDBard4Objects2[i].getBehavior("TopDownMovement").getYVelocity() != 0 ) {
        gdjs.INtroCode.condition1IsTrue_1.val = true;
        gdjs.INtroCode.GDBard4Objects2[k] = gdjs.INtroCode.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.INtroCode.GDBard4Objects2.length = k;if( gdjs.INtroCode.condition1IsTrue_1.val ) {
    gdjs.INtroCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.INtroCode.GDBard4Objects2.length;j<jLen;++j) {
        if ( gdjs.INtroCode.GDBard4Objects1_1final.indexOf(gdjs.INtroCode.GDBard4Objects2[j]) === -1 )
            gdjs.INtroCode.GDBard4Objects1_1final.push(gdjs.INtroCode.GDBard4Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.INtroCode.GDBard4Objects1_1final, gdjs.INtroCode.GDBard4Objects1);
}
}
}if (gdjs.INtroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.INtroCode.GDBard4Objects1 */
{for(var i = 0, len = gdjs.INtroCode.GDBard4Objects1.length ;i < len;++i) {
    gdjs.INtroCode.GDBard4Objects1[i].playAnimation();
}
}}

}


};gdjs.INtroCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.INtroCode.condition0IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 0;
}if (gdjs.INtroCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.INtroCode.GDBard6Objects1, gdjs.INtroCode.GDBard6Objects2);

{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects2[i].setAnimationName("Left");
}
}}

}


{


gdjs.INtroCode.condition0IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 1;
}if (gdjs.INtroCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.INtroCode.GDBard6Objects1, gdjs.INtroCode.GDBard6Objects2);

{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects2[i].setAnimationName("Right");
}
}}

}


{


gdjs.INtroCode.condition0IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 2;
}if (gdjs.INtroCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.INtroCode.GDBard6Objects1, gdjs.INtroCode.GDBard6Objects2);

{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects2[i].setAnimationName("Up");
}
}}

}


{


gdjs.INtroCode.condition0IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 3;
}if (gdjs.INtroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.INtroCode.GDBard6Objects1 */
{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects1.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects1.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects1[i].setAnimationName("Down");
}
}}

}


};gdjs.INtroCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.INtroCode.GDBard6Objects1, gdjs.INtroCode.GDBard6Objects2);


gdjs.INtroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.INtroCode.GDBard6Objects2.length;i<l;++i) {
    if ( !(gdjs.INtroCode.GDBard6Objects2[i].getTimerElapsedTimeInSecondsOrNaN("Wait") > 0) ) {
        gdjs.INtroCode.condition0IsTrue_0.val = true;
        gdjs.INtroCode.GDBard6Objects2[k] = gdjs.INtroCode.GDBard6Objects2[i];
        ++k;
    }
}
gdjs.INtroCode.GDBard6Objects2.length = k;}if (gdjs.INtroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.INtroCode.GDBard6Objects2 */
{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects2[i].resetTimer("Wait");
}
}{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects2[i].returnVariable(gdjs.INtroCode.GDBard6Objects2[i].getVariables().get("WaitDuration")).setNumber(gdjs.randomFloatInRange(1.5, 2.5));
}
}}

}


{



}


{

/* Reuse gdjs.INtroCode.GDBard6Objects1 */

gdjs.INtroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.INtroCode.GDBard6Objects1.length;i<l;++i) {
    if ( gdjs.INtroCode.GDBard6Objects1[i].getTimerElapsedTimeInSecondsOrNaN("Wait") > (gdjs.RuntimeObject.getVariableNumber(gdjs.INtroCode.GDBard6Objects1[i].getVariables().get("WaitDuration"))) ) {
        gdjs.INtroCode.condition0IsTrue_0.val = true;
        gdjs.INtroCode.GDBard6Objects1[k] = gdjs.INtroCode.GDBard6Objects1[i];
        ++k;
    }
}
gdjs.INtroCode.GDBard6Objects1.length = k;}if (gdjs.INtroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.INtroCode.GDBard6Objects1 */
{runtimeScene.getVariables().get("Direction").setNumber(gdjs.randomInRange(0, 3));
}{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects1.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects1[i].removeTimer("Wait");
}
}
{ //Subevents
gdjs.INtroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.INtroCode.eventsList3 = function(runtimeScene) {

{

gdjs.INtroCode.GDBard6Objects2.length = 0;


gdjs.INtroCode.condition0IsTrue_0.val = false;
{
{gdjs.INtroCode.conditionTrue_1 = gdjs.INtroCode.condition0IsTrue_0;
gdjs.INtroCode.GDBard6Objects2_1final.length = 0;gdjs.INtroCode.condition0IsTrue_1.val = false;
gdjs.INtroCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.INtroCode.GDBard6Objects3);
for(var i = 0, k = 0, l = gdjs.INtroCode.GDBard6Objects3.length;i<l;++i) {
    if ( gdjs.INtroCode.GDBard6Objects3[i].getBehavior("TopDownMovement").getXVelocity() != 0 ) {
        gdjs.INtroCode.condition0IsTrue_1.val = true;
        gdjs.INtroCode.GDBard6Objects3[k] = gdjs.INtroCode.GDBard6Objects3[i];
        ++k;
    }
}
gdjs.INtroCode.GDBard6Objects3.length = k;if( gdjs.INtroCode.condition0IsTrue_1.val ) {
    gdjs.INtroCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.INtroCode.GDBard6Objects3.length;j<jLen;++j) {
        if ( gdjs.INtroCode.GDBard6Objects2_1final.indexOf(gdjs.INtroCode.GDBard6Objects3[j]) === -1 )
            gdjs.INtroCode.GDBard6Objects2_1final.push(gdjs.INtroCode.GDBard6Objects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.INtroCode.GDBard6Objects3);
for(var i = 0, k = 0, l = gdjs.INtroCode.GDBard6Objects3.length;i<l;++i) {
    if ( gdjs.INtroCode.GDBard6Objects3[i].getBehavior("TopDownMovement").getYVelocity() != 0 ) {
        gdjs.INtroCode.condition1IsTrue_1.val = true;
        gdjs.INtroCode.GDBard6Objects3[k] = gdjs.INtroCode.GDBard6Objects3[i];
        ++k;
    }
}
gdjs.INtroCode.GDBard6Objects3.length = k;if( gdjs.INtroCode.condition1IsTrue_1.val ) {
    gdjs.INtroCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.INtroCode.GDBard6Objects3.length;j<jLen;++j) {
        if ( gdjs.INtroCode.GDBard6Objects2_1final.indexOf(gdjs.INtroCode.GDBard6Objects3[j]) === -1 )
            gdjs.INtroCode.GDBard6Objects2_1final.push(gdjs.INtroCode.GDBard6Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.INtroCode.GDBard6Objects2_1final, gdjs.INtroCode.GDBard6Objects2);
}
}
}if (gdjs.INtroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.INtroCode.GDBard6Objects2 */
{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects2.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects2[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.INtroCode.GDBard6Objects1);

gdjs.INtroCode.condition0IsTrue_0.val = false;
gdjs.INtroCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.INtroCode.GDBard6Objects1.length;i<l;++i) {
    if ( gdjs.INtroCode.GDBard6Objects1[i].getBehavior("TopDownMovement").getXVelocity() == 0 ) {
        gdjs.INtroCode.condition0IsTrue_0.val = true;
        gdjs.INtroCode.GDBard6Objects1[k] = gdjs.INtroCode.GDBard6Objects1[i];
        ++k;
    }
}
gdjs.INtroCode.GDBard6Objects1.length = k;}if ( gdjs.INtroCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.INtroCode.GDBard6Objects1.length;i<l;++i) {
    if ( gdjs.INtroCode.GDBard6Objects1[i].getBehavior("TopDownMovement").getYVelocity() == 0 ) {
        gdjs.INtroCode.condition1IsTrue_0.val = true;
        gdjs.INtroCode.GDBard6Objects1[k] = gdjs.INtroCode.GDBard6Objects1[i];
        ++k;
    }
}
gdjs.INtroCode.GDBard6Objects1.length = k;}}
if (gdjs.INtroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.INtroCode.GDBard6Objects1 */
{for(var i = 0, len = gdjs.INtroCode.GDBard6Objects1.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects1[i].pauseAnimation();
}
}
{ //Subevents
gdjs.INtroCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBard4Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.INtroCode.GDBard4Objects1});
gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDFloorTileObjects1Objects = Hashtable.newFrom({"FloorTile": gdjs.INtroCode.GDFloorTileObjects1});
gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBard4Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.INtroCode.GDBard4Objects1});
gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDGlitchObjects1Objects = Hashtable.newFrom({"Glitch": gdjs.INtroCode.GDGlitchObjects1});
gdjs.INtroCode.asyncCallback8951932 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lv2", false);
}}
gdjs.INtroCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.INtroCode.asyncCallback8951932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.INtroCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.INtroCode.condition0IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.INtroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{gdjs.evtTools.window.setWindowSize(runtimeScene, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 4, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 4, true);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Glitch"), gdjs.INtroCode.GDGlitchObjects1);
{for(var i = 0, len = gdjs.INtroCode.GDGlitchObjects1.length ;i < len;++i) {
    gdjs.INtroCode.GDGlitchObjects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.INtroCode.GDBard6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.INtroCode.GDStoneObjects1);

gdjs.INtroCode.condition0IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBard4Objects1ObjectsGDgdjs_46INtroCode_46GDBard6Objects1Objects, gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDStoneObjects1Objects, false, runtimeScene, true);
}if (gdjs.INtroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.INtroCode.GDBard4Objects1 */
/* Reuse gdjs.INtroCode.GDBard6Objects1 */
/* Reuse gdjs.INtroCode.GDStoneObjects1 */
{for(var i = 0, len = gdjs.INtroCode.GDBard4Objects1.length ;i < len;++i) {
    gdjs.INtroCode.GDBard4Objects1[i].separateFromObjectsList(gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDStoneObjects1Objects, false);
}
for(var i = 0, len = gdjs.INtroCode.GDBard6Objects1.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects1[i].separateFromObjectsList(gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDStoneObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.INtroCode.GDBard6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bricks"), gdjs.INtroCode.GDBricksObjects1);

gdjs.INtroCode.condition0IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBard4Objects1ObjectsGDgdjs_46INtroCode_46GDBard6Objects1Objects, gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBricksObjects1Objects, false, runtimeScene, true);
}if (gdjs.INtroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.INtroCode.GDBard4Objects1 */
/* Reuse gdjs.INtroCode.GDBard6Objects1 */
/* Reuse gdjs.INtroCode.GDBricksObjects1 */
{for(var i = 0, len = gdjs.INtroCode.GDBard4Objects1.length ;i < len;++i) {
    gdjs.INtroCode.GDBard4Objects1[i].separateFromObjectsList(gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBricksObjects1Objects, false);
}
for(var i = 0, len = gdjs.INtroCode.GDBard6Objects1.length ;i < len;++i) {
    gdjs.INtroCode.GDBard6Objects1[i].separateFromObjectsList(gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBricksObjects1Objects, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.INtroCode.GDBard4Objects1.length !== 0 ? gdjs.INtroCode.GDBard4Objects1[0] : null), false, "", 0);
}}

}


{


gdjs.INtroCode.eventsList0(runtimeScene);
}


{


gdjs.INtroCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("FloorTile"), gdjs.INtroCode.GDFloorTileObjects1);

gdjs.INtroCode.condition0IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBard4Objects1Objects, gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDFloorTileObjects1Objects, false, runtimeScene, false);
}if (gdjs.INtroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.INtroCode.GDBard4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Fakebricks"), gdjs.INtroCode.GDFakebricksObjects1);
gdjs.copyArray(runtimeScene.getObjects("Glitch"), gdjs.INtroCode.GDGlitchObjects1);
{for(var i = 0, len = gdjs.INtroCode.GDBard4Objects1.length ;i < len;++i) {
    gdjs.INtroCode.GDBard4Objects1[i].addForceTowardObject((gdjs.INtroCode.GDGlitchObjects1.length !== 0 ? gdjs.INtroCode.GDGlitchObjects1[0] : null), 100, 0);
}
}{for(var i = 0, len = gdjs.INtroCode.GDFakebricksObjects1.length ;i < len;++i) {
    gdjs.INtroCode.GDFakebricksObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.INtroCode.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Glitch"), gdjs.INtroCode.GDGlitchObjects1);

gdjs.INtroCode.condition0IsTrue_0.val = false;
{
gdjs.INtroCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDBard4Objects1Objects, gdjs.INtroCode.mapOfGDgdjs_46INtroCode_46GDGlitchObjects1Objects, false, runtimeScene, false);
}if (gdjs.INtroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.INtroCode.GDBard4Objects1 */
{for(var i = 0, len = gdjs.INtroCode.GDBard4Objects1.length ;i < len;++i) {
    gdjs.INtroCode.GDBard4Objects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.INtroCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.INtroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.INtroCode.GDBard4Objects1.length = 0;
gdjs.INtroCode.GDBard4Objects2.length = 0;
gdjs.INtroCode.GDBard4Objects3.length = 0;
gdjs.INtroCode.GDGrassObjects1.length = 0;
gdjs.INtroCode.GDGrassObjects2.length = 0;
gdjs.INtroCode.GDGrassObjects3.length = 0;
gdjs.INtroCode.GDBard6Objects1.length = 0;
gdjs.INtroCode.GDBard6Objects2.length = 0;
gdjs.INtroCode.GDBard6Objects3.length = 0;
gdjs.INtroCode.GDStoneObjects1.length = 0;
gdjs.INtroCode.GDStoneObjects2.length = 0;
gdjs.INtroCode.GDStoneObjects3.length = 0;
gdjs.INtroCode.GDFakestoneObjects1.length = 0;
gdjs.INtroCode.GDFakestoneObjects2.length = 0;
gdjs.INtroCode.GDFakestoneObjects3.length = 0;
gdjs.INtroCode.GDFakebricksObjects1.length = 0;
gdjs.INtroCode.GDFakebricksObjects2.length = 0;
gdjs.INtroCode.GDFakebricksObjects3.length = 0;
gdjs.INtroCode.GDBricksObjects1.length = 0;
gdjs.INtroCode.GDBricksObjects2.length = 0;
gdjs.INtroCode.GDBricksObjects3.length = 0;
gdjs.INtroCode.GDGlitchObjects1.length = 0;
gdjs.INtroCode.GDGlitchObjects2.length = 0;
gdjs.INtroCode.GDGlitchObjects3.length = 0;
gdjs.INtroCode.GDFloorTileObjects1.length = 0;
gdjs.INtroCode.GDFloorTileObjects2.length = 0;
gdjs.INtroCode.GDFloorTileObjects3.length = 0;

gdjs.INtroCode.eventsList5(runtimeScene);

return;

}

gdjs['INtroCode'] = gdjs.INtroCode;
