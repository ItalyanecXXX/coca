import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const useAboutTopSlider = () => {
  new Swiper('.hero__slider-top', {
    on: {
      transitionStart: function () {
        const sliderNav = document.querySelector('[data-slider="about-top"]');
        sliderNav.classList.toggle('hero-top-slide-activ');
      },
      transitionEnd: function () {
        const sliderNav = document.querySelector('[data-slider="about-top"]');
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
      nextEl: '.hero__slider-top-next',
      prevEl: '.hero__slider-top-pred',
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

export const useAboutBottomSlider = () => {
  new Swiper('.managers__slider', {
    on: {
      transitionStart: function () {
        const sliderNav = document.querySelector('[data-slider="about-manag"]');
        sliderNav.classList.toggle('managers-slide-activ');
      },
      transitionEnd: function () {
        const sliderNav = document.querySelector('[data-slider="about-manag"]');
        sliderNav.classList.remove('managers-slide-activ');
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
      nextEl: '.managers__slider-next',
      prevEl: '.managers__slider-pred',
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
        slidesPerView: 3,
        grabCursor: false,
      },
    },
  });
};
