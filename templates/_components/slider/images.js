/**
 * Image Slider
 */

import Swiper from 'swiper/js/swiper';

const imageGallery = {
  cfg: {
    slider: '.js-sliderImages',
    sliderOptions: {
      init: false,
      grabCursor: true,
      slidesPerView: 'auto',

      // Buttons
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets', // 'bullets', fraction', 'progressbar'
        clickable: true,
      },
    },
  },

  initSliders(sliders) {
    sliders.forEach(slider => {
      const swiperSlider = new Swiper(slider, this.cfg.sliderOptions);
      swiperSlider.init();
    });
  },

  init() {
    const sliders = [...document.querySelectorAll(this.cfg.slider)];
    if (!sliders) return;
    this.initSliders(sliders);
  },
};

export default imageGallery;
