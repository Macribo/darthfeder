//jshint esversion:6


const camera = require("./camera");
var locationDetail = document.querySelector('#locationDetail');

var mapData = document.querySelector('#mapdata').innerHTML;
var tileSize=32;
var mapWidth = 70*tileSize; //mapdata is 70characters wide.
var mapHeight = 30*mapData.height*tileSize; //mapdata is 30 characters high.
var aMap1=mapData.split('\n');
var aMap2 = [];
var playerTile;
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
     playerTile= getTileByCoordinates(px+23,py-13,aMap2);//add ints to properly align tile and co-ordinates 
     showDetail();
    console.log(playerTile);}

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
            return map[tileY][tileX];

    }

function showDetail(){
    if(playerTile==="Q"){
   locationDetail.style.backgroundPositionX="0px";
    locationDetail.style.visibility="visible";   
    }

    if(playerTile==="W"){
   locationDetail.style.backgroundPositionX="2700px";
    locationDetail.style.visibility="visible";   
    }

    if(playerTile==="E"){
   locationDetail.style.backgroundPositionX="2400px";
    locationDetail.style.visibility="visible";   
    }

    if(playerTile==="R"){
   locationDetail.style.backgroundPositionX="2100px";
    locationDetail.style.visibility="visible";   
    }

    if(playerTile==="T"){
   locationDetail.style.backgroundPositionX="1800px";
    locationDetail.style.visibility="visible";   
    }

    if(playerTile==="Y"){
   locationDetail.style.backgroundPositionX="1500px";
    locationDetail.style.visibility="visible";   
    }

    if(playerTile==="U"){
   locationDetail.style.backgroundPositionX="1200px";
    locationDetail.style.visibility="visible";   
    }

    if(playerTile==="I"){
   locationDetail.style.backgroundPositionX="900px";
    locationDetail.style.visibility="visible";   
    }

    if(playerTile==="O"){
   locationDetail.style.backgroundPositionX="600px";
    locationDetail.style.visibility="visible";   
    }

    if(playerTile==="P"){
   locationDetail.style.backgroundPositionX="300px";
    locationDetail.style.visibility="visible";   
    }

    if(playerTile==="." || playerTile==="r" || playerTile==="M" ||playerTile==="^" ){locationDetail.style.visibility="hidden";
    }

}

};
