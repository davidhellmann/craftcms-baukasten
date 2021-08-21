// /**
//  * Image Slider
//  */
//
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
//
// const imageGallery = {
//   cfg: {
//     slider: '.js-sliderImages',
//     sliderOptions: {
//       init: false,
//       grabCursor: false,
//       slidesPerView: 'auto',
//       simulateTouch: false,
//       watchSlidesProgress: true,
//       watchSlidesVisibility: true,
//
//       // Buttons
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//
//       // Pagination
//       pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets', // 'bullets', fraction', 'progressbar'
//         clickable: true,
//       },
//     },
//   },
//
//   initSliders(sliders) {
//     sliders.forEach(slider => {
//       const swiperSlider = new Swiper(slider, this.cfg.sliderOptions);
//       swiperSlider.init();
//       console.log(swiperSlider.support.touch);
//     });
//   },
//
//   init() {
//     const sliders = [...document.querySelectorAll(this.cfg.slider)];
//     if (!sliders) return;
//     this.initSliders(sliders);
//   },
// };
//
// export default imageGallery;
