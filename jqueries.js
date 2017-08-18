 //jshint esversion:6 
$(document).ready(function(){
var clickCounter=0;
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
        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
    });

        $('#output2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });
});

$('#levelSelect').click(function(){
    console.log("hello from jqueries");
    clickCounter++;
    });

});

