$('#header').load('../data/header.php',function(){
    $('.header').text('退款/售后');
});



let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);