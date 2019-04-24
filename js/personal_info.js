
$('#header').load('../data/header.php',function () {
    $('.header').text('个人中心');
});

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);