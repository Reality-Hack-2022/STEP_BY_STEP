// -----JS CODE-----
// @input SceneObject enter_Experience;
// ASK SNAPCHAT HOW TO PAUSE AND PLAY GIF !!!

// We keep track of "colliderCount" because each hand has 46 colliders.
script.count = 0;
var obj = script.getSceneObject();
var collider = obj.getComponent("Physics.ColliderComponent");
script.enter_Experience.enabled = false;

//
script.handleTouch = function() {
    print("Is Touch");
    
    script.getSceneObject().getParent().enabled = false;
    script.enter_Experience.enabled = true;

}

script.handleRelease = function() {
    print("Is not Touch");
    
    
    script.getSceneObject().getParent().enabled = true;
    
}

collider.onOverlapEnter.add(function (e) {
 if (script.count === 0) {
    script.handleTouch();
 }
 script.count++;
});

collider.onOverlapExit.add(function (e) {
 script.count--;
 if (script.count <= 0) {
     script.handleRelease();
     script.count = 0;
 }
});