function show_dialog(option,callback) {
    $('#dialog').css('display','flex');

    if(option.cancel_show){
        $('.dialog_cancel').css('display','none');
    }
    $('.dialog_info').text(option.info);

    $('.dialog_define').text(option.define);

    $('.dialog_define').on("tap",function (e) {

       if($(e.target).hasClass('dialog_define')){

           $('#dialog').css("display","none");
           if (callback){
               callback(true)
           }
       }
    })
    $('.dialog_cancel').text(option.cancel);
    $('.dialog_cancel').tap(function (e) {

        if($(e.target).hasClass('dialog_cancel')){
            $('#dialog').css("display","none");
            if (callback){
                callback(false)
            }
        }

    })
    // $('.dialog').click(function () {
    //     $('#dialog').css("display","none");
    // })

};