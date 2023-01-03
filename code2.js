gdjs.Lv2_465Code = {};
gdjs.Lv2_465Code.GDBard4Objects1_1final = [];

gdjs.Lv2_465Code.GDBard6Objects2_1final = [];

gdjs.Lv2_465Code.GDBard4Objects1= [];
gdjs.Lv2_465Code.GDBard4Objects2= [];
gdjs.Lv2_465Code.GDBard4Objects3= [];
gdjs.Lv2_465Code.GDGrassObjects1= [];
gdjs.Lv2_465Code.GDGrassObjects2= [];
gdjs.Lv2_465Code.GDGrassObjects3= [];
gdjs.Lv2_465Code.GDBard6Objects1= [];
gdjs.Lv2_465Code.GDBard6Objects2= [];
gdjs.Lv2_465Code.GDBard6Objects3= [];
gdjs.Lv2_465Code.GDStoneObjects1= [];
gdjs.Lv2_465Code.GDStoneObjects2= [];
gdjs.Lv2_465Code.GDStoneObjects3= [];
gdjs.Lv2_465Code.GDFakestoneObjects1= [];
gdjs.Lv2_465Code.GDFakestoneObjects2= [];
gdjs.Lv2_465Code.GDFakestoneObjects3= [];
gdjs.Lv2_465Code.GDFakebricksObjects1= [];
gdjs.Lv2_465Code.GDFakebricksObjects2= [];
gdjs.Lv2_465Code.GDFakebricksObjects3= [];
gdjs.Lv2_465Code.GDBricksObjects1= [];
gdjs.Lv2_465Code.GDBricksObjects2= [];
gdjs.Lv2_465Code.GDBricksObjects3= [];
gdjs.Lv2_465Code.GDGlitchObjects1= [];
gdjs.Lv2_465Code.GDGlitchObjects2= [];
gdjs.Lv2_465Code.GDGlitchObjects3= [];
gdjs.Lv2_465Code.GDFloorTileObjects1= [];
gdjs.Lv2_465Code.GDFloorTileObjects2= [];
gdjs.Lv2_465Code.GDFloorTileObjects3= [];
gdjs.Lv2_465Code.GDFloorTileTriggerObjects1= [];
gdjs.Lv2_465Code.GDFloorTileTriggerObjects2= [];
gdjs.Lv2_465Code.GDFloorTileTriggerObjects3= [];

gdjs.Lv2_465Code.conditionTrue_0 = {val:false};
gdjs.Lv2_465Code.condition0IsTrue_0 = {val:false};
gdjs.Lv2_465Code.condition1IsTrue_0 = {val:false};
gdjs.Lv2_465Code.condition2IsTrue_0 = {val:false};
gdjs.Lv2_465Code.conditionTrue_1 = {val:false};
gdjs.Lv2_465Code.condition0IsTrue_1 = {val:false};
gdjs.Lv2_465Code.condition1IsTrue_1 = {val:false};
gdjs.Lv2_465Code.condition2IsTrue_1 = {val:false};


gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2_95465Code_46GDBard6Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.Lv2_465Code.GDBard4Objects1, "Bard6": gdjs.Lv2_465Code.GDBard6Objects1});
gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.Lv2_465Code.GDStoneObjects1});
gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.Lv2_465Code.GDStoneObjects1});
gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.Lv2_465Code.GDStoneObjects1});
gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2_95465Code_46GDBard6Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.Lv2_465Code.GDBard4Objects1, "Bard6": gdjs.Lv2_465Code.GDBard6Objects1});
gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBricksObjects1Objects = Hashtable.newFrom({"Bricks": gdjs.Lv2_465Code.GDBricksObjects1});
gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBricksObjects1Objects = Hashtable.newFrom({"Bricks": gdjs.Lv2_465Code.GDBricksObjects1});
gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBricksObjects1Objects = Hashtable.newFrom({"Bricks": gdjs.Lv2_465Code.GDBricksObjects1});
gdjs.Lv2_465Code.eventsList0 = function(runtimeScene) {

{


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
gdjs.Lv2_465Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Lv2_465Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2_465Code.conditionTrue_1 = gdjs.Lv2_465Code.condition1IsTrue_0;
gdjs.Lv2_465Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9854148);
}
}}
if (gdjs.Lv2_465Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_465Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard4Objects2[i].setAnimationName("Left");
}
}}

}


