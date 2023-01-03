gdjs.Lv2Code = {};
gdjs.Lv2Code.GDBard4Objects1_1final = [];

gdjs.Lv2Code.GDBard6Objects2_1final = [];

gdjs.Lv2Code.GDBard4Objects1= [];
gdjs.Lv2Code.GDBard4Objects2= [];
gdjs.Lv2Code.GDBard4Objects3= [];
gdjs.Lv2Code.GDGrassObjects1= [];
gdjs.Lv2Code.GDGrassObjects2= [];
gdjs.Lv2Code.GDGrassObjects3= [];
gdjs.Lv2Code.GDBard6Objects1= [];
gdjs.Lv2Code.GDBard6Objects2= [];
gdjs.Lv2Code.GDBard6Objects3= [];
gdjs.Lv2Code.GDStoneObjects1= [];
gdjs.Lv2Code.GDStoneObjects2= [];
gdjs.Lv2Code.GDStoneObjects3= [];
gdjs.Lv2Code.GDFakestoneObjects1= [];
gdjs.Lv2Code.GDFakestoneObjects2= [];
gdjs.Lv2Code.GDFakestoneObjects3= [];
gdjs.Lv2Code.GDFakebricksObjects1= [];
gdjs.Lv2Code.GDFakebricksObjects2= [];
gdjs.Lv2Code.GDFakebricksObjects3= [];
gdjs.Lv2Code.GDBricksObjects1= [];
gdjs.Lv2Code.GDBricksObjects2= [];
gdjs.Lv2Code.GDBricksObjects3= [];
gdjs.Lv2Code.GDGlitchObjects1= [];
gdjs.Lv2Code.GDGlitchObjects2= [];
gdjs.Lv2Code.GDGlitchObjects3= [];
gdjs.Lv2Code.GDFloorTileObjects1= [];
gdjs.Lv2Code.GDFloorTileObjects2= [];
gdjs.Lv2Code.GDFloorTileObjects3= [];
gdjs.Lv2Code.GDFloorTileTriggerObjects1= [];
gdjs.Lv2Code.GDFloorTileTriggerObjects2= [];
gdjs.Lv2Code.GDFloorTileTriggerObjects3= [];

gdjs.Lv2Code.conditionTrue_0 = {val:false};
gdjs.Lv2Code.condition0IsTrue_0 = {val:false};
gdjs.Lv2Code.condition1IsTrue_0 = {val:false};
gdjs.Lv2Code.condition2IsTrue_0 = {val:false};
gdjs.Lv2Code.conditionTrue_1 = {val:false};
gdjs.Lv2Code.condition0IsTrue_1 = {val:false};
gdjs.Lv2Code.condition1IsTrue_1 = {val:false};
gdjs.Lv2Code.condition2IsTrue_1 = {val:false};


gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2Code_46GDBard6Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.Lv2Code.GDBard4Objects1, "Bard6": gdjs.Lv2Code.GDBard6Objects1});
gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.Lv2Code.GDStoneObjects1});
gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.Lv2Code.GDStoneObjects1});
gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.Lv2Code.GDStoneObjects1});
gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2Code_46GDBard6Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.Lv2Code.GDBard4Objects1, "Bard6": gdjs.Lv2Code.GDBard6Objects1});
gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBricksObjects1Objects = Hashtable.newFrom({"Bricks": gdjs.Lv2Code.GDBricksObjects1});
gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBricksObjects1Objects = Hashtable.newFrom({"Bricks": gdjs.Lv2Code.GDBricksObjects1});
gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBricksObjects1Objects = Hashtable.newFrom({"Bricks": gdjs.Lv2Code.GDBricksObjects1});
gdjs.Lv2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Lv2Code.condition0IsTrue_0.val = false;
gdjs.Lv2Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Lv2Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2Code.conditionTrue_1 = gdjs.Lv2Code.condition1IsTrue_0;
gdjs.Lv2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8018140);
}
}}
if (gdjs.Lv2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard4Objects2[i].setAnimationName("Left");
}
}}

}


