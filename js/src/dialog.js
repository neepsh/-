function show_dialog(option,callback) {
    $('#dialog').show();
    $('.dialog_info').text(option.info);
    $('.dialog_define').text(option.define).click(function () {
        $('#dialog').hide();
        if (callback){
            callback(true)
        }

    });
    $('.dialog_cancel').text(option.cancel).click(function () {
        $('#dialog').hide();
        if (callback){
            callback(false)
        }
    });

};