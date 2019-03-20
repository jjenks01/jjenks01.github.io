var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
       
        // TODO 1 : Declare and initialize our variables //
        
          var valentina = draw.bitmap('https://imgnooz.com/sites/default/files/wallpaper/love/59608/heart-wallpapers-59608-3756704.jpg');
        view.addChild(valentina);
        
        var circle;
        var circles = [];


        // TODO 2 : Create a function that draws a circle  //
      
        var drawCircle = function() {
            circle = draw.bitmap('./img/lvheart.png');
            circle.x = Math.random() * canvas.width;
            circle.y = Math.random() * canvas.height;
            physikz.addRandomVelocity(circle, canvas, 10, 10);
            view.addChild(circle);
            circles.push(circle);
            circle.rotationalVelocity = 0;
        }
        
         
        // TODO 3 : Call the drawCircle function 5 times //
     
        // TODO 7 : Create a Loop to call drawCircle 100 times
        for (var counter = 0; counter <= 100; counter++){
            drawCircle();
        }
    
        view.addChild(fps);
        app.addUpdateable(fps);
    
        game.checkCirclePosition = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////
            
            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            } 
            // TODO 5a) if the circle has gone past of the LEFT side of the screen then place it on the RIGHT
            else if ( circle.x <= 0 ) {
                circle.x = canvas.width;
            } 

            // TODO 5b) if the circle has gone past of the TOP side of the screen then place it on the BOTTOM
            if ( circle.y <= 0 ) {
                circle.y = canvas.height;
            }
            // TODO 5c) if the circle has gone past of the BOTTOM side of the screen then place it OFF-SCREEN TOP
            else if ( circle.y > canvas.height ) {
                circle.y = 0;
            }
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        }
    
        var update = function() {
            // TODO 4 : Update the circle's position //
          
            // TODO 5 : Call game.checkCirclePosition on your circles.
         
            // TODO 8 : Iterate over the array
            //var circles = []; <-- this was the problem
           
            var circle;
           
            for (var i = 0; i < circles.length; i++) {
                circle = circles[i];
                console.log(circle);
                physikz.updatePosition(circle);
                game.checkCirclePosition(circle);
           }

        } 
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
