//jshint esversion:6

function createArrayOfRandomInts(length,upperbound){
    let randomNumbers = Array(length);
    for (let i = 0; i<randomNumbers.length; i++){
        randomNumbers[i] = Math.floor(Math.random()*upperbound);
    }
    return randomNumbers;
}

module.exports = function Camera(tileSize, county, grid, vw, vh, mapSymbolToTerrainType){

    // minimum number of tiles to cover the
    // viewport under all circumstances
    let tw = Math.floor(vw / tileSize + 1);
    let th = Math.floor(vh / tileSize + 1);
    createGrid(tw, th);
    let randomTileVariations = createArrayOfRandomInts(100,4);

    function setOffsets(ox, oy){
        grid.style.left =`${-ox % tileSize}px`;
        grid.style.top = `${-oy % tileSize}px`;
        let sx = Math.floor(ox / tileSize);
        let sy = Math.floor(oy / tileSize);

        updateGrid(tw, th, county, sx, sy);
    }

    function createGrid(tw, th){
        //console.log(`Creating tile grid ${tw}x${th}`);
        for(let tileY = 0; tileY < th; tileY++){ 
            for(let tileX = 0; tileX < tw; tileX++){
                let tile = createTile(tileX, tileY, 0,0);

                grid.appendChild(tile);
            }
        }
    }

    function createTile(tileX, tileY, terrainType, terrainVariation ){
        // console.log(`CreateTile ${tileX}, ${tileY}`); 
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


    function updateGrid(tw, th, map, sx, sy){
        for(let tileY = 0; tileY < th; tileY++){ 
            for(let tileX = 0; tileX < tw; tileX++){
                let mapY =tileY + sy;
                let mapX =tileX + sx;

                let variationIndex = mapX * mapY;
                let terrainVariation = randomTileVariations[variationIndex % randomTileVariations.length];
                
                let mapSymbol;
                if (mapY>=map.length){
                    mapSymbol=undefined;
                } else {
                    mapSymbol = map[mapY][mapX];   //tileY gives us the map line, tileX gives the character position    
                }
                
                let terrainType = mapSymbolToTerrainType(mapSymbol);

                let tile = document.querySelector(`#tile${tileX}_${tileY}`);

                if (terrainType !== undefined) {
                    // show tile
                    // let terrainVariation =0 ;
                    if(mapSymbol === '>'){
                        terrainVariation = mapY;
                        terrainVariation = (terrainVariation + Math.floor(Date.now() / 500)) % 4;
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

    return {
        setOffsets: setOffsets
    };
};
