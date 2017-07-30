

var places = document.querySelector('#places');

var output= document.querySelector('#output');

switch(output.innerHTML){

    case("Co. Chorcaí"): console.log("Hello Corcaigh");

        places.style.backgroundImage="url('../../../images/cork.png')";
        


        break;
    default: console.log("hello from places.js");


}
