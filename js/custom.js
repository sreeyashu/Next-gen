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
	$('.record-list__header').on('click',function () {
      		$(".account_info-details").slideToggle(250);
    });
	$('.yash').click(function(){
		$(this).closest('li').find('.detail-page').slideToggle();
		setTimeout(function () {
			defaultScroll.refresh();
			//myScroll4.refresh();
		}, 500);
      });
	  
		  
  //alert($(window).width());
  
  var leftScroll, defaultScroll, rightScroll, myScroll4, myScroll5;
		
		
		function loaded() {
			var height =$(window).height(),
				width = $(window).width(),
				previousHeight =height,
				PreviousWidth =width;
			leftScroll = new iScroll('left_column', {draggableScrollbars:true});
			rightScroll = new iScroll('right_column', {draggableScrollbars:true});
			//newScroll = new iScroll('record-list__content', {draggableScrollbars:true});
			//this.previousHeight =$(window).height();
			/**
				height <= 320 scroller should be for the movements IA + Navigation Bar
				width >=320 and < 768 scroller should be for the Movements IA
				else scrolling should be only for the Movement list inside the MOvementIA.
			*/
			
			if(height <= 320){
				$('.subscrolling').css("height","auto");
				defaultScroll = new iScroll('small-scroller', {draggableScrollbars:true});
			}
			else if (width >=320 && width < 768)
			{
				alert(2);
				defaultScroll = new iScroll('movements-ia', {draggableScrollbars:true});
			}
			else
			{
				$('.record-list').css("height","100%");
				defaultScroll = new iScroll('record-list__content', {draggableScrollbars:true});
			}
			console.log("height =" + $(window).height());
				$(window).resize(function(){
					height = $(window).height();
					width = $(window).height();
					//console.log("height =" + h);
					if(height <= 320 && previousHeight > 320){
						//console.log("if");
						previousHeight = height;
						defaultScroll.destroy();
						$('.subscrolling').css("height","auto");
						defaultScroll = new iScroll('small-scroller', {draggableScrollbars:true});
						
					}
					else if (height >320 && previousHeight <= 320 && width >=320 && width < 768 && previousWidth >= 768 && previousWidth < 320){
						//console.log("else");
						previousWidth = width;
						previousHeight = height;
						$('.subscrolling').css("height","100%");
						defaultScroll.destroy();
						defaultScroll = new iScroll('movements-ia', {draggableScrollbars:true});
						
					}
					else if (height >320 && previousHeight <= 320 && width >=768 && previousWidth <= 768){
						//console.log("else");
						previousWidth = width;
						previousHeight = height;
						$('.record-list').css("height","100%");
						defaultScroll.destroy();
						defaultScroll = new iScroll('record-list__content', {draggableScrollbars:true});
						
					}
					});
				

		}
		setTimeout(loaded, 200);
	  
});