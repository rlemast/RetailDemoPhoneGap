define([
	"controllers/superController"
], function (Super) {
    function Home() { }

    $.extend(true, Home.prototype, Super.prototype, {
        pagecreate: function () {
			$("#promotions").owlCarousel();
        },
        pagebeforeshow: function () {
        },
    });

    return new Home();
});