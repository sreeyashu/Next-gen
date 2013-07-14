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
	leftScroll = new iScroll('left_column', {
            draggableScrollbars: true
        });
        rightScroll = new iScroll('right_column', {
            draggableScrollbars: true
        });

	var WCMScroller = function() {
			var isChange = false;
			return {
				init: function() {
					this.heights.previousHeight = (this.elements.$window.height() <= this.heights.small) ? this.heights.small : this.heights.large;
					this.breakPoints.previousWidth = (this.elements.$window.width()  <= this.breakPoints.medium) ? this.breakPoints.medium : this.breakPoints.large;

					var that = this;
					this.setElementForScroll(this.heights.previousHeight,this.breakPoints.previousWidth);
					this.elements.$window.on('resize', function() {
						that.setBreakPoint(that.elements.$window.width(), that.elements.$window.height());
					});
				},
				heights: {
					small: 320,
					large: 321,
					previousHeight: null
				},
				breakPoints: {
					medium: 767,
					large: 1024,
					previousWidth: null
				},
				scrollElement: null,
				elements: {
					$window: $(window),
					small: 'small-scroller',
					$small: $('#small-scroller'),
					medium: 'movements-ia',
					$medium: $('#movements-ia'),
					large: 'record-list__content',
					$large: $('#record-list__content'),
					$navigation: $('.navigation-ia'),
					$actionbar: $('.action_bar-ia'),
					$accountbar: $('.record-list__header'),
					scroller: {
						small:'.subscrolling',
						$small: $('.subscrolling'),
						medium: '.record-list', 
						$medium: $('.record-list')
					}
				},
				setBreakPoint: function(w, h) {
					var width, height;
					width = (w <= this.breakPoints.medium) ? this.breakPoints.medium : this.breakPoints.large;
					height = (h <= this.heights.small) ? this.heights.small : this.heights.large;
					if (width !== this.breakPoints.previousWidth || height !== this.heights.previousHeight) {
						isChange = true;
						this.breakPoints.previousWidth = width;
						this.heights.previousHeight = height;
						//console.log("breakPoint Width:" + width + "height:" + height);
					}
					
					if (isChange) {
						this.setElementForScroll(height, width);
						isChange = false;
					}
					else {
					    this.setHeights(this.elements.$window.height(), this.scrollElement);
					}
				},
				setElementForScroll: function(height, breakpoint) {
					
						if (height === this.heights.small) {
							$('.subscrolling').css("height", "auto");
							this.scrollElement = this.elements.small;
							//setiScrollForMovements('small-scroller');
						} else if (breakpoint === this.breakPoints.medium) {
							$('.subscrolling').css("height", "100%");
							$('.record-list').css("height", "auto");
							this.scrollElement = this.elements.medium;
							//setiScrollForMovements('movements-ia');
						} else {
							$('.subscrolling').css("height", "100%");
							$('.record-list').css("height", "100%");
							this.scrollElement = this.elements.large;
							//setiScrollForMovements('record-list__content');
						}
						this.setHeights(this.elements.$window.height(), this.scrollElement);
						this.setiScrollForMovements(this.scrollElement);

				},
				setiScrollForMovements: function(elem) {
					if (defaultScroll) {
						defaultScroll.destroy();
					}
					console.log(defaultScroll);
					defaultScroll = new iScroll(elem, {
						draggableScrollbars: true
					});
				},
				setHeights: function(viewportHeight, elem) {
					if (elem === this.elements.small) {
						this.elements.$small.height(viewportHeight - (this.elements.$navigation.outerHeight(true)));
						this.elements.$medium.height('auto');
						this.elements.$large.height('auto');
					}
					else if (elem === this.elements.medium) {
						this.elements.$medium.height(viewportHeight - (this.elements.$navigation.outerHeight(true) + this.elements.$actionbar.outerHeight(true)));
						this.elements.$small.height('auto');
						this.elements.$large.height('auto');
					}
					else {
						this.elements.$large.height(viewportHeight - (this.elements.$navigation.outerHeight(true) + this.elements.$actionbar.outerHeight(true) + this.elements.$accountbar.outerHeight(true)));
						this.elements.$small.height('auto');
						this.elements.$medium.height('auto');
					}
				}
			}
			
		}

	var wcmScroller = new WCMScroller();
	wcmScroller.init();
});