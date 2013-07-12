(function ($) {
 
var viewport = {}, offcanvas = {right: {}, left: {}}, scroller = {}, messages = {}, overlayer = {}, upcomming = {}, exporter = {}, accountbar = {}, transaction = {}, form = {}, myaccount = {}, fundtransfer = {overlayer: {}, benificiaries: {}, myaccount: {}}, accounts = {}, login = {}, settings = {};

    $(document).ready(function () {
        //scroller.init();
        // main components
        //viewport.init();
        offcanvas.init();
    });

    // off-canvas
    offcanvas.init = function () {
        offcanvas.left.$trigger = $('.show-left');
        offcanvas.right.$trigger = $('.show-right');
        offcanvas.$close = $('.center-trigger');

        // bind events
        offcanvas.left.$trigger.fastClick(function (e) {
            e.preventDefault();
            offcanvas.left.toggler();
        });

        offcanvas.right.$trigger.fastClick(function (e) {
            e.preventDefault();
            offcanvas.right.toggler();
        });

        offcanvas.$close.fastClick(function (e) {
            e.preventDefault();
            $('.wcm').removeClass('left_open').removeClass('right_open');
            //messages.$messageContainer.removeClass('open');
        });

        offcanvas.left.toggler = function () {

            $('.wcm').toggleClass('left_open').removeClass('right_open');
            //messages.$messageContainer.removeClass('open');
        };

        offcanvas.right.toggler = function () {

            $('.wcm').toggleClass('right_open').removeClass('left_open');
            //messages.$messageContainer.removeClass('open');
        };

    }


    // scroller
    scroller.init = function () {
		

    }

}(jQuery));