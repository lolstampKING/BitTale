gdjs.Lv2_46522Code = {};
gdjs.Lv2_46522Code.GDBard4Objects1_1final = [];

gdjs.Lv2_46522Code.GDBard6Objects2_1final = [];

gdjs.Lv2_46522Code.GDBard4Objects1= [];
gdjs.Lv2_46522Code.GDBard4Objects2= [];
gdjs.Lv2_46522Code.GDBard4Objects3= [];
gdjs.Lv2_46522Code.GDGrassObjects1= [];
gdjs.Lv2_46522Code.GDGrassObjects2= [];
gdjs.Lv2_46522Code.GDGrassObjects3= [];
gdjs.Lv2_46522Code.GDGrasstriggerObjects1= [];
gdjs.Lv2_46522Code.GDGrasstriggerObjects2= [];
gdjs.Lv2_46522Code.GDGrasstriggerObjects3= [];
gdjs.Lv2_46522Code.GDBard6Objects1= [];
gdjs.Lv2_46522Code.GDBard6Objects2= [];
gdjs.Lv2_46522Code.GDBard6Objects3= [];
gdjs.Lv2_46522Code.GDStoneObjects1= [];
gdjs.Lv2_46522Code.GDStoneObjects2= [];
gdjs.Lv2_46522Code.GDStoneObjects3= [];
gdjs.Lv2_46522Code.GDFakestoneObjects1= [];
gdjs.Lv2_46522Code.GDFakestoneObjects2= [];
gdjs.Lv2_46522Code.GDFakestoneObjects3= [];
gdjs.Lv2_46522Code.GDFakebricksObjects1= [];
gdjs.Lv2_46522Code.GDFakebricksObjects2= [];
gdjs.Lv2_46522Code.GDFakebricksObjects3= [];
gdjs.Lv2_46522Code.GDBricksObjects1= [];
gdjs.Lv2_46522Code.GDBricksObjects2= [];
gdjs.Lv2_46522Code.GDBricksObjects3= [];
gdjs.Lv2_46522Code.GDGlitchObjects1= [];
gdjs.Lv2_46522Code.GDGlitchObjects2= [];
gdjs.Lv2_46522Code.GDGlitchObjects3= [];
gdjs.Lv2_46522Code.GDFloorTileObjects1= [];
gdjs.Lv2_46522Code.GDFloorTileObjects2= [];
gdjs.Lv2_46522Code.GDFloorTileObjects3= [];
gdjs.Lv2_46522Code.GDFloorTileTriggerObjects1= [];
gdjs.Lv2_46522Code.GDFloorTileTriggerObjects2= [];
gdjs.Lv2_46522Code.GDFloorTileTriggerObjects3= [];
gdjs.Lv2_46522Code.GDMultiTileObjects1= [];
gdjs.Lv2_46522Code.GDMultiTileObjects2= [];
gdjs.Lv2_46522Code.GDMultiTileObjects3= [];

gdjs.Lv2_46522Code.conditionTrue_0 = {val:false};
gdjs.Lv2_46522Code.condition0IsTrue_0 = {val:false};
gdjs.Lv2_46522Code.condition1IsTrue_0 = {val:false};
gdjs.Lv2_46522Code.condition2IsTrue_0 = {val:false};
gdjs.Lv2_46522Code.conditionTrue_1 = {val:false};
gdjs.Lv2_46522Code.condition0IsTrue_1 = {val:false};
gdjs.Lv2_46522Code.condition1IsTrue_1 = {val:false};
gdjs.Lv2_46522Code.condition2IsTrue_1 = {val:false};


gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2_9546522Code_46GDBard6Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.Lv2_46522Code.GDBard4Objects1, "Bard6": gdjs.Lv2_46522Code.GDBard6Objects1});
gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.Lv2_46522Code.GDStoneObjects1});
gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.Lv2_46522Code.GDStoneObjects1});
gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDStoneObjects1Objects = Hashtable.newFrom({"Stone": gdjs.Lv2_46522Code.GDStoneObjects1});
gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2_9546522Code_46GDBard6Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.Lv2_46522Code.GDBard4Objects1, "Bard6": gdjs.Lv2_46522Code.GDBard6Objects1});
gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBricksObjects1Objects = Hashtable.newFrom({"Bricks": gdjs.Lv2_46522Code.GDBricksObjects1});
gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBricksObjects1Objects = Hashtable.newFrom({"Bricks": gdjs.Lv2_46522Code.GDBricksObjects1});
gdjs.Lv2_46522Code.eventsList0 = function(runtimeScene) {

{


gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
gdjs.Lv2_46522Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Lv2_46522Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2_46522Code.conditionTrue_1 = gdjs.Lv2_46522Code.condition1IsTrue_0;
gdjs.Lv2_46522Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9264772);
}
}}
if (gdjs.Lv2_46522Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard4Objects2[i].setAnimationName("Left");
}
}}

}


{


gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
gdjs.Lv2_46522Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Lv2_46522Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2_46522Code.conditionTrue_1 = gdjs.Lv2_46522Code.condition1IsTrue_0;
gdjs.Lv2_46522Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8722324);
}
}}
if (gdjs.Lv2_46522Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard4Objects2[i].setAnimationName("Right");
}
}}

}


{


gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
gdjs.Lv2_46522Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.Lv2_46522Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2_46522Code.conditionTrue_1 = gdjs.Lv2_46522Code.condition1IsTrue_0;
gdjs.Lv2_46522Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8751804);
}
}}
if (gdjs.Lv2_46522Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard4Objects2[i].setAnimationName("Up");
}
}}

}


{


gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
gdjs.Lv2_46522Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.Lv2_46522Code.condition0IsTrue_0.val ) {
{
{gdjs.Lv2_46522Code.conditionTrue_1 = gdjs.Lv2_46522Code.condition1IsTrue_0;
gdjs.Lv2_46522Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8752260);
}
}}
if (gdjs.Lv2_46522Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects2);
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard4Objects2[i].setAnimationName("Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects2);

gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
gdjs.Lv2_46522Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lv2_46522Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2_46522Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getXVelocity() == 0 ) {
        gdjs.Lv2_46522Code.condition0IsTrue_0.val = true;
        gdjs.Lv2_46522Code.GDBard4Objects2[k] = gdjs.Lv2_46522Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2_46522Code.GDBard4Objects2.length = k;}if ( gdjs.Lv2_46522Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Lv2_46522Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2_46522Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getYVelocity() == 0 ) {
        gdjs.Lv2_46522Code.condition1IsTrue_0.val = true;
        gdjs.Lv2_46522Code.GDBard4Objects2[k] = gdjs.Lv2_46522Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2_46522Code.GDBard4Objects2.length = k;}}
if (gdjs.Lv2_46522Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Lv2_46522Code.GDBard4Objects2 */
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard4Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard4Objects2[i].pauseAnimation();
}
}}

}


