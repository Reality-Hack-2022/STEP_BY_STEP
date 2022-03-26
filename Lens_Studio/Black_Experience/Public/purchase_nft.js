// -----JS CODE-----
// @input SceneObject purchase_window;
// ASK SNAPCHAT HOW TO PAUSE AND PLAY GIF !!!

// We keep track of "colliderCount" because each hand has 46 colliders.
script.count = 0;
var obj = script.getSceneObject();

// WHY CANT I GET COMPONENT INSIDE WORLD OBJECT CONTROLLER ???
var collider = obj.getComponent("Physics.ColliderComponent");

//script.getSceneObject().getParent().enabled = false;

script.purchase_window.enabled = false;

//
script.handleTouch = function() {
    print("Is Touch");
    
    // HOW TO MAKE OBJECT SCALE??
    script.getSceneObject().getParent().enabled = false;
    script.purchase_window.enabled = true;

}

script.handleRelease = function() {
    print("Is not Touch");
    
    script.getSceneObject().enabled = true;
    
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