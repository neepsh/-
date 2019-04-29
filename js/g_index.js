$('#header').load('../data/header.php',function () {
    $('.header').text('接单大厅');
})
$('#footer').load('../data/g_footer.php');

let oWidth=document.documentElement.clientWidth/7.5;

$(document.documentElement).css("fontSize",oWidth);

$(function () {

    var last=0;

    $('.item_top').click(function () {

        if($(this).index()==0){
            $('.oder_footer').hide();
        }else {
            $('.oder_footer').show();
        }
        $('.oder_content').eq(last).hide();
        $('.item_top').eq(last).removeClass('item_active');
        $(this).addClass('item_active');
        $('.oder_content').eq($(this).index()).show();
        last=$(this).index();
    });

        $('.order_back').click(function () {

        $('#support').show();
    });

    $('.support_bg').click(function () {
        $('#support').hide();
    })
});