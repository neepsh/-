$('#footer').load('../data/footer.php');

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);

$(function () {
    $('.close_pop').click(function () {
        $('#pop_buy').hide();
    });

    $('.list_btn').click(function () {
        $('#pop_buy').show();
    })

})