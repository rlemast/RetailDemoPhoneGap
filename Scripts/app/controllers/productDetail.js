define([
	"controllers/superController",
    "modules/cart"
], function (Super, cart) {
    function ProductDetail() { }

    $.extend(true, ProductDetail.prototype, Super.prototype, {
        pagecreate: function () {
			$(".stars.regular").jRating();
			$(".stars.primary").jRating({
				bigStarsPath: "css/jRating/icons/starsPrimary.png"
			});
			$("#productPhotos").owlCarousel();

            $('#productDetail').find('.js-addToCart').on('click', function () {
                var data = $(this).data();
                cart.addToCart(data);
            })
        },
        pagebeforeshow: function () {
        	//console.log("HOME pagebeforeshow");
        },
        pageshow: function () {
        	
            
        }
    });

    return new ProductDetail();
});