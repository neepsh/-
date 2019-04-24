$('#header').load('../data/header.php',function () {
    $('.header').text('确认订单');
});

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);

$(function () {

    var movestart=0,moveend=0;

    $('.list').on("touchstart",function (e) {
        movestart=e.changedTouches[0].clientX
    });

    $('.list').on("touchmove",{"neep":"123"},function (e) {
        moveend=e.changedTouches[0].clientX
    });
    $('.list').on("touchend",function (e) {


        if(movestart>moveend){

            this.style.left="-1.42rem"

        }else{

            this.style.left=0;
        }
    })

})