define(function () {
	var _defaultItem = {
		model: "",
		sku: "",
		qty: "",
		price: ""
	};

	function Cart() { }

	$.extend(true, Cart.prototype, {
		moduleInitialized: false,
		init: function () {
			if (this.moduleInitialized) { 
				return;
			}
			this.$el = $(".js-cartIcon");
			this.updateCount();
		},
		items: [/*{ // Test Object!
			id: 1,
			image: "img/445579-ipad-air-2-colors.jpg",
			model: "MGKL2LL/A",
			price: 599.99,
			qty: 1,
			sku: 3313043,
			title: "Apple ® - iPad Air 2 Wi-Fi 64GB - Space Gray/Black"
		}*/],
		addToCart: function (item) {
			var _id = this.getId(item.sku);
			if (_id > -1) {
				this.items[_id].qty += 1;
			} else {
				item.qty = 1;
				item.id = this.items.length + 1;
				this.items.push(item);
			}
			this.updateCount();
		},
		updateCount: function () {
			var show = this.items.length > 0,
				$count = this.$el.find('.count'),
				_qty = 0, 
				_i;

			for (_i = 0; _i < this.items.length; _i += 1) {
				_qty += this.items[_i].qty;
			}

			$count.text( _qty );

			if (show) {
				$count.addClass('visible');
			} else {
				$count.removeClass('visible');
			}
			//console.log("Cart - items: ", this.items);
		},
		updateItems: function (item) {
			var _id = this.getId(item.sku);
			if (_id > -1 && item.qty >= 0) {
				//console.log('item qty', item.qty);
				if (item.qty < 1) {
					this.removeItem(_id);
				} else {
					this.items[_id].qty = item.qty;
				}
			}
			this.updateCount();
		},
		getId: function (sku) {
			var _i;

			for (_i = 0; _i < this.items.length; _i += 1) {
				if (this.items[_i].sku === sku) {
					return _i;
				}
			}
			return -1;
		},
		removeItem: function (id) {
			this.items.splice(id, 1);
			this.updateIds();
		},
		updateIds: function () {
			var _i;
			for (_i = 0; _i < this.items.length; _i += 1) {
				this.items[_i].id = _i + 1;
			}
		},
		getProductTotal: function () {
			var dollars = 0,
				_i;

			for (_i = 0; _i < this.items.length; _i += 1) {
				dollars += this.items[_i].qty * this.items[_i].price;
			}
			return dollars;
		}
	});

	return new Cart();
});