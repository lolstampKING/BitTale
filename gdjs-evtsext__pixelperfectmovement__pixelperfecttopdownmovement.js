
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement || {};

/**
 * Behavior generated from Pixel perfect top-down movement
 */
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement = class PixelPerfectTopDownMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TopDownMovement = behaviorData.TopDownMovement !== undefined ? behaviorData.TopDownMovement : "";
    this._behaviorData.PixelSize = behaviorData.PixelSize !== undefined ? behaviorData.PixelSize : Number("1") || 0;
    this._behaviorData.OffsetX = behaviorData.OffsetX !== undefined ? behaviorData.OffsetX : Number("0") || 0;
    this._behaviorData.OffsetY = behaviorData.OffsetY !== undefined ? behaviorData.OffsetY : Number("0") || 0;
    this._behaviorData.TargetX = Number("0") || 0;
    this._behaviorData.TargetY = Number("0") || 0;
    this._behaviorData.TargetDirectionX = Number("0") || 0;
    this._behaviorData.TargetDirectionY = Number("0") || 0;
    this._behaviorData.RoundedX = Number("") || 0;
    this._behaviorData.RoundedY = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.TopDownMovement !== newBehaviorData.TopDownMovement)
      this._behaviorData.TopDownMovement = newBehaviorData.TopDownMovement;
    if (oldBehaviorData.PixelSize !== newBehaviorData.PixelSize)
      this._behaviorData.PixelSize = newBehaviorData.PixelSize;
    if (oldBehaviorData.OffsetX !== newBehaviorData.OffsetX)
      this._behaviorData.OffsetX = newBehaviorData.OffsetX;
    if (oldBehaviorData.OffsetY !== newBehaviorData.OffsetY)
      this._behaviorData.OffsetY = newBehaviorData.OffsetY;
    if (oldBehaviorData.TargetX !== newBehaviorData.TargetX)
      this._behaviorData.TargetX = newBehaviorData.TargetX;
    if (oldBehaviorData.TargetY !== newBehaviorData.TargetY)
      this._behaviorData.TargetY = newBehaviorData.TargetY;
    if (oldBehaviorData.TargetDirectionX !== newBehaviorData.TargetDirectionX)
      this._behaviorData.TargetDirectionX = newBehaviorData.TargetDirectionX;
    if (oldBehaviorData.TargetDirectionY !== newBehaviorData.TargetDirectionY)
      this._behaviorData.TargetDirectionY = newBehaviorData.TargetDirectionY;
    if (oldBehaviorData.RoundedX !== newBehaviorData.RoundedX)
      this._behaviorData.RoundedX = newBehaviorData.RoundedX;
    if (oldBehaviorData.RoundedY !== newBehaviorData.RoundedY)
      this._behaviorData.RoundedY = newBehaviorData.RoundedY;

    return true;
  }

  // Properties:
  
  _getTopDownMovement() {
    return this._behaviorData.TopDownMovement !== undefined ? this._behaviorData.TopDownMovement : "";
  }
  _setTopDownMovement(newValue) {
    this._behaviorData.TopDownMovement = newValue;
  }
  _getPixelSize() {
    return this._behaviorData.PixelSize !== undefined ? this._behaviorData.PixelSize : Number("1") || 0;
  }
  _setPixelSize(newValue) {
    this._behaviorData.PixelSize = newValue;
  }
  _getOffsetX() {
    return this._behaviorData.OffsetX !== undefined ? this._behaviorData.OffsetX : Number("0") || 0;
  }
  _setOffsetX(newValue) {
    this._behaviorData.OffsetX = newValue;
  }
  _getOffsetY() {
    return this._behaviorData.OffsetY !== undefined ? this._behaviorData.OffsetY : Number("0") || 0;
  }
  _setOffsetY(newValue) {
    this._behaviorData.OffsetY = newValue;
  }
  _getTargetX() {
    return this._behaviorData.TargetX !== undefined ? this._behaviorData.TargetX : Number("0") || 0;
  }
  _setTargetX(newValue) {
    this._behaviorData.TargetX = newValue;
  }
  _getTargetY() {
    return this._behaviorData.TargetY !== undefined ? this._behaviorData.TargetY : Number("0") || 0;
  }
  _setTargetY(newValue) {
    this._behaviorData.TargetY = newValue;
  }
  _getTargetDirectionX() {
    return this._behaviorData.TargetDirectionX !== undefined ? this._behaviorData.TargetDirectionX : Number("0") || 0;
  }
  _setTargetDirectionX(newValue) {
    this._behaviorData.TargetDirectionX = newValue;
  }
  _getTargetDirectionY() {
    return this._behaviorData.TargetDirectionY !== undefined ? this._behaviorData.TargetDirectionY : Number("0") || 0;
  }
  _setTargetDirectionY(newValue) {
    this._behaviorData.TargetDirectionY = newValue;
  }
  _getRoundedX() {
    return this._behaviorData.RoundedX !== undefined ? this._behaviorData.RoundedX : Number("") || 0;
  }
  _setRoundedX(newValue) {
    this._behaviorData.RoundedX = newValue;
  }
  _getRoundedY() {
    return this._behaviorData.RoundedY !== undefined ? this._behaviorData.RoundedY : Number("") || 0;
  }
  _setRoundedY(newValue) {
    this._behaviorData.RoundedY = newValue;
  }
}