{

gdjs.Lv2_46522Code.GDBard4Objects1.length = 0;


gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
{
{gdjs.Lv2_46522Code.conditionTrue_1 = gdjs.Lv2_46522Code.condition0IsTrue_0;
gdjs.Lv2_46522Code.GDBard4Objects1_1final.length = 0;gdjs.Lv2_46522Code.condition0IsTrue_1.val = false;
gdjs.Lv2_46522Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects2);
for(var i = 0, k = 0, l = gdjs.Lv2_46522Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2_46522Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getXVelocity() != 0 ) {
        gdjs.Lv2_46522Code.condition0IsTrue_1.val = true;
        gdjs.Lv2_46522Code.GDBard4Objects2[k] = gdjs.Lv2_46522Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2_46522Code.GDBard4Objects2.length = k;if( gdjs.Lv2_46522Code.condition0IsTrue_1.val ) {
    gdjs.Lv2_46522Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2_46522Code.GDBard4Objects2.length;j<jLen;++j) {
        if ( gdjs.Lv2_46522Code.GDBard4Objects1_1final.indexOf(gdjs.Lv2_46522Code.GDBard4Objects2[j]) === -1 )
            gdjs.Lv2_46522Code.GDBard4Objects1_1final.push(gdjs.Lv2_46522Code.GDBard4Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects2);
for(var i = 0, k = 0, l = gdjs.Lv2_46522Code.GDBard4Objects2.length;i<l;++i) {
    if ( gdjs.Lv2_46522Code.GDBard4Objects2[i].getBehavior("TopDownMovement").getYVelocity() != 0 ) {
        gdjs.Lv2_46522Code.condition1IsTrue_1.val = true;
        gdjs.Lv2_46522Code.GDBard4Objects2[k] = gdjs.Lv2_46522Code.GDBard4Objects2[i];
        ++k;
    }
}
gdjs.Lv2_46522Code.GDBard4Objects2.length = k;if( gdjs.Lv2_46522Code.condition1IsTrue_1.val ) {
    gdjs.Lv2_46522Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2_46522Code.GDBard4Objects2.length;j<jLen;++j) {
        if ( gdjs.Lv2_46522Code.GDBard4Objects1_1final.indexOf(gdjs.Lv2_46522Code.GDBard4Objects2[j]) === -1 )
            gdjs.Lv2_46522Code.GDBard4Objects1_1final.push(gdjs.Lv2_46522Code.GDBard4Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Lv2_46522Code.GDBard4Objects1_1final, gdjs.Lv2_46522Code.GDBard4Objects1);
}
}
}if (gdjs.Lv2_46522Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_46522Code.GDBard4Objects1 */
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard4Objects1.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard4Objects1[i].playAnimation();
}
}}

}


};gdjs.Lv2_46522Code.eventsList1 = function(runtimeScene) {

{


gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 0;
}if (gdjs.Lv2_46522Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Lv2_46522Code.GDBard6Objects1, gdjs.Lv2_46522Code.GDBard6Objects2);

{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects2[i].setAnimationName("Left");
}
}}

}


{


gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 1;
}if (gdjs.Lv2_46522Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Lv2_46522Code.GDBard6Objects1, gdjs.Lv2_46522Code.GDBard6Objects2);

{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects2[i].setAnimationName("Right");
}
}}

}


{


gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 2;
}if (gdjs.Lv2_46522Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Lv2_46522Code.GDBard6Objects1, gdjs.Lv2_46522Code.GDBard6Objects2);

{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects2[i].setAnimationName("Up");
}
}}

}


