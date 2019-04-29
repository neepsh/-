$('#header').load('../data/header.php', function () {
    $('.header').text('我的地址');
    $('#header').click(function (e) {
        if($(e.target).attr('id')=='header'){
            if($('.header').text()=='我的地址'){
                history.back();
            }else {
                $('.show_address').show();
                $('.show_manage').hide();
                $('.header').text("我的地址")
            }
        }

    });
});

let oWidth = $(window).width() / 7.5;

$(document.documentElement).css("fontSize", oWidth);

(function () {

    $('.manage').click(address_manage);

    var my_address=JSON.parse(sessionStorage.getItem('xbz_address'));

    if(my_address){
        address_manage();
        $('input[type=text]').eq(0).val(my_address.address);
        sessionStorage.removeItem('xbz_address');
    }


    $('#save_address').tap(function () {

        if(!$('input[checked=checked]')){
            show_dialog({
                info:"请选择性别！",
                define:'确定',
                cancel_show:true
            });
            return
        };
        $.each($('input[type=text]'),function (i,obj) {

            if(i==0){
                if($(obj).val()==''){
                     show_dialog({
                        info:"请选择收货地址！",
                        define:'确定',
                        cancel_show:true
                    });
                     return false
                }
            }else if(i==1){

                if($(obj).val()==''){
                    show_dialog({
                        info:"请输入收货详情地址！",
                        define:'确定',
                        cancel_show:true
                    });

                     $(obj).focus();
                    return false
                }
            }else if(i==2){
                if($(obj).val()==''){
                    show_dialog({
                        info:"请输入收货人姓名！",
                        define:'确定',
                        cancel_show:true
                    });
                    $(obj).focus();
                    return false
                }
            }else {
                if($(obj).val()==''){
                    show_dialog({
                        info:"请输入联系人电话！",
                        define:'确定',
                        cancel_show:true
                    });
                    $(obj).focus();
                    return false
                }else {
                    var regMoblie = /^1[345678]\d{9}$/;

                    if(!regMoblie.test($(obj).val())){

                        show_dialog({
                            info:"请输入正确的联系人电话！",
                            define:'确定',
                            cancel_show:true
                        });
                        $(obj).focus();
                        return false
                    }
                }
            }
        });
    })

})();

function address_manage() {

    $('.show_address').hide();
    $('.show_manage').show();
    $('.header').text("地址修改")
}