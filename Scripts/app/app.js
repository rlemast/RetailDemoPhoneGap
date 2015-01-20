define([
    "router",
    "controllers/global"
], function (router, global) {
    function App() { }

    $.extend(true, App.prototype, {
        init: function () {
            router.init();
            $.mobile.initializePage();
            global.init();
        }
    });
    return new App();
});