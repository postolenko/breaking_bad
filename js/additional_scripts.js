$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {		

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity,
			width: '100%'
		});

	});

	$('.owl-carousel.slider-1').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        nav: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4

            },
            992:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });

    $('.owl-carousel.slider-2').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        nav: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4

            },
            992:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });

});

