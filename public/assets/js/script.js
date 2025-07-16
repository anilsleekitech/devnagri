// header js
document.addEventListener("DOMContentLoaded", function () {
  const dropdownItems = document.querySelectorAll(".nav-item.dropdown");

  dropdownItems.forEach(item => {
    const link = item.querySelector(".nav-link");

    // Desktop hover: adjust alignment if needed
    // link.addEventListener("mouseenter", function () {
    //   if (window.innerWidth >= 992) {
    //     const submenu = item.querySelector(".dropdown-menu");
    //     if (!submenu) return;

    //     submenu.classList.remove("dropdown-menu-left");
    //     const rect = submenu.getBoundingClientRect();
    //     if (rect.right > window.innerWidth) {
    //       submenu.classList.add("dropdown-menu-left");
    //     }
    //   }
    // });

    // Mobile click toggle
    link.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        item.classList.toggle("active");

        // Close others
        dropdownItems.forEach(other => {
          if (other !== item) {
            other.classList.remove("active");
          }
        });
      }
    });
  });
  const links = document.querySelectorAll('.services_title_main .nav li button');

    links.forEach((link, index) => {

      const number = (index + 1).toString().padStart(2, '0');

      link.classList.add('numbered');

      link.setAttribute('data-number', number);

    });
    document.querySelectorAll('.services_title_main .nav-pills .nav-link').forEach(function(navLink) {

    navLink.addEventListener('mouseover', function() {

      navLink.classList.add('hovered');

    });

    

    navLink.addEventListener('mouseout', function() {

      navLink.classList.remove('hovered');

    });

  });
});



  // Counter Animation
  // Counter Animation with Suffix
function formatShortNumber(number) {
  if (number >= 1_000_000_000) return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + "B";
  if (number >= 1_000_000) return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + "M";
  return number.toLocaleString();
}

function animateCounter(counter) {
  const target = parseInt(counter.getAttribute("data-target"));
  const format = counter.getAttribute("data-format"); // "short" or undefined
  const suffix = counter.getAttribute("data-suffix") || ""; // e.g. "+"
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(progress * target);

    if (format === "short" && target >= 1_000_000) {
      counter.textContent = formatShortNumber(current) + suffix;
    } else {
      counter.textContent = current.toLocaleString() + suffix;
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      if (format === "short" && target >= 1_000_000) {
        counter.textContent = formatShortNumber(target) + suffix;
      } else {
        counter.textContent = target.toLocaleString() + suffix;
      }
    }
  }

  requestAnimationFrame(update);
}


  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));

  //footer counter
  
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".custom-counter");
    const counterSection = document.querySelector(".custom-stats-row");
    
    // Only proceed if we have both counters and the section
    if (counters.length && counterSection) {
        let hasCounted = false;

        function animateCounter(counter) {
            const target = parseFloat(counter.getAttribute("data-target"));
            const isDecimal = counter.getAttribute("data-decimal") === "true";
            const suffix = counter.getAttribute("data-suffix") || '';
            const duration = 2000;
            const frameRate = 60;
            const totalFrames = Math.round((duration / 1000) * frameRate);
            let frame = 0;

            const count = () => {
                frame++;
                let progress = frame / totalFrames;
                let current = target * progress;

                if (isDecimal) {
                    counter.innerText = current.toFixed(1) + suffix;
                } else {
                    counter.innerText = Math.floor(current) + suffix;
                }

                if (frame < totalFrames) {
                    requestAnimationFrame(count);
                } else {
                    counter.innerText = isDecimal ? target.toFixed(1) + suffix : target + suffix;
                }
            };

            requestAnimationFrame(count);
        }

        function onScroll() {
            if (counterSection) {
                const rect = counterSection.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

                if (isVisible && !hasCounted) {
                    counters.forEach(counter => animateCounter(counter));
                    hasCounted = true;
                    window.removeEventListener("scroll", onScroll);
                }
            }
        }

        window.addEventListener("scroll", onScroll);
        // Initial check
        onScroll();
    }
});

  //testimonial slider
  $(document).ready(function(){
          $('.brand-slider-wrapper').slick({
          speed: 5000,             // High speed for continuous effect
          autoplay: true,
          autoplaySpeed: 0,        // No delay between scrolls
          cssEase: 'linear',       // Linear animation for smooth scrolling
          slidesToShow: 3,         // Adjust to how many slides visible at once
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          buttons: false,
          pauseOnHover: false,
          pauseOnFocus: false,   // 🚀 This stops the pause-on-click/focus
          swipe: false,
          draggable: false,
          variableWidth: true      // Enables continuous scroll of varied widths
        });

        $('.testimonial-slider1').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
      $('.resources-blogs-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
      $('.team-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1399.99,
            settings: { slidesToShow: 3 }
          },
          {
            breakpoint: 1080,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 768.99,
            settings: { slidesToShow: 1 }
          }
        ]
      });
    });

      //campaignslider
      var campaignSwiper = new Swiper('.campaignSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      // Swiper Slider for .how-wehelp-section
      const howWeHelpSwiper = new Swiper('#howwe-help-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        grabCursor: true,
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        },
        breakpoints: {
          0: { slidesPerView: 1.2 },
          576: { slidesPerView: 2.2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
          1281: { slidesPerView: 4 }
        },
        on: {
          init: function () {
            updateNavigationState(this);
          },
          slideChange: function () {
            updateNavigationState(this);
          }
        }
      });

      function updateNavigationState(swiper) {
        const prevButton = document.querySelector('.slider-button-prev');
        const nextButton = document.querySelector('.slider-button-next');

        if (prevButton) {
          prevButton.disabled = swiper.isBeginning;
        }
        if (nextButton) {
          nextButton.disabled = swiper.isEnd;
        }
      }



