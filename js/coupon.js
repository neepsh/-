$('#header').load('../data/header.php',function () {
    $('.header').text('优惠中心');
})
$('#footer').load('data/footer.php');

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);