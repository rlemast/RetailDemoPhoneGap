define([
	"controllers/superController",
    "modules/cart"
], function (Super, cart) {
    function Serp() { }



    $.extend(true, Serp.prototype, Super.prototype, {
        init: function () {
        	//console.log('serp init');

        },
        pagecreate: function () {
        //	console.log("SERP pagecreate");
        	$('#tabs').find('.ui-navbar').find('a').on('click', this.processToggle);
			$('.js-apply').on('click', this.processApply);

			$('.js-filterButtons a').on('click', this.processFilter);

			$('#serp').find('.js-addToCart').on('click', function () {
				var data = $(this).data();
				cart.addToCart(data);
			})

			/*$('.js-productFilterable').jqmts({
				useNativeMenu: false,
				showCounts: true,
				className: 'jqmts',
				attributes: {
					bestselling: "Best Selling",
					customerrating: "Customer Rating",
					price: "Price"
				}
			});*/
        },
        pagebeforeshow: function () {
        //	console.log("SERP pagebeforeshow");
        },
		processToggle: function(e) {
			var $collapsible = $($(this).attr('href')).find('.ui-collapsible'),
				$active = $(this).hasClass('ui-btn-active');

			if ($collapsible.hasClass("ui-collapsible-collapsed") || !$active) {
				$collapsible.collapsible("expand");
			} else {
				$collapsible.collapsible("collapse");
			}
		},
		processApply: function(e) {
			var $collapsible = $($(this).attr('href')).find('.ui-collapsible');

			$collapsible.collapsible("collapse");
		},
		processFilter: function(e) {
			var $this = $(this),
				type = $this.attr('data-filter'),
				$input = $($this.attr('href'));


			//	$input.val(type).trigger('change');
		}
    });
    return new Serp();
});