$('#header').load('../data/header.php',function () {
    $('.header').text('个人中心');
    $('#header').click(function () {
        history.back();
    });
})
$('#footer').load('../data/footer.php');

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);