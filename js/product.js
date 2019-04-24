
$('#header').load('../data/header.php',function () {
    $('.header').text('阿橙果啦鲜榨橙汁');
});

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);