{


gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Direction")) == 3;
}if (gdjs.Lv2_46522Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_46522Code.GDBard6Objects1 */
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects1[i].setAnimationName("Down");
}
}}

}


};gdjs.Lv2_46522Code.eventsList2 = function(runtimeScene) {

{



}


{


{
{runtimeScene.getVariables().get("Direction").setNumber(2);
}
{ //Subevents
gdjs.Lv2_46522Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Lv2_46522Code.eventsList3 = function(runtimeScene) {

{

gdjs.Lv2_46522Code.GDBard6Objects2.length = 0;


gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
{
{gdjs.Lv2_46522Code.conditionTrue_1 = gdjs.Lv2_46522Code.condition0IsTrue_0;
gdjs.Lv2_46522Code.GDBard6Objects2_1final.length = 0;gdjs.Lv2_46522Code.condition0IsTrue_1.val = false;
gdjs.Lv2_46522Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2_46522Code.GDBard6Objects3);
for(var i = 0, k = 0, l = gdjs.Lv2_46522Code.GDBard6Objects3.length;i<l;++i) {
    if ( gdjs.Lv2_46522Code.GDBard6Objects3[i].getBehavior("TopDownMovement").getXVelocity() != 0 ) {
        gdjs.Lv2_46522Code.condition0IsTrue_1.val = true;
        gdjs.Lv2_46522Code.GDBard6Objects3[k] = gdjs.Lv2_46522Code.GDBard6Objects3[i];
        ++k;
    }
}
gdjs.Lv2_46522Code.GDBard6Objects3.length = k;if( gdjs.Lv2_46522Code.condition0IsTrue_1.val ) {
    gdjs.Lv2_46522Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2_46522Code.GDBard6Objects3.length;j<jLen;++j) {
        if ( gdjs.Lv2_46522Code.GDBard6Objects2_1final.indexOf(gdjs.Lv2_46522Code.GDBard6Objects3[j]) === -1 )
            gdjs.Lv2_46522Code.GDBard6Objects2_1final.push(gdjs.Lv2_46522Code.GDBard6Objects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2_46522Code.GDBard6Objects3);
for(var i = 0, k = 0, l = gdjs.Lv2_46522Code.GDBard6Objects3.length;i<l;++i) {
    if ( gdjs.Lv2_46522Code.GDBard6Objects3[i].getBehavior("TopDownMovement").getYVelocity() != 0 ) {
        gdjs.Lv2_46522Code.condition1IsTrue_1.val = true;
        gdjs.Lv2_46522Code.GDBard6Objects3[k] = gdjs.Lv2_46522Code.GDBard6Objects3[i];
        ++k;
    }
}
gdjs.Lv2_46522Code.GDBard6Objects3.length = k;if( gdjs.Lv2_46522Code.condition1IsTrue_1.val ) {
    gdjs.Lv2_46522Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Lv2_46522Code.GDBard6Objects3.length;j<jLen;++j) {
        if ( gdjs.Lv2_46522Code.GDBard6Objects2_1final.indexOf(gdjs.Lv2_46522Code.GDBard6Objects3[j]) === -1 )
            gdjs.Lv2_46522Code.GDBard6Objects2_1final.push(gdjs.Lv2_46522Code.GDBard6Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Lv2_46522Code.GDBard6Objects2_1final, gdjs.Lv2_46522Code.GDBard6Objects2);
}
}
}if (gdjs.Lv2_46522Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_46522Code.GDBard6Objects2 */
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects2[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2_46522Code.GDBard6Objects1);

gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
gdjs.Lv2_46522Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Lv2_46522Code.GDBard6Objects1.length;i<l;++i) {
    if ( gdjs.Lv2_46522Code.GDBard6Objects1[i].getBehavior("TopDownMovement").getXVelocity() == 0 ) {
        gdjs.Lv2_46522Code.condition0IsTrue_0.val = true;
        gdjs.Lv2_46522Code.GDBard6Objects1[k] = gdjs.Lv2_46522Code.GDBard6Objects1[i];
        ++k;
    }
}
gdjs.Lv2_46522Code.GDBard6Objects1.length = k;}if ( gdjs.Lv2_46522Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Lv2_46522Code.GDBard6Objects1.length;i<l;++i) {
    if ( gdjs.Lv2_46522Code.GDBard6Objects1[i].getBehavior("TopDownMovement").getYVelocity() == 0 ) {
        gdjs.Lv2_46522Code.condition1IsTrue_0.val = true;
        gdjs.Lv2_46522Code.GDBard6Objects1[k] = gdjs.Lv2_46522Code.GDBard6Objects1[i];
        ++k;
    }
}
gdjs.Lv2_46522Code.GDBard6Objects1.length = k;}}
if (gdjs.Lv2_46522Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Lv2_46522Code.GDBard6Objects1 */
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects1[i].pauseAnimation();
}
}
{ //Subevents
gdjs.Lv2_46522Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBard4Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.Lv2_46522Code.GDBard4Objects1});
gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDFloorTileTriggerObjects1Objects = Hashtable.newFrom({"FloorTileTrigger": gdjs.Lv2_46522Code.GDFloorTileTriggerObjects1});
gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBard6Objects1Objects = Hashtable.newFrom({"Bard6": gdjs.Lv2_46522Code.GDBard6Objects1});
gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDGlitchObjects1Objects = Hashtable.newFrom({"Glitch": gdjs.Lv2_46522Code.GDGlitchObjects1});
gdjs.Lv2_46522Code.asyncCallback8958332 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Glitch"), gdjs.Lv2_46522Code.GDGlitchObjects3);

{for(var i = 0, len = gdjs.Lv2_46522Code.GDGlitchObjects3.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDGlitchObjects3[i].deleteFromScene(runtimeScene);
}
}}
gdjs.Lv2_46522Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save Glitch as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Lv2_46522Code.asyncCallback8958332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lv2_46522Code.asyncCallback12692164 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Bricks"), gdjs.Lv2_46522Code.GDBricksObjects2);
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBricksObjects2.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBricksObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Lv2_46522Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Lv2_46522Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Lv2_46522Code.GDGlitchObjects1) asyncObjectsList.addObject("Glitch", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Lv2_46522Code.asyncCallback12692164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBard4Objects1Objects = Hashtable.newFrom({"Bard4": gdjs.Lv2_46522Code.GDBard4Objects1});
gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDFakebricksObjects1Objects = Hashtable.newFrom({"Fakebricks": gdjs.Lv2_46522Code.GDFakebricksObjects1});
gdjs.Lv2_46522Code.eventsList6 = function(runtimeScene) {

{



}


{


gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Lv2_46522Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{gdjs.evtTools.window.setWindowSize(runtimeScene, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) * 4, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 4, true);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Glitch"), gdjs.Lv2_46522Code.GDGlitchObjects1);
{for(var i = 0, len = gdjs.Lv2_46522Code.GDGlitchObjects1.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDGlitchObjects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2_46522Code.GDBard6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Stone"), gdjs.Lv2_46522Code.GDStoneObjects1);

gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
gdjs.Lv2_46522Code.condition1IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2_9546522Code_46GDBard6Objects1Objects, gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDStoneObjects1Objects, false, runtimeScene, true);
}if ( gdjs.Lv2_46522Code.condition0IsTrue_0.val ) {
{
gdjs.Lv2_46522Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "q"));
}}
if (gdjs.Lv2_46522Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Lv2_46522Code.GDBard4Objects1 */
/* Reuse gdjs.Lv2_46522Code.GDBard6Objects1 */
/* Reuse gdjs.Lv2_46522Code.GDStoneObjects1 */
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard4Objects1.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard4Objects1[i].separateFromObjectsList(gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDStoneObjects1Objects, false);
}
for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects1[i].separateFromObjectsList(gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDStoneObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2_46522Code.GDBard6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Bricks"), gdjs.Lv2_46522Code.GDBricksObjects1);

gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBard4Objects1ObjectsGDgdjs_46Lv2_9546522Code_46GDBard6Objects1Objects, gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBricksObjects1Objects, false, runtimeScene, true);
}if (gdjs.Lv2_46522Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_46522Code.GDBard4Objects1 */
/* Reuse gdjs.Lv2_46522Code.GDBricksObjects1 */
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard4Objects1.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard4Objects1[i].separateFromObjectsList(gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBricksObjects1Objects, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Lv2_46522Code.GDBard4Objects1.length !== 0 ? gdjs.Lv2_46522Code.GDBard4Objects1[0] : null), false, "", 0);
}}

}


