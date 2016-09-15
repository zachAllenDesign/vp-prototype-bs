/*jslint browser: true*/
/*global $, jQuery, alert*/

function navToggle() {
	var navH = $('nav').height(),
			headH = $('header').height(),
			startLoc = headH - navH;

	if ($(this).scrollTop() > startLoc) {
		$('#navigator').show();
	} else {
		$('#navigator').hide();
	}
}

$(function() {
	var pageH = $('window').scrollTop();
	var bullets = $('.bullet a');
	
	for(var i; i < length; i++) {
		if(pageH < bullets[i].href().position.top) {
			bullet[i].innerHTML("&#9675;");
		} else {
			bullet[i].innerHTML("&#8226;");
		}
	}
	
});

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 500);
  }
});

$('.navbar-collapse a').click(function (e) {
	$('.navbar-collapse').collapse('toggle');
});

$(function () {
	// fade in .navbar
	$(window)
		.load(function () {
			navToggle();
		})
		.scroll(function () {
			navToggle();
		})
});
