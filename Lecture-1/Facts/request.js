// server
const { exec } = require("child_process")
function takeRequest(data, success, failure) {
    if (data % 2 == 0) {
        success();
    } else {
        failure();
    }
}

// client
function success() {
    console.log("Your request was completed");
    exec("google-chrome facebook.com");
}

function failure() {
    console.log("Some error occured");
    exec("libreoffice");
}

takeRequest(17, success, failure);
takeRequest(18, success, failure);