{


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
gdjs.Lv2_465Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Lv2_465Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2_465Code.conditionTrue_1 = gdjs.Lv2_465Code.condition1IsTrue_0;
gdjs.Lv2_465Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8533684);
}
}}
if (gdjs.Lv2_465Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_465Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard4Objects2[i].setAnimationName("Right");
}
}}

}


{


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
gdjs.Lv2_465Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.Lv2_465Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2_465Code.conditionTrue_1 = gdjs.Lv2_465Code.condition1IsTrue_0;
gdjs.Lv2_465Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9853260);
}
}}
if (gdjs.Lv2_465Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_465Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard4Objects2[i].setAnimationName("Up");
}
}}

}


{


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
gdjs.Lv2_465Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.Lv2_465Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2_465Code.conditionTrue_1 = gdjs.Lv2_465Code.condition1IsTrue_0;
gdjs.Lv2_465Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8904100);
}
}}
if (gdjs.Lv2_465Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_465Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard4Objects2[i].setAnimationName("Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_465Code.GDBard4Objects2);

gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
gdjs.Lv2_465Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lv2_465Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2_465Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getXVelocity() == 0 ) {
        gdjs.Lv2_465Code.condition0IsTrue_0.val = true;
        gdjs.Lv2_465Code.GDBard4Objects2[k] = gdjs.Lv2_465Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2_465Code.GDBard4Objects2.length = k;}if ( gdjs.Lv2_465Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Lv2_465Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2_465Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getYVelocity() == 0 ) {
        gdjs.Lv2_465Code.condition1IsTrue_0.val = true;
        gdjs.Lv2_465Code.GDBard4Objects2[k] = gdjs.Lv2_465Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2_465Code.GDBard4Objects2.length = k;}}
if (gdjs.Lv2_465Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Lv2_465Code.GDBard4Objects2 */
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard4Objects2[i].pauseAnimation();
}
}}

}


{

gdjs.Lv2_465Code.GDBard4Objects1.length = 0;


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
{gdjs.Lv2_465Code.conditionTrue_1 = gdjs.Lv2_465Code.condition0IsTrue_0;
gdjs.Lv2_465Code.GDBard4Objects1_1final.length = 0;gdjs.Lv2_465Code.condition0IsTrue_1.val = false;
gdjs.Lv2_465Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_465Code.GDBard4Objects2);
for(var i = 0, k = 0, l = gdjs.Lv2_465Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2_465Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getXVelocity() != 0 ) {
        gdjs.Lv2_465Code.condition0IsTrue_1.val = true;
        gdjs.Lv2_465Code.GDBard4Objects2[k] = gdjs.Lv2_465Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2_465Code.GDBard4Objects2.length = k;if( gdjs.Lv2_465Code.condition0IsTrue_1.val ) {
    gdjs.Lv2_465Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2_465Code.GDBard4Objects2.length;j<jLen;++j) {
        if ( gdjs.Lv2_465Code.GDBard4Objects1_1final.indexOf(gdjs.Lv2_465Code.GDBard4Objects2[j]) === -1 )
            gdjs.Lv2_465Code.GDBard4Objects1_1final.push(gdjs.Lv2_465Code.GDBard4Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_465Code.GDBard4Objects2);
for(var i = 0, k = 0, l = gdjs.Lv2_465Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2_465Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getYVelocity() != 0 ) {
        gdjs.Lv2_465Code.condition1IsTrue_1.val = true;
        gdjs.Lv2_465Code.GDBard4Objects2[k] = gdjs.Lv2_465Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2_465Code.GDBard4Objects2.length = k;if( gdjs.Lv2_465Code.condition1IsTrue_1.val ) {
    gdjs.Lv2_465Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2_465Code.GDBard4Objects2.length;j<jLen;++j) {
        if ( gdjs.Lv2_465Code.GDBard4Objects1_1final.indexOf(gdjs.Lv2_465Code.GDBard4Objects2[j]) === -1 )
            gdjs.Lv2_465Code.GDBard4Objects1_1final.push(gdjs.Lv2_465Code.GDBard4Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Lv2_465Code.GDBard4Objects1_1final, gdjs.Lv2_465Code.GDBard4Objects1);
}
}
}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_465Code.GDBard4Objects1 */
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard4Objects1.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard4Objects1[i].playAnimation();
}
}}

}


};gdjs.Lv2_465Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 0;
}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Lv2_465Code.GDBard6Objects1, gdjs.Lv2_465Code.GDBard6Objects2);

