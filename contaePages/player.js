//jshint esversion:6

const places = require("./places");

//sides of the places in Cork

var anBhograchTop,          anBhograchLeft,           anBhograchBottom,          anBhograchRight,
    skibbereenTop,          skibbereenLeft,           skibbereenBottom,          skibbereenRight,
    blarneyTop,             blarneyLeft,              blarneyBottom,             blarneyRight,
    bealNaBláthTop,         bealNaBláthLeft,          bealNaBláthBottom,         bealNaBláthRight,
    ballyLickyTop,          ballyLickyLeft,           ballyLickyBottom,          ballyLickyRight,
    cillNaMallachTop,       cillNaMallachLeft,        cillNaMallachBottom,       cillNaMallachRight,
    tighNuaAnDháPhotaTop,   tighNuaAnDháPhotaLeft,    tighNuaAnDháPhotaBottom,   tighNuaAnDháPhotaRight,
    mainistirNaCorannTop,   mainistirNaCorannLeft,    mainistirNaCorannBottom,   mainistirNaCorannRight,
    mainistirFhearMhaighTop,mainistirFhearMhaighLeft, mainistirFhearMhaighBottom,mainistirFhearMhaighRight,
    kinsaleTop,             kinsaleLeft,              kinsaleBottom,             kinsaleRight;
    




//values of sides
anBhograchTop = 327;
anBhograchLeft = 960;
anBhograchBottom = 404;
anBhograchRight = 1000;

skibbereenTop = 916;
skibbereenLeft = 728; 
skibbereenBottom = 940;
skibbereenRight = 776;

blarneyTop = 468;          
blarneyLeft = 1496;   
blarneyBottom = 496;     
blarneyRight = 1540;

bealNaBláthTop = 596;  
bealNaBláthLeft = 1176;
bealNaBláthBottom = 620;       
bealNaBláthRight = 1224;

ballyLickyTop = 724;  
ballyLickyLeft = 472; 
ballyLickyBottom = 760;    
ballyLickyRight = 524;

cillNaMallachTop = 152;    
cillNaMallachLeft = 1308; 
cillNaMallachBottom = 172;     
cillNaMallachRight = 1340;

tighNuaAnDháPhotaTop = 248; 
tighNuaAnDháPhotaLeft = 1312; 
tighNuaAnDháPhotaBottom = 268;
tighNuaAnDháPhotaRight = 1348;

mainistirNaCorannTop = 472;
mainistirNaCorannLeft = 1816; 
mainistirNaCorannBottom = 496; 
mainistirNaCorannRight = 1860;

mainistirFhearMhaigh = 212;
TopmainistirFhearMhaighLeft = 1792;
mainistirFhearMhaighBottom = 224;
mainistirFhearMhaighRight = 1824;

kinsaleTop = 664;  
kinsaleLeft = 1660; 
kinsaleBottom = 692;  
kinsaleRight = 1704;
    
var locationDetail = document.querySelector('#locationDetail');


module.exports = function Player(){

    let px =1120; 
    let py =480;

    function move(stepX, stepY){
        px += stepX;
        py += stepY;

        console.log("x: ",px,"y: ",py);
        checkForLocation();
            }

    function getPosition() {
        return {x: px, y: py};
    }

    function checkForLocation(){
        switch(output.innerHTML){
            case("Co. Chorcaí"): console.log("Hello Corcaigh");
                locationDetail.backgroundImage="../../../images/locationDetails/corkDetails.png";
                //is player at any location?
                if (px>anBhograchLeft && px<anBhograchRight){ 
                    if(py>anBhograchTop && py<anBhograchBottom){
                        console.log("hello Bhograch");
                        locationDetail.style.backgroundPositionX="0px";
                        locationDetail.style.visibility="visible";
                    }
                }


                if (px>skibbereenLeft && px<skibbereenRight){ 
                    if(py>skibbereenTop && py<skibbereenBottom){
                        console.log("hello Skib");
                        locationDetail.style.backgroundPositionX="2700px";
                        locationDetail.style.visibility="visible";
                    }
                }

                if (px>blarneyLeft && px<blarneyRight){ 
                    if(py>blarneyTop && py<blarneyBottom){
                        console.log("hello Blarney");
                        locationDetail.style.backgroundPositionX="2400px";
                        locationDetail.style.visibility="visible";
                    }
                }

                if (px>bealNaBláthLeft && px<bealNaBláthRight){ 
                    if(py>bealNaBláthTop && py<bealNaBláthBottom){
                        console.log("hello BealnaBláth");
                        locationDetail.style.backgroundPositionX="2100px";
                        locationDetail.style.visibility="visible";
                    }
                }

                if (px>ballyLickyLeft && px<ballyLickyRight){ 
                    if(py>ballyLickyTop && py<ballyLickyBottom){
                        console.log("hello BallyLicky");
                        locationDetail.style.backgroundPositionX="1800px";
                        locationDetail.style.visibility="visible";
                    }
                }

                if (px>cillNaMallachLeft && px<cillNaMallachRight){ 
                    if(py>cillNaMallachTop && py<cillNaMallachBottom){
                        console.log("hello Cill na Mallach");
                        locationDetail.style.backgroundPositionX="1500px";
                        locationDetail.style.visibility="visible";
                    }
                }

                if (px>tighNuaAnDháPhotaLeft && px<tighNuaAnDháPhotaRight){ 
                    if(py>tighNuaAnDháPhotaTop && py<tighNuaAnDháPhotaBottom){
                        console.log("hello tigh nua an dhá Phota");
                        locationDetail.style.backgroundPositionX="1200px";
                        locationDetail.style.visibility="visible";
                    }
                }

                if (px>mainistirNaCorannLeft && px<mainistirNaCorannRight){ 
                    if(py>mainistirNaCorannTop && py<mainistirNaCorannBottom){
                        console.log("hello M na C");
                        locationDetail.style.backgroundPositionX="900px";
                        locationDetail.style.visibility="visible";
                    }
                }

                if (px>mainistirFhearMhaighLeft && px<mainistirFhearMhaighRight){ 
                    if(py>mainistirFhearMhaighTop && py<mainistirFhearMhaighBottom){
                        console.log("hello Fermoy");
                        locationDetail.style.backgroundPositionX="600px";
                        locationDetail.style.visibility="visible";
                    }
                }


                if (px>mainistirFhearMhaighLeft && px<mainistirFhearMhaighRight){ 
                    if(py>mainistirFhearMhaighTop && py<mainistirFhearMhaighBottom){
                        console.log("hello Fermoy");
                        locationDetail.style.backgroundPositionX="2400px";
                        locationDetail.style.visibility="visible";
                    }
                }

                if (px>kinsaleLeft && px<kinsaleRight){ 
                    if(py>kinsaleTop && py<kinsaleBottom){
                        console.log("hello Kinsale");
                        locationDetail.style.backgroundPositionX="300px";
                        locationDetail.style.visibility="visible";
                    }

                }

                else{
              console.log("slán");
             locationDetail.style.visibility="hidden";
                }


                break;
            default: console.log("hello from places.js");
        }

    }

    return {
        move, //expose public API containing our move function (but not updateSpritePosition)
        getPosition
    };

};