{


gdjs.Lv2Code.condition0IsTrue_0.val = false;
gdjs.Lv2Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Lv2Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2Code.conditionTrue_1 = gdjs.Lv2Code.condition1IsTrue_0;
gdjs.Lv2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8039724);
}
}}
if (gdjs.Lv2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard4Objects2[i].setAnimationName("Right");
}
}}

}


{


gdjs.Lv2Code.condition0IsTrue_0.val = false;
gdjs.Lv2Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.Lv2Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2Code.conditionTrue_1 = gdjs.Lv2Code.condition1IsTrue_0;
gdjs.Lv2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8052204);
}
}}
if (gdjs.Lv2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard4Objects2[i].setAnimationName("Up");
}
}}

}


{


gdjs.Lv2Code.condition0IsTrue_0.val = false;
gdjs.Lv2Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.Lv2Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2Code.conditionTrue_1 = gdjs.Lv2Code.condition1IsTrue_0;
gdjs.Lv2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7995084);
}
}}
if (gdjs.Lv2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard4Objects2[i].setAnimationName("Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2Code.GDBard4Objects2);

gdjs.Lv2Code.condition0IsTrue_0.val = false;
gdjs.Lv2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lv2Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getXVelocity() == 0 ) {
        gdjs.Lv2Code.condition0IsTrue_0.val = true;
        gdjs.Lv2Code.GDBard4Objects2[k] = gdjs.Lv2Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2Code.GDBard4Objects2.length = k;}if ( gdjs.Lv2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Lv2Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getYVelocity() == 0 ) {
        gdjs.Lv2Code.condition1IsTrue_0.val = true;
        gdjs.Lv2Code.GDBard4Objects2[k] = gdjs.Lv2Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2Code.GDBard4Objects2.length = k;}}
if (gdjs.Lv2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Lv2Code.GDBard4Objects2 */
{for(var i = 0, len = gdjs.Lv2Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard4Objects2[i].pauseAnimation();
}
}}

}


{

gdjs.Lv2Code.GDBard4Objects1.length = 0;


gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
{gdjs.Lv2Code.conditionTrue_1 = gdjs.Lv2Code.condition0IsTrue_0;
gdjs.Lv2Code.GDBard4Objects1_1final.length = 0;gdjs.Lv2Code.condition0IsTrue_1.val = false;
gdjs.Lv2Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2Code.GDBard4Objects2);
for(var i = 0, k = 0, l = gdjs.Lv2Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getXVelocity() != 0 ) {
        gdjs.Lv2Code.condition0IsTrue_1.val = true;
        gdjs.Lv2Code.GDBard4Objects2[k] = gdjs.Lv2Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2Code.GDBard4Objects2.length = k;if( gdjs.Lv2Code.condition0IsTrue_1.val ) {
    gdjs.Lv2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2Code.GDBard4Objects2.length;j<jLen;++j) {
        if ( gdjs.Lv2Code.GDBard4Objects1_1final.indexOf(gdjs.Lv2Code.GDBard4Objects2[j]) === -1 )
            gdjs.Lv2Code.GDBard4Objects1_1final.push(gdjs.Lv2Code.GDBard4Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2Code.GDBard4Objects2);
for(var i = 0, k = 0, l = gdjs.Lv2Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getYVelocity() != 0 ) {
        gdjs.Lv2Code.condition1IsTrue_1.val = true;
        gdjs.Lv2Code.GDBard4Objects2[k] = gdjs.Lv2Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2Code.GDBard4Objects2.length = k;if( gdjs.Lv2Code.condition1IsTrue_1.val ) {
    gdjs.Lv2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2Code.GDBard4Objects2.length;j<jLen;++j) {
        if ( gdjs.Lv2Code.GDBard4Objects1_1final.indexOf(gdjs.Lv2Code.GDBard4Objects2[j]) === -1 )
            gdjs.Lv2Code.GDBard4Objects1_1final.push(gdjs.Lv2Code.GDBard4Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Lv2Code.GDBard4Objects1_1final, gdjs.Lv2Code.GDBard4Objects1);
}
}
}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2Code.GDBard4Objects1 */
{for(var i = 0, len = gdjs.Lv2Code.GDBard4Objects1.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard4Objects1[i].playAnimation();
}
}}

}


};gdjs.Lv2Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 0;
}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Lv2Code.GDBard6Objects1, gdjs.Lv2Code.GDBard6Objects2);

