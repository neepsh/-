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
    if (!options.notSetContentType&&options.method.toLowerCase() === 'post') {
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return fetch(url, options)
        
        .then(checkStatus)
        .then(parseJSON)
        .then(handleErrors)
        .catch(err => ({ errcode: '-1', message: err.message }));
}