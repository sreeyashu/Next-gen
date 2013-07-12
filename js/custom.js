var viewport = offcanvas = {
	right: {},
	left: {}
};

$(document).ready(function() {
	//Off canvas
	offcanvas.left.$trigger = $('.show-left');
	offcanvas.right.$trigger = $('.show-right');
	offcanvas.$close = $('.center-trigger');

	// bind events
	offcanvas.left.$trigger.fastClick(function(e) {
		e.preventDefault();
		offcanvas.left.toggler();
	});

	offcanvas.right.$trigger.fastClick(function(e) {
		e.preventDefault();
		offcanvas.right.toggler();
	});

	offcanvas.$close.fastClick(function(e) {
		e.preventDefault();
		$('.wcm').removeClass('left_open').removeClass('right_open');
		//messages.$messageContainer.removeClass('open');
	});

	offcanvas.left.toggler = function() {

		$('.wcm').toggleClass('left_open').removeClass('right_open');
		//messages.$messageContainer.removeClass('open');
	};

	offcanvas.right.toggler = function() {

		$('.wcm').toggleClass('right_open').removeClass('left_open');
		//messages.$messageContainer.removeClass('open');
	};
	// Movements header toggler
	$('.record-list__header').on('click', function() {
		$(".account_info-details").slideToggle(250);
		setTimeout(function() {
			defaultScroll.refresh();
		}, 500);
	});
	// Movements toggler
	$('.transcation_icon').click(function() {
		$(this).closest('li').find('.detail-page').slideToggle();
		setTimeout(function() {
			defaultScroll.refresh();
		}, 500);
	});
	// Upcoming Transfer
	if (Modernizr.csstransitions) {
		$('.tasks').on('click', function() {
			$(".upcomming_transfer_overlayer").css("top", "0px").css("opacity", "1").css("z-index", "9999");
		});
		$('.close_btn').on('click', function() {
			$(".upcomming_transfer_overlayer").css("top", "1600px").css("opacity", "0").css("z-index", "-1");
		});
	} else {
		$('.tasks').on('click', function() {
			$(".upcomming_transfer_overlayer").animate({
				top: '0',
				opacity: '1'
			}, 250);
		});
		$('.close_btn').on('click', function() {
			$(".upcomming_transfer_overlayer").animate({
				top: '1600',
				opacity: '0'
			}, 250);
		});
	}

	//iScrolling
	var leftScroll, defaultScroll, rightScroll, upcommingScroll;
	(function($) {
		leftScroll = new iScroll('left_column', {
			draggableScrollbars: true,
		});

		rightScroll = new iScroll('right_column', {
			draggableScrollbars: true
		});
		upcommingScroll = new iScroll('upcomming_transfer', {
			draggableScrollbars: true
		});
		//'use strict';
		var setiScrollForMovements = function(elem) {
			if (defaultScroll) {
				defaultScroll.destroy();
			}
			defaultScroll = new iScroll(elem, {
				draggableScrollbars: true
			});
		}

		var scroller = {},
			breakPoint = {},
			$window = $(window),
			w = $window.width(),
			h = $window.height();
		scroller.center = {};
		scroller.center.small = {};
		scroller.center.medium = {};
		scroller.center.large = {};
		scroller.$navigation = $('.navigation-ia');
		scroller.$actionbar = $('.action_bar-ia');
		scroller.$accountbar = $('.record-list__header');
		//initialization
		breakPoint = (function(w, h) {
				var heights = {
					small: 320,
					large: 321
				},
					breakPoints = {
						medium: 767,
						large: 1024
					},
					previousWidth = (w <= breakPoints.medium) ? breakPoints.medium : breakPoints.large,
					previousHeight = (h <= heights.small) ? heights.small : heights.large,
					isChange = false;
				scroller.center.$wrap = $('#center_column');

				scroller.center.small.id = 'small-scroller';
				scroller.center.small.$el = $('#' + scroller.center.small.id);

				scroller.center.medium.id = 'movements-ia';
				scroller.center.medium.$el = $('#' + scroller.center.medium.id);

				scroller.center.large.id = 'record-list__content';
				scroller.center.large.$el = $('#record-list__content');

				//initilizating the first application
				var setElement = function(height, breakpoint) {
						var element;
						if (height === heights.small) {
							$('.subscrolling').css("height", "auto");
							element = 'small-scroller';
							//setiScrollForMovements('small-scroller');
						} else if (breakpoint === breakPoints.medium) {
							$('.subscrolling').css("height", "100%");
							$('.record-list').css("height", "auto");
							element = 'movements-ia';
							//setiScrollForMovements('movements-ia');
						} else {
							$('.subscrolling').css("height", "100%");
							$('.record-list').css("height", "100%");
							element = 'record-list__content';
							//setiScrollForMovements('record-list__content');
						}
						setiScrollForMovements(element);
					};
				//Set ViewPort heights
				var setHeights = function(h) {
						//define center

						// Height Calculations 
						scroller.center.$wrap.height(h);
						//scroller.center.small.$el.height(h - (scroller.$navigation.outerHeight(true)));
						//scroller.center.medium.$el.height(h - (scroller.$navigation.outerHeight(true) + scroller.$actionbar.outerHeight(true)));
						//scroller.center.large.$el.height(h - (scroller.$navigation.outerHeight(true) + scroller.$actionbar.outerHeight(true) + scroller.$accountbar.outerHeight(true)));

					}
				//Set iScroll when the application starts
				setElement(previousHeight, previousWidth);
				//Set Height
				//setHeights(h);
				return {
						setBreakPoint: function(w, h) {
							var width, height;
							width = (w <= breakPoints.medium) ? breakPoints.medium : breakPoints.large;
							height = (h <= heights.small) ? heights.small : heights.large;
							if (width !== previousWidth || height !== previousHeight) {
								isChange = true;
								previousWidth = width;
								previousHeight = height;
							}
							
							if (isChange) {
								setElement(height, width);
							}
							//setHeights(h);
						}

					};
			})(w, h);
		$window.on('resize', function() {
				breakPoint.setBreakPoint($window.width(), $window.height());
				/*setTimeout(function() {
					defaultScroll.refresh();
				}, 500);*/
				setTimeout(function() {
					leftScroll.refresh();
					rightScroll.refresh();
				}, 500);
			});
	})(jQuery);

});