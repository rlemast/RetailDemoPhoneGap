define([
	"controllers/superController"
], function (Super) {
    function Scanner() { }

    $.extend(true, Scanner.prototype, Super.prototype, {
        permitted: false,
        pageshow: function () {
        	//console.log("HOME pageshow");
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
            })
            $("#cameraAccess").popup("open");
            
        }
    });

    return new Scanner();
});