{


gdjs.Lv2_46522Code.eventsList0(runtimeScene);
}


{


gdjs.Lv2_46522Code.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("FloorTileTrigger"), gdjs.Lv2_46522Code.GDFloorTileTriggerObjects1);

gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBard4Objects1Objects, gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDFloorTileTriggerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Lv2_46522Code.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard6"), gdjs.Lv2_46522Code.GDBard6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Glitch"), gdjs.Lv2_46522Code.GDGlitchObjects1);

gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBard6Objects1Objects, gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDGlitchObjects1Objects, false, runtimeScene, false);
}if (gdjs.Lv2_46522Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Lv2_46522Code.GDBard6Objects1 */
{for(var i = 0, len = gdjs.Lv2_46522Code.GDBard6Objects1.length ;i < len;++i) {
    gdjs.Lv2_46522Code.GDBard6Objects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Lv2_46522Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bard4"), gdjs.Lv2_46522Code.GDBard4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fakebricks"), gdjs.Lv2_46522Code.GDFakebricksObjects1);

gdjs.Lv2_46522Code.condition0IsTrue_0.val = false;
{
gdjs.Lv2_46522Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDBard4Objects1Objects, gdjs.Lv2_46522Code.mapOfGDgdjs_46Lv2_9546522Code_46GDFakebricksObjects1Objects, false, runtimeScene, false);
}if (gdjs.Lv2_46522Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "THANKS", false);
}}

}


};

