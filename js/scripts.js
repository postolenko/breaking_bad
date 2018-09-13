var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var thumbIndex;

$(window).load(function() {


});

$(window).resize(function() {
    

});

$(document).ready(function() {

	$(".thumbnails_3 .thumb_3").each(function() {

		thumbIndex = $(this).index();

		if( thumbIndex % 2 == 0 ) {

			$(this).addClass("odd");

		}

	});

	var oddIndex = 0;

	$(".thumbnails_3 .odd").each(function() {

		oddIndex++;

		thumbIndex = $(this).index();

		if( oddIndex % 2 == 0 ) {

			$(this).addClass("odd-even");

		}

		console.log(thumbIndex);

	});

});