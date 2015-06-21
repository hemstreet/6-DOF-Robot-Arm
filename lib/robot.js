var request = require('request'),
    utils = require('./utilities');

var robot = {

    j1: 3,
    j2: 5,
    j3: 6,
    j4: 9,
    j5: 10,
    j6: 11,
    baseUrl:'http://yun.local/arduino/servo/',

    init: function() {
        this.allHome();
    },
    rotateHand: function(deg) {
        this.servoTo(this.j5, deg);
    },
    closeFingers: function() {
        this.servoTo(this.j6, 0);
    },
    openFingers: function() {
        this.servoTo(this.j6, 180);
    },
    fingersTo: function(deg) {
        this.servoTo(this.j6, deg);
    },
    servoTo: function(pin, deg) {
        utils.getUrl(pin + '/' + deg);
    },
    allHome: function() {
        this.servoTo(this.j1, 90);
        this.servoTo(this.j2, 90);
        this.servoTo(this.j3, 90);
        this.servoTo(this.j4, 90);
        this.servoTo(this.j5, 90);
    }
};