define(function () {
	function SuperModule() { }

	$.extend(true, SuperModule.prototype, {
		moduleInitialized: false,
		init: function () {
        	console.log("Override this init function");
		},
		runModule: function () {
        	//console.log("Run Page");
            //$.mobile.initializePage();
            if (!this.moduleInitialized) {
            	this.init();
            	this.moduleInitialized = true;
            }
        }
	});

	return SuperModule;
});