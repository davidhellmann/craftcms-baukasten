/**
 * Swiper Holder
 */

import Swiper, {
  Navigation,
  Scrollbar,
  A11y,
  FreeMode,
  Keyboard,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import './swiperHolder.pcss';

const swiperHolder = {
  cfg: {
    slider: '[data-component-js="js-sliderHolder"]',
  },

  initSliders(sliders) {
    sliders.forEach(slider => {
      const sliderConfig = JSON.parse(slider.dataset.swiperConfig) || {};

      const swiper = new Swiper(slider, {
        modules: [Navigation, A11y, Scrollbar, FreeMode, Keyboard],
        ...sliderConfig,
      });
      slider.classList.add('swiper-is-ready');
      swiper.init();
    });
  },

  init() {
    const sliders = [...document.querySelectorAll(this.cfg.slider)];
    if (!sliders) return;
    this.initSliders(sliders);
  },
};

export default swiperHolder;
