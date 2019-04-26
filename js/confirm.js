$('#header').load('../data/header.php',function () {
    $('.header').text('确认订单');
});

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);

$(function () {

    var movestart=0,moveend=0;
    var str=JSON.parse(sessionStorage.getItem('xbz_product_info'));

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
    });

    $('.remove_li').click(function () {

        let _this=$(this);
        show_dialog({
            info:"确定删除？",
            define:"确定",
            cancel:"取消"
        },function (str) {
            console.log(str)
            if(str){
                _this.parent('.list').remove();
            };
            


        });



    });



})