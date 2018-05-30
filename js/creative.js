(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: false,
      // navigateByImgClick: true,
      // preload: [0, 1]
    },
    image: {
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a href="'+item.el.attr('projurl')+'" target="_blank"> click here </a>';
			},
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    },
    // iframe: {
    //   markup: '<div class="mfp-iframe-scaler">'+
    //             '<div class="mfp-close"></div>'+
    //             '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
    //           '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
    
    //   patterns: {
    //     youtube: {
    //       index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
    //       src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
    //     },
    //     vimeo: {
    //       index: 'vimeo.com/',
    //       id: '/',
    //       src: '//player.vimeo.com/video/%id%?autoplay=1'
    //     },
    //     gmaps: {
    //       index: '//maps.google.',
    //       src: '%id%&output=embed'
    //     }
    
    //     // you may add here more sources
    
    //   },
    
    //   srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    // }
  });

  $('.video').magnificPopup({
    type: 'iframe',
    
    
    iframe: {
       markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '<div class="mfp-title">Some caption</div>'+
                '</div>'
    },
    callbacks: {
      markupParse: function(template, values, item) {
       values.title = item.el.attr('title');
      }
    }
    
    
  });

})(jQuery); // End of use strict
