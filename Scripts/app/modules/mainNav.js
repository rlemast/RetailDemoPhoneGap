define(function () {
	function MainNav() { }

	$.extend(true, MainNav.prototype, {
		moduleInitialized: false,
		init: function () {
			if (this.moduleInitialized) { 
				return;
			}
            $( "body>[data-role='panel']" ).panel().enhanceWithin();
		}
	});

	return new MainNav();
});