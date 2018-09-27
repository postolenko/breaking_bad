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

    $('.big_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        asNavFor: '.miniature_slider'
    });

    $('.miniature_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.big_slider',        
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true
    });

});