{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects2[i].setAnimationName("Left");
}
}}

}


{


gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 1;
}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Lv2Code.GDBard6Objects1, gdjs.Lv2Code.GDBard6Objects2);

{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects2[i].setAnimationName("Right");
}
}}

}


{


gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 2;
}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Lv2Code.GDBard6Objects1, gdjs.Lv2Code.GDBard6Objects2);

{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects2[i].setAnimationName("Up");
}
}}

}


{


gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 3;
}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2Code.GDBard6Objects1 */
{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects1[i].setAnimationName("Down");
}
}}

}


};gdjs.Lv2Code.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Lv2Code.GDBard6Objects1, gdjs.Lv2Code.GDBard6Objects2);


gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lv2Code.GDBard6Objects2.length;i<l;++i) {
    if ( !(gdjs.Lv2Code.GDBard6Objects2[i].getTimerElapsedTimeInSecondsOrNaN("Wait") > 0) ) {
        gdjs.Lv2Code.condition0IsTrue_0.val = true;
        gdjs.Lv2Code.GDBard6Objects2[k] = gdjs.Lv2Code.GDBard6Objects2[i];
        ++k;
    }
}
gdjs.Lv2Code.GDBard6Objects2.length = k;}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2Code.GDBard6Objects2 */
{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects2[i].resetTimer("Wait");
}
}{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects2[i].returnVariable(gdjs.Lv2Code.GDBard6Objects2[i].getVariables().get("WaitDuration")).setNumber(gdjs.randomFloatInRange(1.5, 2.5));
}
}}

}


{



}


