function checkStatusCallback(callback) {
    setTimeout(function () {
        callback("Status OK");
    }, 2000);
}
function checkStatus() 
{
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Status OK");
        }, 2000);
    });
}
checkStatus()
    .then(function (result) {
        console.log(result);
    });