//jshint esversion:6


const camera = require("./camera");
var locationDetail = document.querySelector('#locationDetail');

var mapData = document.querySelector('#mapdata').innerHTML;
var tileSize=32;
var mapWidth = 70*tileSize; //mapdata is 70characters wide.
var mapHeight = 30*mapData.height*tileSize; //mapdata is 30 characters high.
var aMap1=mapData.split('\n');
var aMap2 = [];

function make2dArray(){
    for(var i = 0; i<aMap1.length; i++){
        aMap2.push(Array.from(aMap1[i])); 
    }
}
make2dArray();


module.exports = function Player(){

    let px =1120; 
    let py =480;

    function move(stepX, stepY){
        px += stepX;
        py += stepY;

        console.log("x: ",px,"y: ",py);
        getTileByCoordinates(px+23,py-13,aMap2);//add ints to properly align tile and co-ordinates 
            }

    function getPosition() {
        return {x: px, y: py};
    }
    return {
        move, //expose public API containing our move function (but not updateSpritePosition)
        getPosition
    };


    function getTileByCoordinates(px,py,map){

        var tileX=Math.round(px/tileSize+0.5);
        var tileY=Math.round(py/tileSize+0.5);
            console.log(map[tileY][tileX]);

    }





};
