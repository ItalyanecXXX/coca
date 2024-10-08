import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const usePartnerSlider = () => {
  new Swiper('.partners__swaiper', {
    modules: [Autoplay],
    enabled: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    grabCursor: true,

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    speed: 700,

    breakpoints: {
      993: {
        enabled: false,
      },
    },
  });
};

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    on: {
      transitionStart: function () {
        const sliderNav = document.querySelector('[data-slider="insight"]');
        sliderNav.classList.toggle('insight-slide-activ');
      },
      transitionEnd: function () {
        const sliderNav = document.querySelector('[data-slider="insight"]');
        sliderNav.classList.remove('insight-slide-activ');
      },
    },

    modules: [Navigation, Pagination],

    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    allowTouchMove: true,
    grabCursor: true,

    navigation: {
      nextEl: '.insight__slider-next',
      prevEl: '.insight__slider-pred',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    speed: 700,

    breakpoints: {
      993: {
        centeredSlides: false,
        allowTouchMove: false,
        slidesPerView: 2,
        grabCursor: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__swiper', {
    modules: [Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 22,
    effect: 'fade',

    fadeEffect: {
      crossFade: true,
    },

    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};
