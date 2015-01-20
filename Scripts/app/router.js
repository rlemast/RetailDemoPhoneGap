define([], function () {
	function Router() {}

	$.extend(true, Router.prototype, {
		init: function () {
			var _routes;
			if (!this.router) {
				_routes = this.buildRouteTable();
				_routes = _routes.concat(this.defaultRouteStyles);

				this.router = new $.mobile.Router(_routes, this.ControllerObject);
			}
		},
		buildRouteTable:function () {
			var self = this,
				routesOutput = [],
				_pushObj = {},
				_key;

			for (_key in this.routes) {

				/*  _pushObj = {
						_key : {
							events: "",
							handler: function
						}
					}


					bc  => pagebeforecreate
				    c   => pagecreate
				    i   => pageinit
				    bs  => pagebeforeshow
				    s   => pageshow
				    bh  => pagebeforehide
				    h   => pagehide
				    rm  => pageremove
				    bC  => pagebeforechange
				    bl  => pagebeforeload
				    l   => pageload

				*/

				_pushObj = {};
				_pushObj[_key] = { 
					events: "c,bs,s",
					handler: function () {
						self.getController.apply(self, arguments);
					}
				};
				routesOutput.push(_pushObj);
			}
			return routesOutput;
		},
		getController: function (type, route, hist, $page, e) {
			require([this.routes[route.input]], function (controller) {
				controller.routeData = {
					route: route,
					history: hist,
					$page: $($page)
				}
				controller[type](e);

				//console.log("route type: ", type);
				//controller.runPage(e);
			//	console.log(controller.routeData);
			});
		},
		routes: {
			"#home" : "controllers/home",
			"#serp" : "controllers/serp",
			"#productScan" : "controllers/codeScanner",
			"#productDetail" :"controllers/productDetail",
			"#addToCart" : "controllers/addToCart",
			"#cart" : "controllers/cart",
			"#checkoutShipping" : "controllers/checkoutShipping",
			"#checkoutPayment" : "controllers/checkoutPayment"
		},
		defaultRouteStyles: [
			// Use this for the native plugin routing mechanism.
		],
		ControllerObject: {
			// Use this for the native Controller Object.
		}
	});

	return new Router();
});