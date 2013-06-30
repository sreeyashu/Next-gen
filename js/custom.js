$(document).ready(function() {
	//$(".detail-page").css("display","none");
	if (Modernizr.csstransitions) {
		$(".show-left").on('click',function() {
			$(".navigation-ia__inner").removeClass("show_icon");
			$("#center_column").removeClass("center_column_left_move");
			$("#center_column").toggleClass("center_column_right_move");
			$("#right_column").toggleClass("right_move");
			$("#left_column").removeClass("left_move");
		});
		$(".show-right").on('click',function() {
			$("#center_column").toggleClass("center_column_left_move");
			$("#center_column").removeClass("center_column_right_move");
			$(".navigation-ia__inner").toggleClass("show_icon");
			$("#left_column").toggleClass("left_move");
			$("#right_column").removeClass("right_move");
		});
	}
	else {
		$('.show-left').on('click', function() {
			$this = $("#center_column");
			
			if (!$this.hasClass('closed')) {
				$this.animate({
					left: '85%'
				}, 1000);
				$this.addClass("closed");
			}
			else {
				$this.animate({
					left: '0%'
				}, 1000);
				$this.removeClass("closed");
			}
		});
	}
	$(".record-list__header").click(function () {
      		$(".account_info-details").slideToggle(250);
    });
	$('.yash').click(function(e){
		$(this).closest('li').find('.detail-page').slideToggle();
		setTimeout(function () {
    		myScroll2.refresh();
		}, 400);
      });
	  //alert($(window).width());
	  
});