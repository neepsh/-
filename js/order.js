$('#footer').load('../data/footer.php',function () {

});
$('#header').load('../data/header.php',function () {
    $('.header').text('我的订单');
    $('#header').click(function () {
        history.back();
    })
});

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);

(function () {
    var oRder=document.getElementsByClassName('nav'),
    aList=document.getElementsByClassName('list');


    var last=0;

    for( let i=0; i<oRder.length; i++){

         oRder[i].index=i;

         oRder[i].onclick=function () {


            oRder[last].classList.remove('nav_active');

            this.classList.add('nav_active');

             aList[last].style.display="none";
            aList[i].style.display="block";
            last=i;

         }
    };

    $('.order_delete').click(function () {
        $('#support').show();
    });

    $('.support_bg').click(function () {
        $('#support').hide();
    });

    $('.support_list li').click(function () {

        $('.order_icon').removeClass('check_list');

        $(this).find('.order_icon').addClass('check_list')

    });








})();