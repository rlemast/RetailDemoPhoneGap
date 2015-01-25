// Avoid `console` errors in browsers that lack a console.
; (function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

;(function ($, undefined) {

	/*==============================
		TEMPLATES
	==============================*/

	var headerTmpl = '<div data-role="header" data-position="inline"><div class="ui-btn-left"><a href="#nav-panel" class="ui-btn ui-icon-bars ui-btn-icon-notext menuBtn" data-role="button" role="button">Menu</a><a href="#" class="ui-btn ui-icon-carat-l ui-btn-icon-notext menuBtn" data-role="button" data-rel="back" role="button">Back</a></div><div class="search"><input type="search" name="search" value="" data-mini="true" data-theme="a" class="search-header" placeholder="Search" /></div><a href="#" class="ui-btn-right ui-btn ui-icon-cart ui-btn-icon-notext cartBtn" data-role="button" role="button">Cart</a></div>';

	var cartItemTmpl = '<div class="cartItem" data-sku="{{sku}}" data-model="{{model}}" data-price="{{price}}" data-title="{{title}}" data-image="{{image}}" data-qty="{{qty}}"><div class="bg-gray ui-grid-a edge"><div class="ui-block-a js-id"><p><strong>{{id}}</strong></p></div><div class="ui-block-b"><p><a href="#productDetail" class="js-productName">{{title}}</a></p><p><strong>Model:</strong> <span class="js-model">{{model}}</span><br /><strong>SKU:</strong> <span class="js-sku">{{sku}}</span></p><p>Gift With Purchase:</p><ul><li>Kasperkey Internet Security - 3-Device - 6 Months - Android/iOS - Mac/Windows [Download]</li></ul></div></div><div class="ui-grid-a cartCSBreakPoint"><div class="ui-block-a"><p><img src="{{image}}" class="js-image"></p></div><div class="ui-block-b"><p class="price js-price">${{price}}</p><div class="quantity"><a href="#" class="js-decrease ui-btn ui-btn-inline ui-primary-icon ui-icon-minus ui-btn-icon-notext ui-corner-all"></a><strong>Quantity <span class="js-qty">{{qty}}</span></strong>&nbsp;&nbsp;<a href="#" class="js-increase ui-btn ui-btn-inline ui-primary-icon ui-icon-plus ui-btn-icon-notext ui-corner-all"></a></div><p><a href="#" class="js-remove">Remove Item</a></p></div></div><div data-role="tabs"><div data-role="navbar"><ul><li><a href="#pickupTab" data-ajax="false">Store Pickup</a></li><li><a href="#shippingTab" data-ajax="false">Shipping</a></li></ul></div><div id="pickupTab"><p><a href="#">Select a Store</a></p><p><strong class="text-red">FREE</strong></p></div><div id="shippingTab"><fieldset data-role="controlgroup" data-theme="b"><legend>Get it by:</legend><input type="radio" name="shipping" id="shippingStandard" value="Standard" checked="checked"><label for="shippingStandard">Mon, Jan 26 - <span class="text-red">FREE</span><br />Standard</label><input type="radio" name="shipping" id="shippingExpedited" value="Expedited"><label for="shippingExpedited">Wed, Jan 21 - $11.99<br />Expedited</label><input type="radio" name="shipping" id="shippingExpress" value="Express"><label for="shippingExpress">Tue, Jan 20 - $21.99<br />Express</label></fieldset></div></div><ul data-role="listview" data-theme="a" class="ui-listview ui-listview-inset ui-corner-all ui-shadow"><li><a href="#">Accessories</a></li><li><a href="#">Protection Plans</a></li><li><a href="#">Special Offers</a></li></ul></div>';

	var checkoutShippingItemTmpl = '<div class="js-item" data-sku="{{sku}}" data-model="{{model}}" data-price="{{price}}" data-title="{{title}}" data-image="{{image}}" data-qty="{{qty}}"><div class="headWButton"><a href="#" class="small js-remove">Remove</a><h2>{{title}}</h2></div><p><strong>Model:</strong> {{model}} <br /><strong>SKU:</strong> {{sku}}</p><div class="headWButton"><a href="#" class="small">Ship Instead</a><h2 class="light">Pickup In Store</h2><hr /></div><p><strong>Margate FL</strong><br />3300 Nw 62nd Ave<br />Margate, FL 33063</p><a href="#" class="small">Change Store</a><fieldset data-role="controlgroup" data-theme="b"><input type="radio" name="radio-{{sku}}" id="radio-{{sku}}-1" value="{{sku}}-1" checked="checked"><label for="radio-{{sku}}-1">I will pick up this item myself.</label><input type="radio" name="radio-{{sku}}" id="radio-{{sku}}-2" value="{{sku}}-2"><label for="radio-{{sku}}-2">Someone else will pick up this item.</label></fieldset><div class="headWButton"><h2 class="light">Gift Options</h2><hr /></div><label for="isGift">Send a gift message<select name="isGift" id="isGift" data-role="slider" data-mini="true"><option value="off" selected="">No</option><option value="on">Yes</option></select></label><hr /></div>';

	var cartItemGiftCard = '<div class="cartItem" data-sku="{{sku}}" data-model="{{model}}" data-price="{{price}}" data-title="{{title}}" data-image="{{image}}" data-qty="{{qty}}"><div class="bg-gray ui-grid-a edge"><div class="ui-block-a js-id"><p><strong>{{id}}</strong></p></div><div class="ui-block-b"><p><a href="#productDetail" class="js-productName">{{title}}</a></p><p><strong>Model:</strong> <span class="js-model">{{model}}</span><br /><strong>SKU:</strong> <span class="js-sku">{{sku}}</span></p><p>{{offer}}</p></div></div><div class="ui-grid-a cartCSBreakPoint"><div class="ui-block-a"><p><img src="{{image}}" class="js-image"></p></div><div class="ui-block-b"><p class="price js-price">${{price}}</p><p><a href="#" class="js-remove">Remove Item</a></p></div></div></div>';








	/*==============================
		CONTROLLERS
	==============================*/


	// Super Controller
	var Super = (function () {
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
				})();



	// Deps: *Super, *mainNav, *header, *cartModule
	var global = (function () {
				    function Global() { }

				    $.extend(true, Global.prototype, Super.prototype, {
				        init: function () {
				        	mainNav.init();
				            header.init();
				            cartModule.init();
				        }
				    });
				    return new Global();
				})();


	// Deps: *Super, *cartModule
	var addToCart = (function () {
					    function AddToCart() { }



					    $.extend(true, AddToCart.prototype, Super.prototype, {
					        pagecreate: function () {
								$('#addToCart').find('.js-addToCart').on('click', function () {
									var $this = $(this),
										_data = $(this).data();
									if ($this.attr('disabled')) {
										return false;
									}
									cartModule.addToCart(_data);
									$this.attr('disabled', 'disabled').addClass('disabled');
								});
					        }
					    });
					    return new AddToCart();
					})();


    /*
    "controllers/superController",
    "modules/cart",
    "text!templates/cartItem.html"
    */
    // Deps: *Super, *cartModule, *cartItemTmpl

	var cartController = (function () {
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
									//console.log("pagecreate");
						        },
						        pagebeforeshow: function () {
						            this.renderItems();
						            this.pagecreate();
									//console.log("pagebeforeshow");
						        },
						        updateItem: function (el, increment) {
						        	var $item = $(el).parents('.cartItem'),
						        		_item = $item.data();

						        	_item.qty += increment;
						        	cartModule.updateItems(_item);
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
						        	cartModule.updateItems(_item);
						    		this.renderItems();
						        },
						        renderItems: function () {
						        	var _items = cartModule.items,
						        		_i;

						    		this.$items.empty();
						    		//console.log(_items);
						    		for (_i = 0; _i < _items.length; _i += 1) {
						    			this.$items.append(this.renderItem(_items[_i]));
						    		}
									this.$scope.trigger('create');
						    		this.$scope.find('.js-itemQty').text(cartModule.items.length);
						        	this.updateTotals();
						        },
						        renderItem: function (item) {
						        	var html;
						        	if (item.sku === "mGiftcard") {
						        		html = Mustache.render(cartItemGiftCard, item);
						        	} else {
						        		html = Mustache.render(cartItemTmpl, item);
						        	}

						    			//console.log('render');
						        	//console.log(html);
						        	return html;
						        },
						        updateTotals: function () {
						        	var total = "$" + cartModule.getProductTotal();

						        	this.$scope.find('.js-productTotal, .js-orderSubtotal').text(total);
						        }
						    });
						    return new CartView();
						})();


	/*
	"controllers/superController",
    "modules/cart"
	*/
    // Deps: *Super, *cartModule

	var checkoutPayment = (function () {
						    function CheckoutPayment() { }



						    $.extend(true, CheckoutPayment.prototype, Super.prototype, {
						        pagecreate: function () {
						            this.$scope = $('#checkoutPayment');
						        },
						        pagebeforeshow: function () {
						            var total = new Number(cartModule.getProductTotal()),
						                tax = new Number((total * 0.06).toFixed(2));

						            this.$scope.find(".js-productTotal").text("$" + total);
						            this.$scope.find(".js-tax").text("$" + tax);
						            this.$scope.find(".js-orderTotal").text("$" + (total + tax).toFixed(2));
						        }
						    });
						    return new CheckoutPayment();
						})();

    
    /*
	"controllers/superController",
    "modules/cart",
    "text!templates/checkoutShippingItem.html"
    */
    // Deps: *Super, *cartModule, *checkoutShippingItemTmpl
    var checkoutShipping = (function () {
		    function CheckoutShipping() { }



		    $.extend(true, CheckoutShipping.prototype, Super.prototype, {
		        pagecreate: function () {
		            this.$scope = $('#checkoutShipping');
		            this.$items = this.$scope.find('.js-items');
		        },
		        pagebeforeshow: function () {
		            this.renderItems();
		            this.$scope.find(".js-productTotal, .js-subTotal").text("$" + cartModule.getProductTotal());
		        },
		        renderItems: function () {
		            var _items = cartModule.items,
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
		            var html = Mustache.render(checkoutShippingItemTmpl, item);
		            return html;
		        },
		        removeItem: function (el) {
		            var $item = $(el).parents('.js-item'),
		                item = $item.data();

		            item.qty = 0;
		            cartModule.updateItems(item);
		            $item.remove();
		           // console.log('remove');
		            this.$scope.find(".js-productTotal, .js-subTotal").text("$" + cartModule.getProductTotal());
		        }
		    });
		    return new CheckoutShipping();
		})();




	// Deps: *Super
	var codeScanner = (function () {
		    function Scanner() { }

		    $.extend(true, Scanner.prototype, Super.prototype, {
		        permitted: false,
		        pageshow: function () {
		            this.promptForPermission();
		        },
		        promptForPermission: function () {
		            var self = this;
		            if (this.permitted) {
		                $('#scanner').find('.camera').removeClass('disabled');
		                return;
		            }
		            $("#cameraAccess").find('.js-submit').on('click', function (e) {
		                self.permitted = true;
		                $('#scanner').find('.camera').removeClass('disabled');
		                
		                setTimeout(function(){
	                		$.mobile.navigate( "#productDetail" );
	                	}, 2000);
		            });
		            $("#cameraAccess").popup("open");
		            
		        }
		    });

		    return new Scanner();
		})();



	// Deps: *Super
	var home = (function () {
		    function Home() { }

		    $.extend(true, Home.prototype, Super.prototype, {
		        pagecreate: function () {
					$("#promotions").owlCarousel();
		        },
		        pagebeforeshow: function () {
		        },
		    });

		    return new Home();
		})();


	// Deps: *Super, *cartModule
	var productDetail = (function () {
		    function ProductDetail() { }

		    $.extend(true, ProductDetail.prototype, Super.prototype, {
		        pagecreate: function () {
					$(".stars.regular").jRating();
					$(".stars.primary").jRating({
						bigStarsPath: "css/jRating/icons/starsPrimary.png"
					});
					$("#productPhotos").owlCarousel();

		            $('#productDetail').find('.js-addToCart').on('click', function () {
		                var data = $(this).data();
		                cartModule.addToCart(data);
		            })
		        },
		        pagebeforeshow: function () {
		        	//console.log("HOME pagebeforeshow");
		        },
		        pageshow: function () {
		        	
		            
		        }
		    });

		    return new ProductDetail();
		})();


	// Deps: *Super, *cartModule
	var serp = (function () {
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
						cartModule.addToCart(data);
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
		})();





	// Deps: *Super
	var storeDetail = (function () {
		    function StoreDetail() { }

		    $.extend(true, StoreDetail.prototype, Super.prototype, {
		    	markers: [],
		    	options: {
		    		center: { lat: 26.7120925, lng: -80.0563893},
					zoom: 15,
					//panControl: false,
					//zoomControl: false,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					overviewMapControl: false//,
					//draggable: false,
					//scrollwheel: false,
					//disableDoubleClickZoom: true
		    	},
		        pagecreate: function () {
					//$("#promotions").owlCarousel();
			        this.map = new google.maps.Map(document.getElementById('locationMap'),
			            this.options);
			        this.addMarker();
		        },
		        pagebeforeshow: function () {
		        },
		        addMarker: function () {
					var marker = new google.maps.Marker({
					    position: new google.maps.LatLng(26.7120925,-80.0563893),
					    map: this.map,
					    title:"StrongThumb, LLC"
					});
					this.markers.push(marker);
		        }
		    });

		    return new StoreDetail();
		})();




	// Deps: *Super
	var dealDetail = (function () {
		    function Deal() { }

		    $.extend(true, Deal.prototype, Super.prototype, {
		        pagecreate: function () {
		        	$('#dealDetail').find('.js-addToCart').on('click', function () {
						var data = $(this).data();
						cartModule.addToCart(data);
					});
		        }
		    });

		    return new Deal();
		})();


	var giftCard = (function () {
		    function GiftCard() { }

		    $.extend(true, GiftCard.prototype, Super.prototype, {
		        pagecreate: function () {
		        	var self = this;

		        	$('#giftCardDenomination').on('change', function () {
		        		self.setData("price", $(this).val());
		        	});
		        	$('#mobileNumber').on('change', function () {
		        		self.setData("model", $(this).val());
		        	});
		        	$('#personalNote').on('change', function () {
		        		self.setData("offer", $(this).val());
		        	});
		        	$('#giftCard').find('.js-addToCart').on('click', function (e) {
						var data = $(this).data();

						if (data.model == "" || $(this).hasClass('disabled') || $(this).attr('disabled')) {
							e.preventDefault();
							return false;
						}
						cartModule.addToCart(data);
					});
		        },
		        setData: function (type, value) {
		        	var $target = $('#giftCard').find('.js-addToCart');

		        	$target.data(type, value);

		        	console.log($target.data(), type, value);
		        	if ($target.data().model != "") {
		        		$target.removeAttr('disabled').removeClass('disabled');
		        	} else {
		        		$target.attr('disabled', 'disabled').addClass('disabled');
		        	}
		        }
		    });

		    return new GiftCard();
		})();


	/*==============================
		CORES
	==============================*/


	var router = (function () {
					function Router() {}

					$.extend(true, Router.prototype, {
						routes: {
							"#home" : home,
							"#serp" : serp,
							"#productScan" : codeScanner,
							"#productDetail" : productDetail,
							"#addToCart" : addToCart,
							"#cart" : cartController,
							"#checkoutShipping" : checkoutShipping,
							"#checkoutPayment" : checkoutPayment,
							"#storeDetail" : storeDetail,
							"#dealDetail" : dealDetail,
							"#giftCard" : giftCard
						},
						init: function () {
							var _routes;
							if (!this.router) {
							//console.log("initializing router", this.router);
								_routes = this.buildRouteTable();
								_routes = _routes.concat(this.defaultRouteStyles);

								this.router = new $.mobile.Router(_routes, this.ControllerObject);
							}
							//console.log("initialized router", this.router);
						},
						buildRouteTable:function () {
							var self = this,
								routesOutput = [],
								_pushObj = {},
								_key;

						//	console.log('buildRouteTable', this);
							for (_key in this.routes) {

								/*  
									_pushObj = {
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
						//	console.log('router table', routesOutput);
							return routesOutput;
						},
						getController: function (type, route, hist, $page, e) {
							//require([this.routes[route.input]], function (controller) {
								this.routes[route.input].routeData = {
									route: route,
									history: hist,
									$page: $($page)
								}
								this.routes[route.input][type](e);
							//	console.log(arguments)
							//});
						},
						defaultRouteStyles: [
							// Use this for the native plugin routing mechanism.
						],
						ControllerObject: {
							// Use this for the native Controller Object.
						}
					});

					return new Router();
				})();


	// Deps: *router, *global
	var app = (function () {
				    function App() { }

				    $.extend(true, App.prototype, {
				        init: function () {
				            router.init();
				            $.mobile.initializePage();
				            global.init();

				            //console.log('initialize');
				        }
				    });
				    return new App();
				})();




	/*==============================
		MODULES
	==============================*/
	var mainNav = (function () {
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
				})();


	// Deps: *headerTmpl
	var header = (function () {
					function Header() {
						//this.init();
					}

					$.extend(true, Header.prototype, {
						$scope: $(),
						search: "",
						init: function () {
							var self = this;
							$(document).bind("pagebeforeshow", function (e, history) {
								self.setPage(history);
								//console.log('pagebeforeshow: ', arguments);
							});
						},
						setPage: function (history) {
							var $input;
							//console.log("header.setPage: ", this, history);
							this.history = history;
							
							if (this.$scope.length) {
								this.getState();
							}
							this.$scope = this.history.toPage;
							this.setState();
							this.setBackState();

							$input = this.$scope.find('#search');

							$input.on('focus', {self: this}, this.handleFocus);
							$input.on('blur', {self: this}, this.setBackState);

						},
						getState: function () {
							var $header = this.$scope.find('.ui-header');
							this.search = $header.find("#search").val();
						},
						setState: function () {
							var $header = this.$scope.find('.ui-header');
							$header.find("#search").val(this.search);
						},
						setBackState: function (e) {
							var self = e && e.data ? e.data.self : this,
								$header = e && e.currentTarget ? $(e.currentTarget).parents('.ui-header') : self.$scope.find('.ui-header'),
								showBack = self.history.prevPage.length ? "addClass" : "removeClass";
							$header[showBack]("withBack");
						},
						handleFocus: function (e) {
							if (e) {
								$(e.currentTarget).parents('.ui-header').removeClass("withBack");
							}
						}
					});

					return new Header();
				})();


	var cartModule = (function () {
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
				})();




	// Init Bind
	$(app.init);

})(jQuery);