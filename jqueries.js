 //jshint esversion:6 
$(document).ready(function(){
var clickCounter=0;
var levelCounter=0;  //TODO replace with $('output2 span') as in manifesto/jqueries.js




//var btnLvR= document.querySelector('#btnLvR');

//var btnLvL= document.querySelector('#btnLvL');
$('#btnLvR').click(function(){
    levelCounter++;
    if(levelCounter>4){
    levelCounter=0;
    }
});

$('#btnLvL').click(function(){
    levelCounter--;
    if(levelCounter<0){
    levelCounter=4;
    }
});
$('#output').hover(function(){
            if(clickCounter===0){ $('#bearla').text('What is the name of you?');
             $(this).css('color','#e35ee5');
            }
if(clickCounter===1){ $('#bearla').text('What kind of Irish have you?');
             $(this).css('color','#e35ee5');
            }

if(clickCounter===2){ $('#bearla').text('Who do you play for?');
             $(this).css('color','#e35ee5');
            }


    });

        $('#output').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#730a0a');

    });
document.querySelector('#inputName').onmouseenter=(event)=>{
    document.querySelector('#bearla').innerHTML='Player One';
}; document.querySelector('#ainmBtn').onmouseenter=(event)=>{
    document.querySelector('#bearla').innerHTML='Océ!';
}; 
document.querySelector('#ainmBtn');   
document.querySelector('#levelSelect');
$('#inputLabel span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
    });

        $('#inputLabel span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });

$('#ainmBtn').click(function(){
    console.log("hello from jqueries");
    clickCounter++;
    
    $('#output2').hover(function(){
             if(levelCounter===0){ $('#bearla').text('');
             $(this).css('color','#e35ee5');
            }
if(levelCounter===1){ $('#bearla').text('I have no Irish');
             $(this).css('color','#e35ee5');
            }

if(levelCounter===2){ $('#bearla').text('I have a little Irish');
             $(this).css('color','#e35ee5');
            }

if(levelCounter===3){ $('#bearla').text('I have Irish');
             $(this).css('color','#e35ee5');
            }


if(levelCounter===4){ $('#bearla').text('I have fluent Irish');
             $(this).css('color','#e35ee5');
            }


        $('#output2').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });



       });
     
});

$('#levelSelect').click(function(){
    console.log("hello from jqueries");
    clickCounter++;
    });

});

