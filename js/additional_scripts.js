$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {

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
                items:2
            },
            890:{
                items:3
            },
            1230:{
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

    $('.promo_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        appendArrows: $(".promo_slider_arrows .row")
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

