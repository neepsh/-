$('#header').load('data/header.php',function () {
    $('.header').text('我的地址');
})

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);

(function () {

    $('.manage').click(function () {

        $('.show_address').hide();
        $('.show_manage').show();
        $('.header').text("地址修改")

    })
})();