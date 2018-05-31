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

// const sections = Array.from(document.querySelectorAll("section"));
// const scrollActions = () => {

//   const rects = sections.map(section => section.getBoundingClientRect());
//   for (let i = 0; i < sections.length; i++) {
//     const section = sections[i];
//     const rect = rects[i];
//     // console.log(section.classList)
//     if (rect.top < window.innerHeight - SECTION_MARGIN && rect.bottom > 0) {
//       section.classList.add("active");
//     } else {
//       section.classList.remove("active");
//     }
//   }

//   ticking = false;
// };

// window.addEventListener("scroll", () => {
//   if (!ticking) {
//     window.requestAnimationFrame(scrollActions);
//     ticking = true;
//   }
// });
// scrollActions();