
//jshint esversion:6
window.onload=function(){
/*


    // when user presses Return
    if (event.keyCode === 13) {
        // check selection is valid 
        if (typeof selectedProvinceID !== 'undefined') {
            var nav = "county-selector.html#"+selectedProvinceID;
            console.log(nav);
            window.location.href = nav;
        }
    }



*/


let badgeSelectorL = require("./badge-selector-l");
let badgeSelectorR = require("./badge-selector-r");
let storyTexts = require("./story-texts"); //can't use capital letters with browswerify 
let countyNames = require("./county-names");
//Create the map

let story = 0;

var map = [];

let imreoirBlurbs=['Roghnaigh leibheal Gaeilge','Níl Gaeilge agam','Tá beagán Gaeilge agam','Tá Gaeilge agam','Cainteoir Líofa mé'];
let blurbId =0;




map[0] = "";
map[1] = "";
map[2] = "Roghnaigh Ainm";
map[3] = "Roghnaigh Gaeilge";
map[4] = "Roghnaigh Foireann";
map[5] = "";
map[6] = "";
map[7] = "";
map[8] = "";

//Set the player's start location
var mapLocation = 2;
//Initialize the gameMessage
var gameMessage = ``;




var selectLevel = document.querySelector('#selectLevel');
var imreoirWLv= document.querySelector('#imreoirWLv');//player With Graphic showing his/her lv
var pAinm=document.querySelector('#pAinm');

//Query Selectors:
var joinTeam = document.querySelector("#joinTeam");
var image = document.querySelector("img");

let contae = document.querySelector("#contae");

var output = document.querySelector("#output");
var output2 = document.querySelector("#output2");
var inputLabel = document.querySelector("#inputLabel");

var levelSelect = document.querySelector('#levelSelect');
var playBtn = document.querySelector('#play');
var countyBtnRight = document.querySelector('#countyBtnRight');
var countyBtnLeft = document.querySelector('#countyBtnLeft');
var htmla=document.querySelector('html');
var audioAbattoir = document.querySelector('#abattoir');
let countyMain = document.querySelector('#countyMain');
let ainmBtn = document.querySelector('#ainmBtn'); //player name
var curSiosArCo = document.querySelector('#curSiosArCo');

//Event Listeners:
joinTeam.addEventListener("click",joinTeamHandler);
ainmBtn.addEventListener("click", ainmHandler);
levelSelect.addEventListener("click", levelSelectHandler);



//Dispay the player's location
render();


btnLvL.addEventListener("click", btnLvLHandler);
btnLvR.addEventListener("click", btnLvRHandler);

countyBtnLeft.addEventListener("click",bckBadgeHandler, false);
countyBtnRight.addEventListener("click",fwdBadgeHandler, false);


//Event Handlers
function fwdBadgeHandler(){
    updateCountyMain(-1);
    console.log("clicked");
    updateCoNameR();
    
}

function bckBadgeHandler(){
    updateCountyMain(1);
    updateCoNameL();
}


function btnLvLHandler(){
updateImreoirLv(1);
   blurbId--;
 if(blurbId<0 ){
        blurbId = 4;}
output2.innerHTML=imreoirBlurbs[blurbId];
  
  if(blurbId===0)
    
{
       levelSelect.style.display='none';
}else{
levelSelect.style.display='inline';
levelSelect.style.visibility='visible';
}
}
function btnLvRHandler(){
updateImreoirLv(-1);
blurbId++;
if (blurbId>4){blurbId= 0;}
console.log("blurrrb"+blurbId);
output2.innerHTML=imreoirBlurbs[blurbId];
if(blurbId===0)
{
       levelSelect.style.display='none';
}else{
levelSelect.style.display='inline';
levelSelect.style.visibility='visible';
}
}

    function playHandler(){
          }
    var coPos = 1; //county Position
  var imPos=1;  //imreoirPosition

    
function updateImreoirLv(lv){

    
    
    lv += lv*175; // {width:175} 
        imPos += lv;

    imreoirWLv.style.backgroundPositionX = imPos+"px";
    }
    
function updateCountyMain(dist){
        
    if (coPos===0){
    output2.style.visibility='visible';    
}else{
output2.style.visibility='hidden';}
    dist += dist*538; //#countyMain {width:539} 
        coPos += dist;
   console.log("coMain bgposX = ", coPos);

    countyMain.style.backgroundPositionX = coPos+"px";
    }
    function joinTeamHandler(){
        countyMain.style.animation='fade-out 2s forwards';
        console.log("team joined",contae[countyId]);
        countyBtnRight.style.display='none';
        countyBtnLeft.style.display='none';
        joinTeam.style.display='none';
        window.location.replace("file:///home/ribo/dev/cq3/manifesto/src/naContae/contaePages/naContae"+countyId+".html");
       
        
        contae.style.display='none';
        inputName.style.display='none';
        curSiosArCo.style.display='none';
    
    }
    function levelSelectHandler(){
        mapLocation = 4;
        story=3;
        //hide  level-select buttons
         btnLvR.style.display='none';
         btnLvL.style.display='none';
         levelSelect.style.display='none';
         //reveal hidden inputElements
       inputElements.style.visibility='visible';    
      inputElements.style.opacity='1'; 
       //inputLabel.style.display='block';
       //inputLabel.innerHTML='Roghnaigh Foireann:';
        
        badgeSelectorL(100); //player selects team
         countyMain.style.top='50px';
         narrate(3);
         badgeSelectorR(100);
         countyBtnRight.style.animation='fade-in 1s forwards';
         countyBtnRight.style.animation='fade-in 1s forwards';
         countyBtnRight.style.display='inline';
         countyBtnLeft.style.animation='fade-in 1s forwards';
         countyBtnLeft.style.display='inline';
          joinTeam.style.display='inline';
        joinTeam.style.visibility='visible';
        joinTeam.style.animation='delay-fade-in 5s';
        countyMain.style.top='-170px';
        story++;
        playGame();

}



    function ainmHandler(){
       mapLocation=3;
        story++; 
        playGame();//activates the forest of Lycria &narrate() 
    if (story===1){ //Tús means Start. We start here.
           //play music.
    
       audioAbattoir.play();
        //Hide irrelevent buttons
       //inputElements.style.visibility='hidden';    
      inputElements.style.opacity='1';
        htmla.style.backgroundImage ="url('../../images/bgDark.png')";            
       inputName.style.display='none';
       inputLabel.style.display='none';
       ainmBtn.style.display='none';
       //show imreoir language level-icon 
       imreoirWLv.style.opacity='1';
       imreoirWLv.style.visibility='visible';
       
        //show languagelevel right left buttons
       btnLvR.style.display='inline';
       btnLvR.style.visibility='visible';
       
       btnLvL.style.visibility='visible';
       btnLvL.style.display='inline';

       

      // story++;
       }

        if(story===2){ //select language level
       btnLvR.style.display='inline';
       btnLvR.style.animation='fade-in 1s forwards';
       
       btnLvL.style.display='inline';
       btnLvL.style.animation='fade-in 1s forwards';
            console.log("should have set level select display");
        }




 }




    function mousedownHandler(){
    }

    function mouseoutHandler(){
    }

    function bckBtnHandler(){

    }

    function fwdBtnHandler(){
    }

 
    function narrate(story){
        output2.innerHTML = storyTexts[story];
        output2.className=''; 
        console.log("test! "+story);
    }
    //test

    function stepBack(){
        story--;
        playGame();
    }
    function stepFwd(){
        story++;
        playGame();
    }

    function progressStory(){
   }




function playGame()
{

    narrate(story); 
    console.log("hello narrate!");
    render();
    console.log("playGame called and says says story is "+story);
}

function render()
{
 output.innerHTML=map[mapLocation];
}

let countyId = 0;
//show county name
function updateCoNameR(){
    countyId = (countyId + 1) ;

    if(countyId===35 ){
        countyId = 0;}

    contae.innerHTML = countyNames[countyId];

    console.log("current Co id:", countyId, countyNames[countyId] );
}
function updateCoNameL(){
    countyId = (countyId - 1);
    if(countyId === -1){
        
        countyId = 34;}
contae.innerHTML = countyNames[countyId];

    console.log("current Co id:", countyId );
}


};
