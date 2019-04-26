$('#header').load('../data/header.php',function () {
    $('.header').text('接单大厅');
})
$('#footer').load('../data/g_footer.php');

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);

$(function () {

    var last=$('.item_top').eq(1);

    $('.item_top').click(function () {
        last.removeClass('item_active');
        $(this).addClass('item_active');
        last=$(this);
    });

    $('.order_back').click(function () {

        $('#support').show();
    });

    $('.support_bg').click(function () {
        $('#support').hide();
    })
});