
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


let badgeSelectorL = require("../badge-selector-l");
let badgeSelectorR = require("../badge-selector-r");
let storyTexts = require("./story-texts"); //can't use capital letters with browswerify 
let countyNames = require("../county-names");
let maps = require("./maps");
//Create the map

let story = 0;

var map = [];

let imreoirBlurbs=['Roghnaigh leibheal Gaeilge','Níl Gaeilge agam','Tá beagán Gaeilge agam','Tá Gaeilge agam','Cainteoir Líofa mé'];
let blurbId =0;




map[0] = "An ol stone keep.";
map[1] = "A deep well.";
map[2] = "Charactéir";
map[3] = "Tríal";
map[4] = "Manifesto";
map[5] = "An ancient gate.";
map[6] = "The edge of a river.";
map[7] = "A lonely wooden bench.";
map[8] = "An isolated cottage. Faint music comes from inside.";

//Set the player's start location
var mapLocation = 2;

//Set the images
var images = [];

images[0] = "anBhograch.png";
images[1] = "BallyLickey.png";
images[2] = "BealNaBláth.png";
images[3] = "Blarney.png";
images[4] = "CillNaMallach.png";
images[5] = "geaga.png";
images[6] = "TighNuaAnDháPhota.png";
images[7] = "MainistirNaCorann.png";
images[8] = "Skibbereen.png";

//Set the blocked path messages

//Set the blocked path messages
var helpMessages = [];

helpMessages[0] = "";
helpMessages[1] = "I wonder if you could 'use' something to find out how deep the well is?";
helpMessages[2] = "";
helpMessages[3] = "Maybe if you had a sword, you could slay the dragon?";
helpMessages[4] = "";
helpMessages[5] = "";
helpMessages[6] = "";
helpMessages[7] = "";
helpMessages[8] = "This seems like a nice place for music.";

//Create the objects and set their locations
var items = ["stone"];
var itemLocations = [6];

//An array to store what the player is carrying
var backpack = [];


//Initialize the gameMessage
var gameMessage = ``;

//Create an array of actions the game understands
//and a variable to store the current action
var actionsIKnow 
    = ["north","east", "south", "west", 
        "help", "take", "use", "drop"];
var action = "";

//An array of items the game understands
//and a variable to store the current item



var itemsIKnow = ["flute", "stone", "sword"];
var item = "";




















var selectLevel = document.querySelector('#selectLevel');
var imreoirWLv= document.querySelector('#imreoirWLv');//player With Grahic showing his/her lv
var imreoir = document.querySelector('#imreoir');
var pAinm=document.querySelector('#pAinm');

//Query Selectors:
var joinTeam = document.querySelector("#joinTeam");
var image = document.querySelector("img");

