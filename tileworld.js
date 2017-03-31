//jshint esversion:6

const Camera = require("./camera");
const maps = require('./maps');

let county = maps.kerry.split("\n");

function mapSymbolToTerrainType(mapSymbol) {
    return {
        '~': 1,//water
        '.': 0, //Grassland
        '*': 5,//paths
        '|': 2,//forests
        '^': 3,//hills
        'M': 4,//mountains
        '>': 1,//riverwater
        '8': 8, //Atlantic water
        '9':9,//Atlantic waves
        '0':10,//Atlantic waves
        '7':11,//Atlantic waves
        't': 6,//border
        'z': 7, //surf
        'x': 12//unreachable (grassland) 



    }[mapSymbol];// || 0; property lookup in object literal || 0
}
const tileSize = 32;
const vw = 32 * 32+ 10;
const vh = 19 * 32 + 5;
let grid = document.querySelector('#grid');
let camera = Camera(tileSize, county, grid, vw, vh, mapSymbolToTerrainType);
let player = document.querySelector('#player');
let px = 0; 
let py = 0;

let ox=0;
let oy=0;

function setPlayerPosition(){
    player.style.left = (px-ox)+"px";
    player.style.top = (py- oy)+"px";
}

function timerLoop() {
    ox = px - (vw/2);
    oy= py - (vh/2);
    setPlayerPosition();
    camera.setOffsets(ox, oy);
    requestAnimationFrame(timerLoop);
}

requestAnimationFrame(timerLoop);
/*
function createWorldMap(map){
    let mapHeight = map.length;
    let mapWidth = map[0].length; // we assume a rectangular map
    console.log(mapWidth, mapHeight);
    for(let tileY = 0; tileY < mapHeight; tileY++){ 
        for(let tileX = 0; tileX < mapWidth; tileX++){
            let mapSymbol = map[tileY][tileX];   //tileY gives us the map line, tileX gives the character position    
            let terrainType = mapSymbolToTerrainType(mapSymbol);
            if (terrainType !== undefined) {
                let terrainVariation = Math.floor(Math.random()*3);
                let tile = createTile(tileX,tileY,terrainType,terrainVariation);
                document.querySelector('body').appendChild(tile);
            }
        }
    }
}
*/

window.addEventListener("keydown", function(event){
    // console.log('keycode', event.keyCode);
    const step = 4;
    switch(event.keyCode){
        case 38:  //up
            py-= step;
            break;
        case 40:  //down
            py+= step;
            break;
        case 39:  //right
            px+= step;
            break;
        case 37:  //left
            px-= step;
            break;
    }
    event.preventDefault();
    console.log("x: ",px,"y: ",py);
    setPlayerPosition();

});

