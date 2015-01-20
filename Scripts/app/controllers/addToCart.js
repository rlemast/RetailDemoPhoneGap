define([
	"controllers/superController",
    "modules/cart"
], function (Super, cart) {
    function AddToCart() { }



    $.extend(true, AddToCart.prototype, Super.prototype, {
        pagecreate: function () {
			$('#addToCart').find('.js-addToCart').on('click', function () {
				var $this = $(this),
					_data = $(this).data();
				if ($this.attr('disabled')) {
					return false;
				}
				cart.addToCart(_data);
				$this.attr('disabled', 'disabled').addClass('disabled');
			});
        }
    });
    return new AddToCart();
});