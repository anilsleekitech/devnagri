// Import required scripts
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const initializeSliders = () => {
  if (window.$ && typeof window.$.fn.slick === 'function') {
    // Initialize brand slider
    if ($('.brand-slider-wrapper').length && !$('.brand-slider-wrapper').hasClass('slick-initialized')) {
      $('.brand-slider-wrapper').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        buttons: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        draggable: false,
        variableWidth: true
      });
    }

    // Initialize testimonial slider
    if ($('.testimonial-slider1').length && !$('.testimonial-slider1').hasClass('slick-initialized')) {
      $('.testimonial-slider1').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 768.99,
            settings: { slidesToShow: 1 }
          }
        ]
      });
    }
  }
};

export const reinitializeSliders = () => {
  // Destroy existing sliders
  if (window.$ && typeof window.$.fn.slick === 'function') {
    if ($('.brand-slider-wrapper').hasClass('slick-initialized')) {
      $('.brand-slider-wrapper').slick('unslick');
    }
    if ($('.testimonial-slider1').hasClass('slick-initialized')) {
      $('.testimonial-slider1').slick('unslick');
    }
  }
  
  // Reinitialize after a short delay
  setTimeout(initializeSliders, 100);
}; 