//let playerName = 'Imreoir_1';
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
var ainm='bob';
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
levelSelect.style.display='block';
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
levelSelect.style.display='block';
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
       // mapdata.innerHTML= maps[countyId];
       // console.log(mapdata.innerHTML);
        inputElements.style.display='none';
        countyMain.style.animation='fade-out 2s forwards';
        console.log("team joined",contae[countyId]);
        countyBtnRight.style.display='none';
        countyBtnLeft.style.display='none';
        joinTeam.style.display='none';
        imreoir.style.display='none';
        output.style.display='none';
        window.location.replace("file:///home/ribo/dev/cq3/manifesto/src/naContae/naContae"+countyId+".html");
       
        //  output2.style.display='none';
      //output new position and text:
        
        contae.style.display='none';
        inputName.style.display='none';
        curSiosArCo.style.display='none';
    
    }
    function levelSelectHandler(){
        story=3;
        //hide  level-select buttons
         btnLvR.style.display='none';
         btnLvL.style.display='none';
         levelSelect.style.display='none';
         //reveal hidden inputElements
       inputElements.style.visibility='visible';    
        
       //inputLabel.style.display='block';
       //inputLabel.innerHTML='Roghnaigh Foireann:';
        
        //this thing
        badgeSelectorL(100); //player selects team
         countyMain.style.top='50px';
         narrate(3);
         badgeSelectorR(100);
         countyBtnRight.style.animation='fade-in 1s forwards';
         countyBtnRight.style.animation='fade-in 1s forwards';
         countyBtnRight.style.display='inline';
         countyBtnLeft.style.animation='fade-in 1s forwards';
         countyBtnLeft.style.display='inline';
        console.log("Hello", ainm);
          joinTeam.style.display='inline';
        joinTeam.style.animation='delay-fade-in 5s';
        story++;
        playGame();
        imreoirWLv.style.left='-85%';

}



    function ainmHandler(){
       story++; 
        playGame();//activates the forest of Lycria &narrate() 
    if (story===1){ //Tús means Start. We start here.
           //play music.
    
       audioAbattoir.play();
        //Hide irrelevent buttons
       inputElements.style.visibility='hidden';    
       htmla.style.backgroundImage ="url('../../images/bgDark.png')";            
       inputName.style.display='none';
       inputLabel.style.display='none';
       ainmBtn.style.display='none';
       imreoir.style.display='none';
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
function takeItem()
{
    //Find the index number of the item in the items array
    var itemIndexNumber = items.indexOf(item);

    //Does the item exist in the game world
    //and is it at the player's current location?
    if(itemIndexNumber !== -1 && itemLocations[itemIndexNumber] === mapLocation) {
        gameMessage = "You take the " + item + ".";

        //Add the item to the player's backpack 
        backpack.push(item);

        //Remove the item from the game world
        items.splice(itemIndexNumber, 1);
        itemLocations.splice(itemIndexNumber, 1);

        //Display in the console for testing
        console.log("World items: " + items);
        console.log("backpack items: " + backpack);
    }
    else
    {
        //Message if you try and take an item
        //that isn't in the current location
        gameMessage = "You can't do that.";
    }
}

function dropItem()
{
    //Try to drop the item only if the backpack isn't empty
    if(backpack.length !== 0)
    {
        //Find the item's array index number in the backpack
        var backpackIndexNumber = backpack.indexOf(item);

        //The item is in the backpack if backpackIndex number isn't -1
        if(backpackIndexNumber !== -1)
        {

            //Tell the player that the item has been dropped
            gameMessage = "You drop the " + item + ".";

            //Add the item from the backpack to the game world 
            items.push(backpack[backpackIndexNumber]);
            itemLocations.push(mapLocation); 

            //Remove the item from the player's backpack 
            backpack.splice(backpackIndexNumber, 1);
        }
        else
        {
            //Message if the player tries to drop
            //something that's not in the backpack
            gameMessage = "You can't do that.";
        }
    }
    else
    {
        //Message if the backpack is empty
        gameMessage = "You're not carrying anything.";
    }
}

function useItem()
{
    //1. Find out if the item is in the backpack

    //Find the item's array index number in the backpack
    var backpackIndexNumber = backpack.indexOf(item);

    //If the index number is -1, then it isn't in the backpack.
    //Tell the player that he or she isn't carrying it.
    if(backpackIndexNumber === -1)
    {
        gameMessage = "You're not carrying it.";
    }

    //If there are no items in the backpack, then
    //tell the player the backpack is empty
    if(backpack.length === 0)
    {
        gameMessage += " Your backpack is empty";
    }

    //2. If the item is found in the backpack
    //figure out what to do with it
    if(backpackIndexNumber !== -1)
    {
        switch(item)
        {
            case "flute":
                if(mapLocation === 8)
                {
                    gameMessage = "Beautiful music fills the air.";
                    gameMessage += "A wizend old man steps outside "; 
                    gameMessage += "and hands you a sword!";

                    //Add the sword to the world
                    items.push("sword");
                    itemLocations.push(mapLocation);

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";
                }
                else
                {
                    gameMessage = "You try and play the flute "; 
                    gameMessage += "but it makes no sound here.";
                }
                break;

            case "sword":
                if(mapLocation === 3)
                {
                    gameMessage = "You swing the sword and slay the dragon! ";
                    gameMessage += "You've saved the forest of Lyrica!";

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";  
                }
                else
                {
                    gameMessage = "You swing the sword listlessly.";
                }
                break;

            case "stone":
                if(mapLocation === 1)
                {
                    gameMessage = "You drop the stone in the well.";
                    gameMessage += " A magical flute appears!";

                    //Remove the stone from the player's backpack 
                    backpack.splice(backpackIndexNumber, 1);

                    //Add the flute to the world
                    items.push("flute");
                    itemLocations.push(mapLocation);

                    //Reset the location's help message
                    helpMessages[mapLocation] = "";
                }
                else
                {
                    gameMessage = "You fumble with the stone in your pocket.";
                }
                break;			          
        }
    }
}

function render()
{
    //Render the location
    output.innerHTML = map[mapLocation];
   // image.src = "../images/" + images[mapLocation];

    //Display an item if there's one in this location
    //1. Loop through all the game items
    for(var i = 0; i < items.length; i++)
    {
        //Find out if there's an item at this location
        if(mapLocation === itemLocations[i])
        {
            //Display it
            output.innerHTML += "<br>You see a <strong>" + items[i] + "</strong> here.";
        }
    }

    //Display the player's backpack contents
    if(backpack.length !== 0)
    {
        output.innerHTML += "<br>You are carrying: " + backpack.join(", ");  
    }

    //Display the game message

    output.style.fontSize="140px";
    output.style.textAlign="center";
    output.innerHTML += gameMessage ;
    output.style.padding=0;
    output.style.margin=0;
    //Clear the input field
   // input.value = "";
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
