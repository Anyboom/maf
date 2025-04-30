import Swiper from 'swiper'
import {Pagination} from 'swiper/modules'

new Swiper('.banner__swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  pagination: {
    el: '.banner__paginator',
    clickable: true,
  },
  modules: [Pagination],
});

new Swiper('.works__swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 34
    }
  }
});