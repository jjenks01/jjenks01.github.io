(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    
    // TODO : Load config for url //
    opspark.preload = function (game) {
        game.load.image('cannon', './asset/cannon.png');
        game.load.image('projectile', './asset/projectile.png');
        game.load.image('platform', './asset/redplat.jpg');
          game.load.image('heartbkg', './asset/heartbkg.png');
        game.load.image('valentineheart', './asset/collectable/valentineheart.png');
          game.load.image('hearts', './asset/collectable/hearts.png');
        game.load.image('valentine', './asset/collectable/valentine.png');
         game.load.image('cupid', './asset/collectable/cupid.png');
        game.load.atlas('halle', './asset/halle/phaser-json-array/halle.png', './asset/halle/phaser-json-array/halle.json');
    };
})(window);
