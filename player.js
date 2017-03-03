//jshint esversion:6
let body = document.querySelector('body');
let player = document.querySelector('#player');


function setOffset(offsetx,offsety){
    body.style.backgroundPositionX = -offsetx + "px";
    body.style.backgroundPositionY = -offsety + "px";

}


function setPlayerPos(px,py){
    let sw = body.clientWidth;
    let sh = body.clientHeight;
    
    let offsetx = py -sw/2;
    let offsety = py - sh/2;
    setOffset(offsetx,offsety);
    
    player.style.left = (px) + "px";
    player.style.top = (py) + "px";
    
}

let px = 0, py = 0;
let offsetx= 900, offsety = 900;

window.addEventListener("keydown", function(event){
    console.log('keycode', event.keyCode);
    const step = 1;
    switch(event.keyCode){
        case 38: py-= step; //up
                 break;
        case 40: py+= step; //down
                 break;
        case 39: px+= step; //right
                 break;
        case 37: px-= step; //left
                 break;
    
    
    
    }
//    setPlayerPos(px, py);
    event.preventDefault();
    console.log("px: ", px, "   py: ", py);
});


