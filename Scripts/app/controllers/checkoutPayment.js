define([
	"controllers/superController",
    "modules/cart",
    "text!templates/checkoutShippingItem.html"
], function (Super, cart, cartItemTmpl) {
    function CheckoutPayment() { }



    $.extend(true, CheckoutPayment.prototype, Super.prototype, {
        pagecreate: function () {
            this.$scope = $('#checkoutPayment');
        },
        pagebeforeshow: function () {
            var total = new Number(cart.getProductTotal()),
                tax = new Number((total * 0.06).toFixed(2));

            this.$scope.find(".js-productTotal").text("$" + total);
            this.$scope.find(".js-tax").text("$" + tax);
            this.$scope.find(".js-orderTotal").text("$" + (total + tax).toFixed(2));
        }
    });
    return new CheckoutPayment();
});