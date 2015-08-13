(function () {

	var mobileWidth = 720;
	var desktopWidth = 1200;
	var windowWidth = $(window).width();

	//BXSLIDER
	var slider = false;
	var bxSlider;

	$(document).ready(function () {

		var toggleSliderView = function() {
			if (windowWidth <= mobileWidth && slider === false) {
				bxSlider = $('.bxslider').bxSlider({
					mode: 'horizontal',
					auto: false,
					controls: false,
					adaptiveHeight: true,
					infiniteLoop: false
				});
				slider = true;
			} else if (windowWidth > mobileWidth && slider === true) {
				bxSlider.destroySlider();
				slider = false;
			}
		};

		toggleSliderView();

		$(window).resize(function() {
			windowWidth = $(document).width();
			toggleSliderView();
		});

		//SCROLL TO INTERNAL LINKS
		$('a[href^="#"]').click(function(e){
			e.preventDefault();
			
			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({'scrollTop': $target.offset().top}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});

		//SCROLL TO TOP OF PAGE
		$(window).scroll(function () {
			var bodyScrollTop = $('body').scrollTop();
			if (bodyScrollTop > 500 && $(window).width() >= desktopWidth) {
				$('.scroll-to-top').fadeIn('fast');
			} else {
				$('.scroll-to-top').fadeOut('fast');
			}
		});

		$('.scroll-to-top').click(function () {
			$('body').animate({ scrollTop: 0 });
		});

		//CUSTOM TOURS TOGGLE SLIDE
		$('#tours .button').click(function () {
			$('#custom-tour').slideToggle();
			$(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
		});
	});
}());