// <!-- MENU ANIMATION -->
let matchMedia = gsap.matchMedia();
matchMedia.add("(min-width: 992px)", () => {
  document.querySelectorAll('[data-gsap-trigger="menu-animation"]').forEach(trigger => {
    const btnAnimation = {
      opacity: 0,
      pointerEvents: 'none',
      duration: 0.5
    };
    
    const tl = gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: trigger,
        start: "top -10%",
        end: "+=500",
        scrub: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: false
      }
    });

    tl
    .to(".nav_menu_ul", {
      x: '35.5vw',
      ease: "power3.out",
      duration: 1
    })
    .to('[data-gsap-target="nav-btn-1"]', {
      ...btnAnimation
    }, 0)
    .to('[data-gsap-target="nav-btn-2"]', {
      ...btnAnimation
    }, 0.5);
  });
})


// <!-- NEXT PARTICLE  -->

function onReady(fn) {
  if (document.readyState !== 'loading') { fn(); }
  else { document.addEventListener('DOMContentLoaded', fn); }
}

onReady(function() {
  const container = document.getElementById('particle-container');
  const image = document.getElementById('particle-img');

  const np = new NextParticle({
    image: image,
    width: container.clientWidth,
    height: container.clientHeight,
    particleGap: 2,
    noise: 10,
    gravity: 0.08,
    mouseForce: 60
    // renderer: "webgl",
    // particleSize: 2
  });

  function resizeParticles() {
    np.width = container.clientWidth;
    np.height = container.clientHeight;
    np.start();
  }
  
  let lastWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWidth) {
      lastWidth = window.innerWidth;
      resizeParticles();
    }
  });
});


// SWIPERS
const swiperHowWeHelp = new Swiper('[swiper="howWeHelp"] .swiper', {
  speed: 700,
  slidesPerView: 'auto',
  breakpoints: {
    // when width is >=
    320: {
      spaceBetween: '4.66%',
      slidesPerGroup: 1,
      centeredSlides: false,
      loop: false,
      loopedSlides: 0
    },
    768: {
      enabled: false
    }
  },
  pagination: {
    el: '.howwehelp-pagination',
    clickable: true,
    bulletClass: 'howwehelp-bullet', 
    bulletActiveClass: 'active'
  },
  navigation: {
    nextEl: '[swiper="howWeHelp"] .swiper-button.next',
    prevEl: '[swiper="howWeHelp"] .swiper-button.prev'
  }
})

// const swiperNews = new Swiper('[swiper="news"] .swiper', {
//   speed: 700,
//   slidesPerView: 'auto',
//   spaceBetween: 0,
//   grabCursor: true,
//   pagination: {
//     el: '.news-pagination',
//     clickable: true,
//     bulletClass: 'news-bullet', 
//     bulletActiveClass: 'active'
//   },
//   navigation: {
//     nextEl: '[swiper="news"] .swiper-button.next',
//     prevEl: '[swiper="news"] .swiper-button.prev'
//   },
// })

// let resizeTimeout;

// window.addEventListener('resize', () => {
//   clearTimeout(resizeTimeout);

//   resizeTimeout = setTimeout(() => {
//     swiper.update();
//   }, 150);
// });
