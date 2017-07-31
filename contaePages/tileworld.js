//jshint esversion:6

const Player = require("./player");
const Camera = require("./camera");

let county =document.querySelector("#mapdata").innerHTML.split('\n');
console.log(county);

function mapSymbolToTerrainType(mapSymbol) {
    return {
        '~': 1,//water
        '.': 0, //Grassland
        '*': 5,//paths
        '|': 2,//forests
        '^': 3,//hills
        'M': 4,//mountains
        'r': 1,//riverwater
        '8': 8, //Atlantic water
        '9':9,//Atlantic waves
        '0':10,//Atlantic waves
        '7':11,//Atlantic waves
        't': 6,//border
        'z': 7, //surf
        'x': 12,//unreachable (grassland) 
        '1':15,//location - having problems with location overlay. Temporary solution: hardcode locations into maps. New 
        '2':14,//location   tileset for each county. If it works, move on, and replace with a better system TODO.
        '3':15,//location
        '4':16,//location
        '5':17,//location
        '6':18//location
        


    }[mapSymbol];// || 0; property lookup in object literal || 0
}
const tileSize = 32;
const vw = 24 * 32;
const vh = 14 * 32;
let grid = document.querySelector('#grid');
grid.style.left='200px';
let camera = Camera(tileSize, county, grid, vw, vh, mapSymbolToTerrainType);
let mapFrame = document.querySelector('#mapFrame');
let playerElement = document.querySelector('#player');
let player = Player();
//mapFrame.style.top='100px';

camera.addSprite({
    updateScreenPosition: function(x, y) {
        playerElement.style.left = 400+ x + "px";
        playerElement.style.top =200+ y + "px";
    },
    getWorldPosition: function() {
        return player.getPosition();
    }
});

//grid offset x and y
let ox=0;
let oy=0;

function timerLoop() {
    let playerPosition = player.getPosition();
    ox = playerPosition.x - (vw/2);
    oy = playerPosition.y - (vh/2);
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

var inventory = document.querySelectorAll("#inventory>*");
inventory = Array.prototype.slice.call(inventory);
console.log(inventory);
function dropItem() {
    itemElement = inventory.shift(); //inventory 0 and remove inventory 0;
    dropItemElement(itemElement);
}

function dropItemElement(itemElement){
    const position = player.getPosition();
    
    console.log(`data-x="${position.x}" data-y="${position.y}"`);
    camera.addSprite({
        updateScreenPosition: function(x, y) {
            itemElement.style.left = x + "px";
            itemElement.style.top = y + "px";
        },
        getWorldPosition: function() {
            return position;
        }
    });

}

window.addEventListener("keydown", function(event){
   //  console.log('keycode', event.keyCode);
    
    const step = 4;
    switch(event.keyCode){
        case 38:  //up
            player.move(0, -step);
            break;
        case 40:  //down
            player.move(0, step);
            break;
        case 39:  //right
            player.move(step,0);
            break;
        case 37:  //left
            player.move(-step,0);
            break;

        case 68: //d key
            dropItem();
            break;
    }

    event.preventDefault();
});

//new function for placing locations:
//go through inventory items.
//if inv item has data-x and data-y attributes, (look up getAttribute on MDN)
//add sprite at that location.
//


