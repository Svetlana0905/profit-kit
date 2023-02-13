const html = document.documentElement
const body = document.body
const swiperWrapper = document.querySelector('.swiper-wrapper')
const nextBtnSwiper = document.querySelector('.btn-block__button-next')
const prevBtnSwiper = document.querySelector('.btn-block__button-prev')
const pagination = document.querySelector('.swiper-pagination')
const imgSliderWrapper = document.querySelector('.image-slider__wrapper')
const list = document.querySelectorAll('.card-link, .promo-nav__link')

export {
  html,
  body,
  nextBtnSwiper,
  prevBtnSwiper,
  swiperWrapper,
  pagination,
  imgSliderWrapper,
  list
}