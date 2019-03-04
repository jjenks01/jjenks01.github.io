(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;
    
    let type = {
        hearts: {assetKey: 'hearts', points: 20},
        valentineheart: {assetKey: 'valentineheart', points: 50 },
        valentine: {assetKey: 'valentine', points: 60},
        cupid: {assetKey: 'cupid', points: 100}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the collectable.create() method to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * collectable.create() takes these arguments:
     *      
     *      collectable.create(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    collectable.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        collectable.create(type.valentine, 100, 50, 6, 0.7);
        collectable.create(type.valentine, 650, 0, 6, 0.7);
        collectable.create(type.valentineheart, 650, 100, 6, 0.7);
        collectable.create(type.valentineheart, 1075, 300, 6, 0.7);
        collectable.create(type.hearts, 650, 300, 6, 0.7);
        collectable.create(type.hearts, 1075, 500, 6, 0.7);
        collectable.create(type.cupid, 1450, 0, 6, 0);
        
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);