{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects2[i].setAnimationName("Left");
}
}}

}


{


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 1;
}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Lv2_465Code.GDBard6Objects1, gdjs.Lv2_465Code.GDBard6Objects2);

{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects2[i].setAnimationName("Right");
}
}}

}


{


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 2;
}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Lv2_465Code.GDBard6Objects1, gdjs.Lv2_465Code.GDBard6Objects2);

{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects2[i].setAnimationName("Up");
}
}}

}


{


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 3;
}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_465Code.GDBard6Objects1 */
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects1[i].setAnimationName("Down");
}
}}

}


};gdjs.Lv2_465Code.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Lv2_465Code.GDBard6Objects1, gdjs.Lv2_465Code.GDBard6Objects2);


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lv2_465Code.GDBard6Objects2.length;i<l;++i) {
    if ( !(gdjs.Lv2_465Code.GDBard6Objects2[i].getTimerElapsedTimeInSecondsOrNaN("Wait") > 0) ) {
        gdjs.Lv2_465Code.condition0IsTrue_0.val = true;
        gdjs.Lv2_465Code.GDBard6Objects2[k] = gdjs.Lv2_465Code.GDBard6Objects2[i];
        ++k;
    }
}
gdjs.Lv2_465Code.GDBard6Objects2.length = k;}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_465Code.GDBard6Objects2 */
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects2[i].resetTimer("Wait");
}
}{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects2[i].returnVariable(gdjs.Lv2_465Code.GDBard6Objects2[i].getVariables().get("WaitDuration")).setNumber(gdjs.randomFloatInRange(1.5, 2.5));
}
}}

}


{



}


