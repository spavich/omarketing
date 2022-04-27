$(function(){
	// Webcomplex (Плавный скролл)
	$("#menu a, .footer__angle-up, .header__mouse").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	// Slick (Слайдер)
	$('.slider-blog__inner').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
				}
			}
		]
	})
	// burger
	$('.menu__btn, .menu a').on('click', function(){
		$('.header__top-inner').toggleClass('header__top-inner--active');
	});

	// Fancybox
	var mixer = mixitup('.portfolio__content');

});