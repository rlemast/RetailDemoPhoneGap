// Avoid `console` errors in browsers that lack a console.
; (function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



/* REQUIRE JS SETUP */


require.config({
    // relative url from where modules will load
    baseUrl: "/Scripts/app/",
    paths: {
      //  "jquery": "../libs/jquery-1.8.2"
    },
    urlArgs: "v-" + new Date().getTime()
    //urlArgs: "v-1"
     /*,
    map: {
        '*': { 'jquery': 'jquery-private' },
        'jquery-private': {'jquery': 'jquery'}
    },
    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }*/
});

require(["app"], function (app) {
    app.init();
});