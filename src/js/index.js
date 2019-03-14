$(document).ready( function(){

    $(window).scroll(function(e){
        e.preventDefault();
 
        var scroll = $(window).scrollTop();
        if (scroll >= 10 ) {
 
         $('.sticky-top').addClass("transparent-top");
 
         } else {
 
             $('.sticky-top').removeClass('transparent-top');
         }
        
 
    });
 });