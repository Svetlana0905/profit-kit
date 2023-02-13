import { isWebp, activeLink } from './modules'
import { nextBtnSwiper, prevBtnSwiper, promoNav } from './helpers/elementsNodeList'
import AOS from 'aos'
import Swiper, { Navigation, Pagination, Mousewheel, Keyboard, EffectFlip } from 'swiper';

window['FLS'] = true

const swiper = new Swiper('.swiper', {
   modules: [Navigation, Mousewheel, Keyboard],
   navigation: {
      nextEl: nextBtnSwiper,
      prevEl: prevBtnSwiper
   },
   // Управление клавиатурой
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   // Управление колесом мыши
   mousewheel: {
      sensitivity: 1,
      eventsTarget: ".swiper"
   },
   grabCursor: false,
   slidesPerView: 1,
   breakpoints: {

      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      700: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      1068: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      1440: {
         slidesPerView: 4,
         spaceBetween: 20
      }
   },
   spaceBetween: 20,
   speed: 500,
})

let myImageSlider1 = new Swiper('.image-slider1', {
   modules: [Pagination, EffectFlip],
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   nested: true,
   effect: 'flip',
   loop: true,
   grabCursor: true,
   speed: 500,

})
let myImageSlider2 = new Swiper('.image-slider2', {
   modules: [Pagination, EffectFlip],
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   nested: true,
   effect: 'flip',
   loop: true,
   grabCursor: true,
   speed: 500,
})
let myImageSlider3 = new Swiper('.image-slider3', {
   modules: [Pagination, EffectFlip],
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   nested: true,
   effect: 'flip',
   loop: true,
   grabCursor: true,
   speed: 500,
})
let myImageSlider4 = new Swiper('.image-slider4', {
   modules: [Pagination, EffectFlip],
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   nested: true,
   effect: 'flip',
   loop: true,
   grabCursor: true,
   speed: 500,
})

isWebp()
activeLink()
AOS.init();
