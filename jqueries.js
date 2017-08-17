 //jshint esversion:6 
$(document).ready(function(){

document.querySelector('#ainmBtn').onmouseenter=(event)=>{
    document.querySelector('#bearla').innerHTML='Océ!';
}; 
document.querySelector('#ainmBtn');     
console.log(" hello jqueries");
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
        $('#output2 span').hover(function(){
             $('#bearla').text($(this).attr('id'));
             $(this).css('color','#e35ee5');
    });

        $('#output2 span').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');

    });
});
});

