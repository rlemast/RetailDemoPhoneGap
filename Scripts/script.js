;(function ($, undefined) {


	/*	$( window ).on( "navigate", function( event, data ){
			console.log(this, event, data);
		}); */


	// Initialize Function
	function init() {
        $( "body>[data-role='panel']" ).panel().enhanceWithin();
		initFilter();
	}

	function initFilter() {
		
		$('#tabs').find('.ui-navbar').find('a').on('click', processToggle);
		$('.js-apply').on('click', processApply);

		$('.js-filterButtons a').on('click', processFilter);

		$('.js-productFilterable').jqmts({
			useNativeMenu: false,
			showCounts: true,
			className: 'jqmts',
			attributes: {
				bestselling: "Best Selling",
				customerrating: "Customer Rating",
				price: "Price"
			}
		});



	}




	function processToggle(e) {
		var $collapsible = $($(this).attr('href')).find('.ui-collapsible'),
			$active = $(this).hasClass('ui-btn-active');

		if ($collapsible.hasClass("ui-collapsible-collapsed") || !$active) {
			$collapsible.collapsible("expand");
		} else {
			$collapsible.collapsible("collapse");
		}
	}
	function processApply(e) {
		var $collapsible = $($(this).attr('href')).find('.ui-collapsible');

		$collapsible.collapsible("collapse");
	}

	function processFilter(e) {
		var $this = $(this),
			type = $this.attr('data-filter'),
			$input = $($this.attr('href'));


		//	$input.val(type).trigger('change');
	}



/*
$.mobile.document.one( "filterablecreate", ".js-productFilterable", function() {
	$( ".js-productFilterable" ).filterable( "option", "filterCallback", function( index, searchValue ) {
		
		console.log($(this).attr('data-' + searchValue));
		return $(this).attr('data-' + searchValue) > 3;
	});
});*/

	// Init Bind
	$(document).on('pageinit',init);
})(jQuery);