gdjs.Lv2_46522Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lv2_46522Code.GDBard4Objects1.length = 0;
gdjs.Lv2_46522Code.GDBard4Objects2.length = 0;
gdjs.Lv2_46522Code.GDBard4Objects3.length = 0;
gdjs.Lv2_46522Code.GDGrassObjects1.length = 0;
gdjs.Lv2_46522Code.GDGrassObjects2.length = 0;
gdjs.Lv2_46522Code.GDGrassObjects3.length = 0;
gdjs.Lv2_46522Code.GDGrasstriggerObjects1.length = 0;
gdjs.Lv2_46522Code.GDGrasstriggerObjects2.length = 0;
gdjs.Lv2_46522Code.GDGrasstriggerObjects3.length = 0;
gdjs.Lv2_46522Code.GDBard6Objects1.length = 0;
gdjs.Lv2_46522Code.GDBard6Objects2.length = 0;
gdjs.Lv2_46522Code.GDBard6Objects3.length = 0;
gdjs.Lv2_46522Code.GDStoneObjects1.length = 0;
gdjs.Lv2_46522Code.GDStoneObjects2.length = 0;
gdjs.Lv2_46522Code.GDStoneObjects3.length = 0;
gdjs.Lv2_46522Code.GDFakestoneObjects1.length = 0;
gdjs.Lv2_46522Code.GDFakestoneObjects2.length = 0;
gdjs.Lv2_46522Code.GDFakestoneObjects3.length = 0;
gdjs.Lv2_46522Code.GDFakebricksObjects1.length = 0;
gdjs.Lv2_46522Code.GDFakebricksObjects2.length = 0;
gdjs.Lv2_46522Code.GDFakebricksObjects3.length = 0;
gdjs.Lv2_46522Code.GDBricksObjects1.length = 0;
gdjs.Lv2_46522Code.GDBricksObjects2.length = 0;
gdjs.Lv2_46522Code.GDBricksObjects3.length = 0;
gdjs.Lv2_46522Code.GDGlitchObjects1.length = 0;
gdjs.Lv2_46522Code.GDGlitchObjects2.length = 0;
gdjs.Lv2_46522Code.GDGlitchObjects3.length = 0;
gdjs.Lv2_46522Code.GDFloorTileObjects1.length = 0;
gdjs.Lv2_46522Code.GDFloorTileObjects2.length = 0;
gdjs.Lv2_46522Code.GDFloorTileObjects3.length = 0;
gdjs.Lv2_46522Code.GDFloorTileTriggerObjects1.length = 0;
gdjs.Lv2_46522Code.GDFloorTileTriggerObjects2.length = 0;
gdjs.Lv2_46522Code.GDFloorTileTriggerObjects3.length = 0;
gdjs.Lv2_46522Code.GDMultiTileObjects1.length = 0;
gdjs.Lv2_46522Code.GDMultiTileObjects2.length = 0;
gdjs.Lv2_46522Code.GDMultiTileObjects3.length = 0;

gdjs.Lv2_46522Code.eventsList6(runtimeScene);

return;

}

gdjs['Lv2_46522Code'] = gdjs.Lv2_46522Code;
