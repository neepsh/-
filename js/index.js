$('#footer').load('../data/footer.php');

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);

$(function () {
    $('.close_pop').click(function () {
        $('#pop_buy').hide();
    });

    $('.list_btn').click(function () {
        $('#pop_buy').show();
    });

    var num=0;

    $('.num').click(function () {
        if($(this).text()=="-"){
            if(num>0){
                num--;

            }
            $(this).siblings('b').text(num);
        }else {
            num++;
            $(this).siblings('b').text(num);
        }
    });

    $('.pop_btn').click(function () {
        var xbz_porduct_info={};

        xbz_porduct_info.num=num;
        xbz_porduct_info.name="鲜榨柠檬汁";
        xbz_porduct_info.price="15";
        sessionStorage.setItem('xbz_product_info',JSON.stringify(xbz_porduct_info));

        window.location.href='confirm.html'
    })

})