define([
	"controllers/superController",
    "modules/cart",
    "text!templates/checkoutShippingItem.html"
], function (Super, cart, cartItemTmpl) {
    function CheckoutShipping() { }



    $.extend(true, CheckoutShipping.prototype, Super.prototype, {
        pagecreate: function () {
            this.$scope = $('#checkoutShipping');
            this.$items = this.$scope.find('.js-items');
        },
        pagebeforeshow: function () {
            this.renderItems();
            this.$scope.find(".js-productTotal, .js-subTotal").text("$" + cart.getProductTotal());
        },
        renderItems: function () {
            var _items = cart.items,
                self = this,
                _i;

            this.$items.empty();

            for (_i = 0; _i < _items.length; _i += 1) {
                this.$items.append(this.renderItem(_items[_i]));
            }
            this.$scope.trigger('create');

            this.$scope.find('.js-remove').on('click', function () {
                self.removeItem(this);
            });
        },
        renderItem: function (item) {
            var html = Mustache.render(cartItemTmpl, item);
            return html;
        },
        removeItem: function (el) {
            var $item = $(el).parents('.js-item'),
                item = $item.data();

            item.qty = 0;
            cart.updateItems(item);
            $item.remove();
           // console.log('remove');
            this.$scope.find(".js-productTotal, .js-subTotal").text("$" + cart.getProductTotal());
        }
    });
    return new CheckoutShipping();
});