{

/* Reuse gdjs.Lv2_465Code.GDBard6Objects1 */

gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lv2_465Code.GDBard6Objects1.length;i<l;++i) {
    if ( gdjs.Lv2_465Code.GDBard6Objects1[i].getTimerElapsedTimeInSecondsOrNaN("Wait") > (gdjs.RuntimeObject.getVariableNumber(gdjs.Lv2_465Code.GDBard6Objects1[i].getVariables().get("WaitDuration"))) ) {
        gdjs.Lv2_465Code.condition0IsTrue_0.val = true;
        gdjs.Lv2_465Code.GDBard6Objects1[k] = gdjs.Lv2_465Code.GDBard6Objects1[i];
        ++k;
    }
}
gdjs.Lv2_465Code.GDBard6Objects1.length = k;}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_465Code.GDBard6Objects1 */
{runtimeScene.getVariables().get("Direction").setNumber(gdjs.randomInRange(0, 3));
}{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects1[i].removeTimer("Wait");
}
}
{ //Subevents
gdjs.Lv2_465Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Lv2_465Code.eventsList3 = function(runtimeScene) {

{

gdjs.Lv2_465Code.GDBard6Objects2.length = 0;


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
{gdjs.Lv2_465Code.conditionTrue_1 = gdjs.Lv2_465Code.condition0IsTrue_0;
gdjs.Lv2_465Code.GDBard6Objects2_1final.length = 0;gdjs.Lv2_465Code.condition0IsTrue_1.val = false;
gdjs.Lv2_465Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2_465Code.GDBard6Objects3);
for(var i = 0, k = 0, l = gdjs.Lv2_465Code.GDBard6Objects3.length;i<l;++i) {
    if ( gdjs.Lv2_465Code.GDBard6Objects3[i].getBehavior("TopDownMovement").getXVelocity() != 0 ) {
        gdjs.Lv2_465Code.condition0IsTrue_1.val = true;
        gdjs.Lv2_465Code.GDBard6Objects3[k] = gdjs.Lv2_465Code.GDBard6Objects3[i];
        ++k;
    }
}
gdjs.Lv2_465Code.GDBard6Objects3.length = k;if( gdjs.Lv2_465Code.condition0IsTrue_1.val ) {
    gdjs.Lv2_465Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2_465Code.GDBard6Objects3.length;j<jLen;++j) {
        if ( gdjs.Lv2_465Code.GDBard6Objects2_1final.indexOf(gdjs.Lv2_465Code.GDBard6Objects3[j]) === -1 )
            gdjs.Lv2_465Code.GDBard6Objects2_1final.push(gdjs.Lv2_465Code.GDBard6Objects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2_465Code.GDBard6Objects3);
for(var i = 0, k = 0, l = gdjs.Lv2_465Code.GDBard6Objects3.length;i<l;++i) {
    if ( gdjs.Lv2_465Code.GDBard6Objects3[i].getBehavior("TopDownMovement").getYVelocity() != 0 ) {
        gdjs.Lv2_465Code.condition1IsTrue_1.val = true;
        gdjs.Lv2_465Code.GDBard6Objects3[k] = gdjs.Lv2_465Code.GDBard6Objects3[i];
        ++k;
    }
}
gdjs.Lv2_465Code.GDBard6Objects3.length = k;if( gdjs.Lv2_465Code.condition1IsTrue_1.val ) {
    gdjs.Lv2_465Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2_465Code.GDBard6Objects3.length;j<jLen;++j) {
        if ( gdjs.Lv2_465Code.GDBard6Objects2_1final.indexOf(gdjs.Lv2_465Code.GDBard6Objects3[j]) === -1 )
            gdjs.Lv2_465Code.GDBard6Objects2_1final.push(gdjs.Lv2_465Code.GDBard6Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Lv2_465Code.GDBard6Objects2_1final, gdjs.Lv2_465Code.GDBard6Objects2);
}
}
}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_465Code.GDBard6Objects2 */
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects2[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2_465Code.GDBard6Objects1);

gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
gdjs.Lv2_465Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lv2_465Code.GDBard6Objects1.length;i<l;++i) {
    if ( gdjs.Lv2_465Code.GDBard6Objects1[i].getBehavior("TopDownMovement").getXVelocity() == 0 ) {
        gdjs.Lv2_465Code.condition0IsTrue_0.val = true;
        gdjs.Lv2_465Code.GDBard6Objects1[k] = gdjs.Lv2_465Code.GDBard6Objects1[i];
        ++k;
    }
}
gdjs.Lv2_465Code.GDBard6Objects1.length = k;}if ( gdjs.Lv2_465Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Lv2_465Code.GDBard6Objects1.length;i<l;++i) {
    if ( gdjs.Lv2_465Code.GDBard6Objects1[i].getBehavior("TopDownMovement").getYVelocity() == 0 ) {
        gdjs.Lv2_465Code.condition1IsTrue_0.val = true;
        gdjs.Lv2_465Code.GDBard6Objects1[k] = gdjs.Lv2_465Code.GDBard6Objects1[i];
        ++k;
    }
}
gdjs.Lv2_465Code.GDBard6Objects1.length = k;}}
if (gdjs.Lv2_465Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Lv2_465Code.GDBard6Objects1 */
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects1[i].pauseAnimation();
}
}
{ //Subevents
gdjs.Lv2_465Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBard4Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.Lv2_465Code.GDBard4Objects1});
gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDGlitchObjects1Objects = Hashtable.newFrom({"Glitch": gdjs.Lv2_465Code.GDGlitchObjects1});
gdjs.Lv2_465Code.asyncCallback8679436 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lv2.52", false);
}}
gdjs.Lv2_465Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.Lv2_465Code.asyncCallback8679436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lv2_465Code.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{gdjs.evtTools.window.setWindowSize(runtimeScene, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 4, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 4, true);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Glitch"), gdjs.Lv2_465Code.GDGlitchObjects1);
{for(var i = 0, len = gdjs.Lv2_465Code.GDGlitchObjects1.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDGlitchObjects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_465Code.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2_465Code.GDBard6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.Lv2_465Code.GDStoneObjects1);

gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2_95465Code_46GDBard6Objects1Objects, gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDStoneObjects1Objects, false, runtimeScene, true);
}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_465Code.GDBard4Objects1 */
/* Reuse gdjs.Lv2_465Code.GDBard6Objects1 */
/* Reuse gdjs.Lv2_465Code.GDStoneObjects1 */
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard4Objects1.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard4Objects1[i].separateFromObjectsList(gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDStoneObjects1Objects, false);
}
for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects1[i].separateFromObjectsList(gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDStoneObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_465Code.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2_465Code.GDBard6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bricks"), gdjs.Lv2_465Code.GDBricksObjects1);

gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2_95465Code_46GDBard6Objects1Objects, gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBricksObjects1Objects, false, runtimeScene, true);
}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_465Code.GDBard4Objects1 */
/* Reuse gdjs.Lv2_465Code.GDBard6Objects1 */
/* Reuse gdjs.Lv2_465Code.GDBricksObjects1 */
{for(var i = 0, len = gdjs.Lv2_465Code.GDBard4Objects1.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard4Objects1[i].separateFromObjectsList(gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBricksObjects1Objects, false);
}
for(var i = 0, len = gdjs.Lv2_465Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2_465Code.GDBard6Objects1[i].separateFromObjectsList(gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBricksObjects1Objects, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_465Code.GDBard4Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Lv2_465Code.GDBard4Objects1.length !== 0 ? gdjs.Lv2_465Code.GDBard4Objects1[0] : null), false, "", 0);
}}

}


