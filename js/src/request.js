function request(url ,options){

    if (!options) {
        options = {};
    }
    if (!options.headers) {
        options.headers = {};
    }
    const user = localStorage.getItem("wx_token");
    if (user) {
        options.headers.token = user
    }
    // if (!options.notSetContentType&&options.method.toLowerCase() === 'post') {
    //     options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    // }
  //  console.log(options)
    return fetch(url, options)
        .then(check)
        .catch(err => ({ errcode: '-1', message: err.message }));
}
function check(data){

    if (data.status!=200){
        return
    }
    return data.json();
};