{

/* Reuse gdjs.Lv2Code.GDBard6Objects1 */

gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lv2Code.GDBard6Objects1.length;i<l;++i) {
    if ( gdjs.Lv2Code.GDBard6Objects1[i].getTimerElapsedTimeInSecondsOrNaN("Wait") > (gdjs.RuntimeObject.getVariableNumber(gdjs.Lv2Code.GDBard6Objects1[i].getVariables().get("WaitDuration"))) ) {
        gdjs.Lv2Code.condition0IsTrue_0.val = true;
        gdjs.Lv2Code.GDBard6Objects1[k] = gdjs.Lv2Code.GDBard6Objects1[i];
        ++k;
    }
}
gdjs.Lv2Code.GDBard6Objects1.length = k;}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2Code.GDBard6Objects1 */
{runtimeScene.getVariables().get("Direction").setNumber(gdjs.randomInRange(0, 3));
}{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects1[i].removeTimer("Wait");
}
}
{ //Subevents
gdjs.Lv2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Lv2Code.eventsList3 = function(runtimeScene) {

{

gdjs.Lv2Code.GDBard6Objects2.length = 0;


gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
{gdjs.Lv2Code.conditionTrue_1 = gdjs.Lv2Code.condition0IsTrue_0;
gdjs.Lv2Code.GDBard6Objects2_1final.length = 0;gdjs.Lv2Code.condition0IsTrue_1.val = false;
gdjs.Lv2Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2Code.GDBard6Objects3);
for(var i = 0, k = 0, l = gdjs.Lv2Code.GDBard6Objects3.length;i<l;++i) {
    if ( gdjs.Lv2Code.GDBard6Objects3[i].getBehavior("TopDownMovement").getXVelocity() != 0 ) {
        gdjs.Lv2Code.condition0IsTrue_1.val = true;
        gdjs.Lv2Code.GDBard6Objects3[k] = gdjs.Lv2Code.GDBard6Objects3[i];
        ++k;
    }
}
gdjs.Lv2Code.GDBard6Objects3.length = k;if( gdjs.Lv2Code.condition0IsTrue_1.val ) {
    gdjs.Lv2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2Code.GDBard6Objects3.length;j<jLen;++j) {
        if ( gdjs.Lv2Code.GDBard6Objects2_1final.indexOf(gdjs.Lv2Code.GDBard6Objects3[j]) === -1 )
            gdjs.Lv2Code.GDBard6Objects2_1final.push(gdjs.Lv2Code.GDBard6Objects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2Code.GDBard6Objects3);
for(var i = 0, k = 0, l = gdjs.Lv2Code.GDBard6Objects3.length;i<l;++i) {
    if ( gdjs.Lv2Code.GDBard6Objects3[i].getBehavior("TopDownMovement").getYVelocity() != 0 ) {
        gdjs.Lv2Code.condition1IsTrue_1.val = true;
        gdjs.Lv2Code.GDBard6Objects3[k] = gdjs.Lv2Code.GDBard6Objects3[i];
        ++k;
    }
}
gdjs.Lv2Code.GDBard6Objects3.length = k;if( gdjs.Lv2Code.condition1IsTrue_1.val ) {
    gdjs.Lv2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2Code.GDBard6Objects3.length;j<jLen;++j) {
        if ( gdjs.Lv2Code.GDBard6Objects2_1final.indexOf(gdjs.Lv2Code.GDBard6Objects3[j]) === -1 )
            gdjs.Lv2Code.GDBard6Objects2_1final.push(gdjs.Lv2Code.GDBard6Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Lv2Code.GDBard6Objects2_1final, gdjs.Lv2Code.GDBard6Objects2);
}
}
}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2Code.GDBard6Objects2 */
{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects2[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2Code.GDBard6Objects1);

gdjs.Lv2Code.condition0IsTrue_0.val = false;
gdjs.Lv2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lv2Code.GDBard6Objects1.length;i<l;++i) {
    if ( gdjs.Lv2Code.GDBard6Objects1[i].getBehavior("TopDownMovement").getXVelocity() == 0 ) {
        gdjs.Lv2Code.condition0IsTrue_0.val = true;
        gdjs.Lv2Code.GDBard6Objects1[k] = gdjs.Lv2Code.GDBard6Objects1[i];
        ++k;
    }
}
gdjs.Lv2Code.GDBard6Objects1.length = k;}if ( gdjs.Lv2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Lv2Code.GDBard6Objects1.length;i<l;++i) {
    if ( gdjs.Lv2Code.GDBard6Objects1[i].getBehavior("TopDownMovement").getYVelocity() == 0 ) {
        gdjs.Lv2Code.condition1IsTrue_0.val = true;
        gdjs.Lv2Code.GDBard6Objects1[k] = gdjs.Lv2Code.GDBard6Objects1[i];
        ++k;
    }
}
gdjs.Lv2Code.GDBard6Objects1.length = k;}}
if (gdjs.Lv2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Lv2Code.GDBard6Objects1 */
{for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects1[i].pauseAnimation();
}
}
{ //Subevents
gdjs.Lv2Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBard4Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.Lv2Code.GDBard4Objects1});
gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDFloorTileTriggerObjects1Objects = Hashtable.newFrom({"FloorTileTrigger": gdjs.Lv2Code.GDFloorTileTriggerObjects1});
gdjs.Lv2Code.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{gdjs.evtTools.window.setWindowSize(runtimeScene, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 4, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 4, true);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Glitch"), gdjs.Lv2Code.GDGlitchObjects1);
{for(var i = 0, len = gdjs.Lv2Code.GDGlitchObjects1.length ;i < len;++i) {
    gdjs.Lv2Code.GDGlitchObjects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2Code.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2Code.GDBard6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.Lv2Code.GDStoneObjects1);

gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2Code_46GDBard6Objects1Objects, gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDStoneObjects1Objects, false, runtimeScene, true);
}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2Code.GDBard4Objects1 */
/* Reuse gdjs.Lv2Code.GDBard6Objects1 */
/* Reuse gdjs.Lv2Code.GDStoneObjects1 */
{for(var i = 0, len = gdjs.Lv2Code.GDBard4Objects1.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard4Objects1[i].separateFromObjectsList(gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDStoneObjects1Objects, false);
}
for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects1[i].separateFromObjectsList(gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDStoneObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2Code.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2Code.GDBard6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bricks"), gdjs.Lv2Code.GDBricksObjects1);

gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2Code_46GDBard6Objects1Objects, gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBricksObjects1Objects, false, runtimeScene, true);
}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2Code.GDBard4Objects1 */
/* Reuse gdjs.Lv2Code.GDBard6Objects1 */
/* Reuse gdjs.Lv2Code.GDBricksObjects1 */
{for(var i = 0, len = gdjs.Lv2Code.GDBard4Objects1.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard4Objects1[i].separateFromObjectsList(gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBricksObjects1Objects, false);
}
for(var i = 0, len = gdjs.Lv2Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2Code.GDBard6Objects1[i].separateFromObjectsList(gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBricksObjects1Objects, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2Code.GDBard4Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Lv2Code.GDBard4Objects1.length !== 0 ? gdjs.Lv2Code.GDBard4Objects1[0] : null), false, "", 0);
}}

}


