define([
	"controllers/superController",
    "modules/cart",
    "text!templates/cartItem.html"
], function (Super, cart, cartItemTmpl) {
    function CartView() { }



    $.extend(true, CartView.prototype, Super.prototype, {
        pagecreate: function () {
        	var self = this;
        	this.$scope = $('#cart');
        	this.$items = this.$scope.find('.js-cartItems');

			this.$items.find('.js-decrease').on('click', function () {
				self.updateItem(this, -1);
			});
			this.$items.find('.js-increase').on('click', function () {
				self.updateItem(this, 1);
			});
			this.$items.find('.js-remove').on('click', function () {
				self.removeItem(this);
			});
        },
        pagebeforeshow: function () {
            this.renderItems();
        },
        updateItem: function (el, increment) {
        	var $item = $(el).parents('.cartItem'),
        		_item = $item.data();

        	_item.qty += increment;
        	cart.updateItems(_item);
        	$item.find('.js-qty').text(_item.qty);
        	if (_item.qty === 0) {
        		$item.remove();
        	}
        	this.updateTotals();
        },
        removeItem: function (el) {
        	var $item = $(el).parents('.cartItem'),
        		_item = $item.data();

    		_item.qty = 0;
        	cart.updateItems(_item);
    		this.renderItems();
        },
        renderItems: function () {
        	var _items = cart.items,
        		_i;

    		this.$items.empty();
    		//console.log(_items);
    		for (_i = 0; _i < _items.length; _i += 1) {
    			this.$items.append(this.renderItem(_items[_i]));
    		}
			this.$scope.trigger('create');
    		this.$scope.find('.js-itemQty').text(cart.items.length);
        	this.updateTotals();
        },
        renderItem: function (item) {
        	var html = Mustache.render(cartItemTmpl, item);
    			//console.log('render');
        	//console.log(html);
        	return html;
        },
        updateTotals: function () {
        	var total = "$" + cart.getProductTotal();

        	this.$scope.find('.js-productTotal, .js-orderSubtotal').text(total);
        }
    });
    return new CartView();
});