//jshint esversion:6

const places = require("./places");
module.exports = function Player(){

    let px =1120; 
    let py =480;

    function move(stepX, stepY){
        px += stepX;
        py += stepY;
        
    console.log("x: ",px,"y: ",py);
    }

    function getPosition() {
places();
    if (px>960 && px<1000){
    console.log("at an bhograch");
  }

        return {x: px, y: py};
    }
    
    return {
        move, //expose public API containing our move function (but not updateSpritePosition)
        getPosition
    };
};