{


gdjs.Lv2Code.eventsList0(runtimeScene);
}


{


gdjs.Lv2Code.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2Code.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("FloorTileTrigger"), gdjs.Lv2Code.GDFloorTileTriggerObjects1);

gdjs.Lv2Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDBard4Objects1Objects, gdjs.Lv2Code.mapOfGDgdjs_46Lv2Code_46GDFloorTileTriggerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Lv2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lv2.5", false);
}}

}


};

gdjs.Lv2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lv2Code.GDBard4Objects1.length = 0;
gdjs.Lv2Code.GDBard4Objects2.length = 0;
gdjs.Lv2Code.GDBard4Objects3.length = 0;
gdjs.Lv2Code.GDGrassObjects1.length = 0;
gdjs.Lv2Code.GDGrassObjects2.length = 0;
gdjs.Lv2Code.GDGrassObjects3.length = 0;
gdjs.Lv2Code.GDBard6Objects1.length = 0;
gdjs.Lv2Code.GDBard6Objects2.length = 0;
gdjs.Lv2Code.GDBard6Objects3.length = 0;
gdjs.Lv2Code.GDStoneObjects1.length = 0;
gdjs.Lv2Code.GDStoneObjects2.length = 0;
gdjs.Lv2Code.GDStoneObjects3.length = 0;
gdjs.Lv2Code.GDFakestoneObjects1.length = 0;
gdjs.Lv2Code.GDFakestoneObjects2.length = 0;
gdjs.Lv2Code.GDFakestoneObjects3.length = 0;
gdjs.Lv2Code.GDFakebricksObjects1.length = 0;
gdjs.Lv2Code.GDFakebricksObjects2.length = 0;
gdjs.Lv2Code.GDFakebricksObjects3.length = 0;
gdjs.Lv2Code.GDBricksObjects1.length = 0;
gdjs.Lv2Code.GDBricksObjects2.length = 0;
gdjs.Lv2Code.GDBricksObjects3.length = 0;
gdjs.Lv2Code.GDGlitchObjects1.length = 0;
gdjs.Lv2Code.GDGlitchObjects2.length = 0;
gdjs.Lv2Code.GDGlitchObjects3.length = 0;
gdjs.Lv2Code.GDFloorTileObjects1.length = 0;
gdjs.Lv2Code.GDFloorTileObjects2.length = 0;
gdjs.Lv2Code.GDFloorTileObjects3.length = 0;
gdjs.Lv2Code.GDFloorTileTriggerObjects1.length = 0;
gdjs.Lv2Code.GDFloorTileTriggerObjects2.length = 0;
gdjs.Lv2Code.GDFloorTileTriggerObjects3.length = 0;

gdjs.Lv2Code.eventsList4(runtimeScene);

return;

}

gdjs['Lv2Code'] = gdjs.Lv2Code;