// Mobile Menu Dropdown Handling
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth < 992) {
    // Handle main dropdown toggles
    const dropdownToggles = document.querySelectorAll('.nav-item .dropdown-toggle');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other main dropdowns
        const parent = this.closest('.nav-item');
        const siblings = parent.parentElement.querySelectorAll('.nav-item');
        siblings.forEach(sibling => {
          if (sibling !== parent) {
            const dropdownMenu = sibling.querySelector('.dropdown-menu');
            const dropdownToggle = sibling.querySelector('.dropdown-toggle');
            if (dropdownMenu) dropdownMenu.classList.remove('show');
            if (dropdownToggle) dropdownToggle.classList.remove('show');
          }
        });
        
        // Toggle current dropdown
        const dropdownMenu = this.nextElementSibling;
        if (dropdownMenu) {
          dropdownMenu.classList.toggle('show');
          this.classList.toggle('show');
        }
      });
    });

    // Handle submenu toggles
    const submenuToggles = document.querySelectorAll('.dropdown-submenu .dropdown-item');
    submenuToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close sibling submenus
        const parent = this.closest('.dropdown-submenu');
        const siblings = parent.parentElement.querySelectorAll('.dropdown-submenu');
        siblings.forEach(sibling => {
          if (sibling !== parent) {
            const submenu = sibling.querySelector('.dropdown-menu');
            if (submenu) submenu.classList.remove('show');
          }
        });
        
        // Toggle current submenu
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('dropdown-menu')) {
          submenu.classList.toggle('show');
          this.classList.toggle('show');
        }
      });
    });
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  if (window.innerWidth < 992) {
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const isClickInside = mobileMenu?.contains(e.target);
    const isHamburger = e.target.closest('.navbar-toggler');
    
    if (!isClickInside && !isHamburger && mobileMenu?.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(mobileMenu);
      bsCollapse.hide();
      
      // Close all dropdowns when closing mobile menu
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
      });
      document.querySelectorAll('.dropdown-toggle.show').forEach(toggle => {
        toggle.classList.remove('show');
      });
    }
  }
});

// Responsive Handling
document.addEventListener('DOMContentLoaded', function() {
  // Handle responsive behavior
  function handleResponsive() {
    const isMobile = window.innerWidth < 768;
    
    // Handle Devnagri Offer section
    const offerTabs = document.querySelector('#offerTabs');
    const offerAccordion = document.querySelector('#offerAccordion');
    if (offerTabs && offerAccordion) {
      offerTabs.style.display = isMobile ? 'none' : 'flex';
      offerAccordion.style.display = isMobile ? 'block' : 'none';
    }
    
    // Handle Case Study section
    const caseStudyCarousel = document.querySelector('#carouselExampleAutoplaying');
    const caseStudyAccordion = document.querySelector('#caseStudyAccordion');
    if (caseStudyCarousel && caseStudyAccordion) {
      caseStudyCarousel.style.display = isMobile ? 'none' : 'block';
      caseStudyAccordion.style.display = isMobile ? 'block' : 'none';
    }
  }

  // Initial check
  handleResponsive();

  // Listen for window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResponsive, 250);
  });

  // Handle accordion image loading
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const accordionBody = this.closest('.accordion-item').querySelector('.accordion-body');
      if (accordionBody) {
        const images = accordionBody.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
          img.setAttribute('loading', 'eager');
        });
      }
    });
  });
});

