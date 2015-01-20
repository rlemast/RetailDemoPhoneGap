define([
	"text!templates/header.html"
],function (headerTmpl) {
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
});