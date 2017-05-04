/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
})

/* =================================
===  RESPONSIVE VIDEO           ====
=================================== */

$(".video-container").fitVids();



/* =================================
===  STICKY NAV                 ====
=================================== */

$(document).ready(function() {
  $('.main-navigation').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 60 //Height of Navigation Bar
  });
  
});



/* =================================
===  DOWNLOAD BUTTON CLICK SCROLL ==
=================================== */
jQuery(function( $ ){
			$('#download-button').localScroll({
				duration:1000
			});
		});

/* =================================
===  VIDEO BACKGROUND           ====
=================================== */
if (matchMedia('(min-width: 640px)').matches) {
   
   $(document).ready(function() {
    var videobackground = new $.backgroundVideo($('body'), {
      "align": "centerXY",
      "width": 1280,
      "height": 720,
      "muted": "true",
      "path": "./assets/video/",
      "filename": "intro",
      "types": ["mp4","ogg","webm"]
    });
  });

}


/* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  $(".full-screen").css('min-height',altura); 
  
}

$(document).ready(function() {
  alturaMaxima();
  $(window).bind('resize', alturaMaxima);
});


/* =================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function () {
        window.location.hash = target;
    });
});


/* =================================
===  WOW ANIMATION             ====
=================================== */

wow = new WOW(
  {
    mobile: false
  });
wow.init();

/* =================================
===  Scroll Spy              ====
=================================== */

(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

})(jQuery);


/* =================================
===  Nivo Lightbox              ====
=================================== */
$(document).ready(function () {

    $('#screenshots a').nivoLightbox({
        effect: 'fadeScale',
    });

});


/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
$('.expand-form').simpleexpand({
    'defaultTarget': '.expanded-contact-form'
});



/* =================================
===  STELLAR                    ====
=================================== */
$(window).stellar({ 
horizontalScrolling: false 
});


/* =================================
===  IE10 ON WINDOWS 8 FIX      ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}