import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const useJobsTopSlider = () => {
  new Swiper('.hero__slider-jobs', {
    on: {
      transitionStart: function () {
        const sliderNav = document.querySelector('[data-slider="jobs-top"]');
        sliderNav.classList.toggle('hero-top-slide-activ');
      },
      transitionEnd: function () {
        const sliderNav = document.querySelector('[data-slider="jobs-top"]');
        sliderNav.classList.remove('hero-top-slide-activ');
      },
    },

    modules: [Navigation, Pagination],

    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    allowTouchMove: true,
    grabCursor: true,

    navigation: {
      nextEl: '.hero__slider-jobs-next',
      prevEl: '.hero__slider-jobs-pred',
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
      577: {
        slidesPerView: 1.5,
      },
      993: {
        centeredSlides: false,
        allowTouchMove: false,
        slidesPerView: 2.5,
        grabCursor: false,
      },
    },
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articles__swiper', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,

    fadeEffect: {
      crossFade: true,
    },

    navigation: {
      nextEl: '.articles__btn--next',
      prevEl: '.articles__btn--prev',
    },

    breakpoints: {
      769: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
      },
    },
  });
};