/**
 * Shared data generated from Pixel perfect top-down movement
 */
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.SharedData = class PixelPerfectTopDownMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PixelPerfectMovement_PixelPerfectTopDownMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PixelPerfectMovement_PixelPerfectTopDownMovementSharedData = new gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._PixelPerfectMovement_PixelPerfectTopDownMovementSharedData;
}

// Methods:
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_2 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition2IsTrue_2 = {val:false};


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Left")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetX((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.ceil(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()) + gdjs.evtsExt__PixelPerfectMovement__BrakingDistance.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getXVelocity()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionX(1);
}
}
{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Right")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetX((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.floor(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()) - gdjs.evtsExt__PixelPerfectMovement__BrakingDistance.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getXVelocity()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionX(-(1));
}
}
{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() < (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionX() == 1 ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).setXVelocity(Math.min((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getXVelocity()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getAcceleration()), Math.min((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getMaxSpeed()), gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() > (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionX() == -(1) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).setXVelocity(Math.max((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getXVelocity()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getAcceleration()), Math.max(-((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getMaxSpeed())), gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.length = 0;gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3);

{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_2 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_1;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getX() >= (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionX() == 1 ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_2.val = true && gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val && gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3);

{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_2 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_1;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getX() <= (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX()) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionX() == -(1) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_2.val = true && gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val && gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);
}
}
}if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].setX((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.round(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).setXVelocity(0);
}
}}

}


{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Right")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9655156);
}
}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Left")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9659804);
}
}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Left")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Right")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Up")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetY((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.ceil(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY()) + gdjs.evtsExt__PixelPerfectMovement__BrakingDistance.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getYVelocity()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionY(1);
}
}
{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Down")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetY((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.floor(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY()) - gdjs.evtsExt__PixelPerfectMovement__BrakingDistance.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getYVelocity()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionY(-(1));
}
}
{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() < (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY()) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionY() == 1 ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).setYVelocity(Math.min((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getYVelocity()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getAcceleration()), Math.min((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getMaxSpeed()), gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() > (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY()) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionY() == -(1) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).setYVelocity(Math.max((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getYVelocity()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getAcceleration()), Math.max(-((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getMaxSpeed())), gdjs.evtsExt__PixelPerfectMovement__SpeedToReach.func(runtimeScene, (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY()), (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getDeceleration()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.length = 0;gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3);

{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_2 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_1;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getY() >= (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY()) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionY() == 1 ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_2.val = true && gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val && gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3);

{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_2 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_1;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getY() <= (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY()) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetDirectionY() == -(1) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_2.val = true && gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_2.val && gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);
}
}
}if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].setY((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()) + (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.round(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).setYVelocity(0);
}
}}

}


{



}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Down")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9654540);
}
}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2);

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Up")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9660196);
}
}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Up")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Down")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SnapRoundingErrorX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).setXVelocity(0);
}
}}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SnapRoundingErrorY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetDirectionY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).setYVelocity(0);
}
}}

}


};gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1);

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Left")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Right")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1);

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Up")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isUsingControl("Down")) ) {
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext = {};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1= [];
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects2= [];

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRoundedX((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.ceil(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1[i].getX()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1);

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.conditionTrue_1 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.condition0IsTrue_0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.conditionTrue_1.val = (Math.abs((( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1[0].getX()) - (( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoundedX())) < 0.000001);
}
}if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1[i].setX((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoundedX()));
}
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorXContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext = {};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1= [];
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects2= [];

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRoundedY((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize()) * Math.ceil(((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1[i].getY()) - (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY())) / (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPixelSize())));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1);

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.conditionTrue_1 = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.condition0IsTrue_0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.conditionTrue_1.val = (Math.abs((( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1[0].getY()) - (( gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoundedY())) < 0.000001);
}
}if (gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1[i].setY((gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoundedY()));
}
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


{
}

}


};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.SnapRoundingErrorYContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("PixelPerfectMovement::PixelPerfectTopDownMovement", gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement);
