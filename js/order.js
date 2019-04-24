$('#footer').load('../data/footer.php',function () {

});
$('#header').load('../data/header.php',function () {
    $('.header').text('我的订单');
});

let oWidth=$(window).width()/7.5;

$(document.documentElement).css("fontSize",oWidth);

(function () {
    var oRder=document.getElementsByClassName('nav');

    var last=oRder[0];

    for( let i=0; i<oRder.length; i++){

         oRder[i].index=i;

         oRder[i].onclick=function () {

            last.classList.remove('nav_active');

             this.classList.add('nav_active');

            last=this;

         }
    };

    $('.order_delete').click(function () {
        $('#support').show();
    });

    $('.support_bg').click(function () {
        $('#support').hide();
    });
    show_dialog(
        {
            info:"确定删除"
        }
    );






})();