{


gdjs.Lv2_465Code.eventsList0(runtimeScene);
}


{


gdjs.Lv2_465Code.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_465Code.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Glitch"), gdjs.Lv2_465Code.GDGlitchObjects1);

gdjs.Lv2_465Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_465Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDBard4Objects1Objects, gdjs.Lv2_465Code.mapOfGDgdjs_46Lv2_95465Code_46GDGlitchObjects1Objects, false, runtimeScene, false);
}if (gdjs.Lv2_465Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Lv2_465Code.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Lv2_465Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lv2_465Code.GDBard4Objects1.length = 0;
gdjs.Lv2_465Code.GDBard4Objects2.length = 0;
gdjs.Lv2_465Code.GDBard4Objects3.length = 0;
gdjs.Lv2_465Code.GDGrassObjects1.length = 0;
gdjs.Lv2_465Code.GDGrassObjects2.length = 0;
gdjs.Lv2_465Code.GDGrassObjects3.length = 0;
gdjs.Lv2_465Code.GDBard6Objects1.length = 0;
gdjs.Lv2_465Code.GDBard6Objects2.length = 0;
gdjs.Lv2_465Code.GDBard6Objects3.length = 0;
gdjs.Lv2_465Code.GDStoneObjects1.length = 0;
gdjs.Lv2_465Code.GDStoneObjects2.length = 0;
gdjs.Lv2_465Code.GDStoneObjects3.length = 0;
gdjs.Lv2_465Code.GDFakestoneObjects1.length = 0;
gdjs.Lv2_465Code.GDFakestoneObjects2.length = 0;
gdjs.Lv2_465Code.GDFakestoneObjects3.length = 0;
gdjs.Lv2_465Code.GDFakebricksObjects1.length = 0;
gdjs.Lv2_465Code.GDFakebricksObjects2.length = 0;
gdjs.Lv2_465Code.GDFakebricksObjects3.length = 0;
gdjs.Lv2_465Code.GDBricksObjects1.length = 0;
gdjs.Lv2_465Code.GDBricksObjects2.length = 0;
gdjs.Lv2_465Code.GDBricksObjects3.length = 0;
gdjs.Lv2_465Code.GDGlitchObjects1.length = 0;
gdjs.Lv2_465Code.GDGlitchObjects2.length = 0;
gdjs.Lv2_465Code.GDGlitchObjects3.length = 0;
gdjs.Lv2_465Code.GDFloorTileObjects1.length = 0;
gdjs.Lv2_465Code.GDFloorTileObjects2.length = 0;
gdjs.Lv2_465Code.GDFloorTileObjects3.length = 0;
gdjs.Lv2_465Code.GDFloorTileTriggerObjects1.length = 0;
gdjs.Lv2_465Code.GDFloorTileTriggerObjects2.length = 0;
gdjs.Lv2_465Code.GDFloorTileTriggerObjects3.length = 0;

gdjs.Lv2_465Code.eventsList5(runtimeScene);

return;

}

gdjs['Lv2_465Code'] = gdjs.Lv2_465Code;
