import { isWebp, activeLink } from './modules'
import { nextBtnSwiper, prevBtnSwiper, promoNav } from './helpers/elementsNodeList'
import AOS from 'aos'
import Swiper, { Navigation, Pagination } from 'swiper';

window['FLS'] = true

const swiper = new Swiper('.swiper', {
   modules: [Navigation],
   navigation: {
      nextEl: nextBtnSwiper,
      prevEl: prevBtnSwiper
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
   modules: [Pagination],
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   nested: true,
   effect: "flip",
   grabCursor: true,
})
let myImageSlider2 = new Swiper('.image-slider2', {
   modules: [Pagination],
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   nested: true,
   effect: "flip",
   grabCursor: true,
})
let myImageSlider3 = new Swiper('.image-slider3', {
   modules: [Pagination],
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   nested: true,
   effect: "flip",
   grabCursor: true,
})
let myImageSlider4 = new Swiper('.image-slider4', {
   modules: [Pagination],
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
   },
   nested: true,
   effect: "flip",
   grabCursor: true,
})

isWebp()
activeLink()
AOS.init();
