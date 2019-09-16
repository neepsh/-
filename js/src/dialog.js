
var callback;
function show_dialog(option,call) {

    if (call){
        callback=call;
    }
    $('#dialog').css('display','flex');
    if(option.cancel_show){
        $('.dialog_cancel').hide();
    }
    $('.dialog_info').text(option.info);

    $('.dialog_define').text(option.define);

    $('.dialog_cancel').text(option.cancel);

};

$('.dialog_define').click(function (e) {

    console.log(callback)
    if($(e.target).hasClass('dialog_define')){

        $('#dialog').hide();

        if (callback){
            callback()
        }
    }
});

$('.dialog_cancel').on("tap",function (e) {

    if($(e.target).hasClass('dialog_cancel')){
        $('#dialog').hide();

    }
})