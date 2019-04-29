$('#header').load('../data/header.php', function () {
    $('.header').text('个人中心');
    $('#header').click(function () {
        history.back();
    });
});

let oWidth = $(window).width() / 7.5;

$(document.documentElement).css("fontSize", oWidth);

$(function () {
    $('#files').change(function () {
        console.log(this.files)
        var urls=window.URL.createObjectURL(this.files[0])

        $('.up_img img').attr('src',urls);
        $('#up_logo').css("display","flex")
    });
    $('.up_btn').click(function () {
        $('#info_logo').attr('src', $('.up_img img').attr('src'));
        $('#up_logo').hide();
    });



    $('.define').click(function () {

        $.each($('input[type=text]'),function (i,obj) {
            if(obj.value==""){
                show_dialog({
                    info:"请输入"+$(obj).attr('data-infos'),
                    cancel_show:true,
                    define:"确定"
                });
                return false;
            }
        });
    })

});

