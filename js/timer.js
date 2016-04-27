'use strict'

var timer = angular.module("timer", []);

angular.module('timer').controller('timerController', function ($interval) {
    var time = this;

    var interval = $interval;

    var promise = null;

    time.counter = 0;
    time.total = 3000;
    time.ms = 1;
    time.isActive = false;

   // var promise = null;

    time.count = function () {
         time.counter = time.counter + 1;
     };

    function finished() {
        console.log("done");
        time.isActive = false;
    }

    function error() {
        console.log("error");
    }

    function notify() {
        console.log("tic");
    }

     time.start = function () {
         if(time.counter >= time.total){
             time = 0;
         }

         promise = interval(time.count, time.ms,time.total - time.counter);
         promise.then(finished, error, notify);
         time.isActive = true;

     }
    
    time.pause = function () {
        interval.cancel(promise);
        time.isActive = false;
    }

    time.reset = function () {
        time.counter = 0;
    }

});