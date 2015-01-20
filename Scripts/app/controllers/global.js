define([
	"controllers/superController",
    "modules/mainNav",
    "modules/header",
    "modules/cart"
	], function (Super, mainNav, header, cart) {
    function Global() { }

    $.extend(true, Global.prototype, Super.prototype, {
        init: function () {
        	mainNav.init();
            header.init();
            cart.init();
        }
    });
    return new Global();
});