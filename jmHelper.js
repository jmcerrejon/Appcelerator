//
// jmHelper.js
//
// Created by JOSE MANUEL CERREJON GONZALEZ (ulysess at gmail dot com).
// Licensed under GPL2 License.
//

function isJSON(obj) {
    return "object" == typeof JSON.parse(obj) ? true : false;
}

exports.getData = function(url, _callback) {
    xhr = Ti.Network.createHTTPClient({
        onload: function() {
            _callback({
                success: true,
                data: JSON.parse(this.responseText)
            });
        },
        onerror: function(e) {
        	//Ti.API.debug(e.error);
            _callback({
                success: false,
                error: e.error
            });
        },
        timeout: 5000
    });
    xhr.open("GET", url);
    xhr.send();
};

exports.postData = function(url, obj, _callback) {
    var param = JSON.stringify(obj), xhr = Ti.Network.createHTTPClient({
        onload: function() {
            _callback({
                success: true
            });
        },
        onerror: function(e) {
        	//Ti.API.debug(e.error);
            _callback({
                success: false,
                error: e.error
            });
        }
    });
    xhr.open("POST", url);
    xhr.send(param);
};
