
$('#header').load('../data/header.php',function () {
    $('.header').text('我的区域');
});

$('#footer').load('../data/g_footer.php');

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);