import Swiper from 'swiper';
import {Pagination, Autoplay, Thumbs, Navigation} from 'swiper/modules';
import Alpine from 'alpinejs';

window["Alpine"] = Alpine;

Alpine.start();

// Инициализация слайдера с миниатюрами
const thumbsSwiper = new Swiper('.catalog-card__swiper-thumb', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".catalog-card__swiper-thumb-next",
    prevEl: ".catalog-card__swiper-thumb-prev",
  },
  modules: [Navigation]
});

new Swiper('.catalog-card__swiper', {
  modules: [Thumbs], // Подключаем модуль Thumbs
  spaceBetween: 10,
  thumbs: {
    swiper: thumbsSwiper, // Связываем с миниатюрами
  },
});

new Swiper('.banner__swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.banner__paginator',
    clickable: true,
  },
  modules: [Pagination, Autoplay],
});

new Swiper('.works__swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 34
    },
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    }
  },
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
  modules: [Autoplay],
});

