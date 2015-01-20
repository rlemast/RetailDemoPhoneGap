define(function () {
	function SuperController() { }

	$.extend(true, SuperController.prototype, {
		pageInitialized: false,
		init: function () {
        //	console.log("Override this init function");
		},
		runPage: function () {
        	//console.log("Run Page");
            //$.mobile.initializePage();
            if (!this.pageInitialized) {
            	this.init();
            	this.pageInitialized = true;
            }
        },
        pagecreate: function () {
        	// Fires when the page is created the first time
        },
        pagebeforeshow: function () {
        	// Fire before the page shows every time
        },
        pageshow: function () {
            // Fire when the page shows every time
        },
        routeData: {
        	eventType: "",
			route: [],
			history: {},
			$page: $()
        }
	});

	return SuperController;
});