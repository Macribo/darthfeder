//jshint esversion:6
const maps = require('./maps');
const tileSize = 32;
// viewport dimensions
const vw = 32 * 32+ 10;
const vh = 19 * 32 + 5;
let viewport = document.querySelector('#viewport');
console.log('I am RUNNING! vh vw:',vh,vw);
viewport.style.width = vw +"px";
viewport.style.height = vh+"px";
console.log('viewport :',viewport);

//
//working with requestAnimationFrame
var timers = [];

timers.push({
    //this timer fires every
    delay: 50,

    //fire this timer when requestAnimationFrame's timestamp reaches nextFireTime
    nextFireTime:0,

    //what does this timer do?
    //it executes the doTimers function when this timer fires
    doFunction: doTimers,
});


//the animation loop
//the loop automatically receives the current time
function timerLoop(currentTime){
    //schedule another frame
    //this is required to make the loop continue
    //(without another requestAnimationFrame, the loop stops)
    requestAnimationFrame(timerLoop);

    //iterate through each timer object
    for(let i = 0; i<timers.length; i++){
    
            //if the currentTime is > this timer's nextFireTime
        
        if (currentTime > timers[i].nextFireTime){
            var t= timers[i];

            //increment nextFireTime
            t.nextFireTime=currentTime+t.delay;
        
            //execute the task specified in this timer
            t.doFunction(t,i);
        }
    }


}





// minimum number of tiles to cover the
// viewport under all circumstances
let tw = Math.floor(vw / tileSize + 1);
let th = Math.floor(vh / tileSize + 1);
createGrid(tw, th);

function createTile(tileX, tileY, terrainType, terrainVariation ){
   // console.log(`CreateTiel ${tileX}, ${tileY}`); 
    let tile = document.createElement("div");
    tile.setAttribute("id", `tile${tileX}_${tileY}`); //template strings
    tile.classList.add('tile');  
    let backgroundPosX = -terrainVariation * tileSize;
    let backgroundPosY = -terrainType * tileSize;
    tile.style.backgroundPositionX = `${backgroundPosX}px`;
    tile.style.backgroundPositionY = `${backgroundPosY}px`;
    tile.style.left = tileX*tileSize+ "px";
    tile.style.top = tileY*tileSize + "px";
    
    return tile;
}

function mapSymbolToTerrainType(mapSymbol) {
    return {
        '1': 0,
        '2': 2,
        '3': 2,
        '4': 4,
        '5': 4,
        '6': 1
    }[mapSymbol] || 0; //property lookup in object literal || 0
}
function createGrid(tw, th){
    //console.log(`Creating tile grid ${tw}x${th}`);
    for(let tileY = 0; tileY < th; tileY++){ 
        for(let tileX = 0; tileX < tw; tileX++){
            let tile = createTile(tileX, tileY, 0,0);

            document.querySelector('#grid').appendChild(tile);
        }
    }
}

let randomTileVariations = createArrayOfRandomInts(100,4);

function updateGrid(tw, th, map, sx, sy){
    for(let tileY = 0; tileY < th; tileY++){ 
        for(let tileX = 0; tileX < tw; tileX++){
            let mapX =tileY + sy;
            let mapY =tileX + sx;

            let variationIndex = mapX * mapY;
            let terrainVariation = randomTileVariations[variationIndex % randomTileVariations.length];
            let mapSymbol = map[mapX][mapY];   //tileY gives us the map line, tileX gives the character position    
            let terrainType = mapSymbolToTerrainType(mapSymbol);

            let tile = document.querySelector(`#tile${tileX}_${tileY}`);

            if (terrainType !== undefined) {
                // show tile
                // let terrainVariation =0 ;
                if(mapSymbol === '6'){
                    terrainVariation = mapY;
                    terrainVariation = (terrainVariation + Math.floor(Date.now() / 1000)) % 4;
                }
                let backgroundPosX = -terrainVariation * tileSize;
                let backgroundPosY = -terrainType * tileSize;
                tile.style.backgroundPositionX = `${backgroundPosX}px`;
                tile.style.backgroundPositionY = `${backgroundPosY}px`;
                tile.style.opacity=1;
            } else {
                // hide tile
                tile.style.opacity=0;
            }

        }
    }
}
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


let county = maps.cork.split("\n");
//console.log('county', county);

let ox=0, oy=0;
let grid = document.querySelector('#grid');

requestAnimationFrame(timerLoop);

function doTimers(){
    grid.style.left =`${-ox % tileSize}px`;
    grid.style.top = `${-oy % tileSize}px`;
    let sx = Math.floor(ox / tileSize);
    let sy = Math.floor(oy / tileSize);

    updateGrid(tw, th, county, sx, sy);
}

let px, py;
window.addEventListener("keydown", function(event){
   // console.log('keycode', event.keyCode);
    const step = 1;
    switch(event.keyCode){
        case 38:  //up
              py-= step;  oy--;
                 break;
        case 40:  //down
              py+= step;   oy++;
                 break;
        case 39:  //right
              px+= step;    ox++;
                 break;
        case 37:  //left
              px-= step;    ox--;
                 break;
    }
    event.preventDefault();
});


function setOffset(offsetx,offsety){
    body.style.backgroundPositionX = -offsetx + "px";
    body.style.backgroundPositionY = -offsety + "px";

}

function createArrayOfRandomInts(length,upperbound){
    let randomNumbers = Array(length);
    for (let i = 0; i<randomNumbers.length; i++){
        randomNumbers[i] = Math.floor(Math.random()*upperbound);
    }
    return randomNumbers;
}
