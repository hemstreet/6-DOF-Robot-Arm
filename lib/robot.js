var request = require('request');

var robot = {

    base: 3,
    shoulder: 5,
    elbow: 6,
    wrist: 9,
    hand: 10,
    fingers: 11,
    baseUrl:'http://yun.local/arduino/servo/',

    init: function() {

    },
    rotateHand: function(deg) {

    },
    closeFingers: function() {

    },
    openFingers: function() {

    },
    // Rename this function when i'm nost tired
    getUrl: function(url) {
        request(baseUrl + url, function(error, response, body) {
            console.log(body);
        });
    }

};