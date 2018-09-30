var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var thumbIndex;

$(window).load(function() {

	// getTHumbsHeight();

});

$(window).resize(function() {

	// getAdaptivePositionElements();
    getFixedHeader();
    showScrollTopBtn();

    // $(".set_height .inner_desc").css({
    // 	"height" : "auto"
    // });

	// getTHumbsHeight();

});

$(document).scroll(function() {

	showScrollTopBtn();

});

$(document).ready(function() {

	getFixedHeader();
	showScrollTopBtn();
	// getAdaptivePositionElements();

	$(".thumbnails_3_oddeven .thumb_3").each(function() {

		thumbIndex = $(this).index();

		if( thumbIndex % 2 == 0 ) {

			$(this).addClass("odd");

		}

	});

	var oddIndex = 0;

	$(".thumbnails_3_oddeven .odd").each(function() {

		oddIndex++;

		thumbIndex = $(this).index();

		if( oddIndex % 2 == 0 ) {

			$(this).addClass("odd-even");

		}

	});

	// -----------------

	var dropdownContent;

	$(".dropdown-box").each(function(e) {

		dropdownContent = $(this).find(".dropdown_content");

		if( $(this).hasClass("hide") ) {

			dropdownContent.css({
				"display" : "none"
			});

		}

	});

	$(".dropdown-btn").click(function(e) {

		e.preventDefault();

		var parentBlock = $(this).closest(".dropdown-box");

		dropdownContent = parentBlock.find(".dropdown_content");

		if( dropdownContent.is(":hidden") ) {

			dropdownContent.slideDown(300);
			parentBlock.removeClass("hide");

		} else {

			dropdownContent.slideUp(300);

			setTimeout(function() {

				parentBlock.addClass("hide");

			}, 300);			

		}

	});

	// ---------------------

    $(".respmenubtn").click(function() {

        if( $(".header-nav").is(":hidden") ) {

            $(".header-nav").fadeIn(300);

            $(this).addClass("active");

        } else {

            $(".header-nav").fadeOut(300);

            $(this).removeClass("active");

        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27 &&
            $(".header-nav").is(":visible") ) {

                $(".header-nav").fadeOut(300);

                $(".respmenubtn").removeClass("active");

        }

    });

	// ---------------------

	$(".scroll-top").click(function(e) {

        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 700);

    });

});

function getFixedHeader() {

	$(".header-site").addClass("fixed");

	$(".wrapper").css({
		"padding-top" : $(".header-site").height() + "px"
	});

}

function showScrollTopBtn() {

    if( $(".header-site").offset().top > $(".header-site").height() ) {

        $(".scroll-top").fadeIn(300);

    } else {

        $(".scroll-top").fadeOut(300);

    }

}

// function getTHumbsHeight() {

//     $(".set_height").each(function() {

//         thumbsHeightArr = [];

//         thumb = $(this).find(".thumb");

//         thumb.each(function() {

//             thumbHeight = $(this).find(".inner_desc").height();

//             thumbsHeightArr.push(thumbHeight);

//         });

//         maxThumbHeight = Math.max.apply(null, thumbsHeightArr);

//         thumb.find(".inner_desc").height(maxThumbHeight);

//     });

// }

// function getAdaptivePositionElements() {

//     $(".append-elem").each(function() {

//         screenParam = parseInt( $(this).attr("data-min-screen") );

//         indexElem = $(this).attr("data-append-desktop-elem");

//         if( bodyWidth <= screenParam ) {

//             $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

//         }

//          if( bodyWidth > screenParam ) {

//             $("[data-append-desktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

//         }

//     });

// }