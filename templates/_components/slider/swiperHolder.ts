import Swiper, { A11y, FreeMode, Keyboard, Navigation, Scrollbar } from 'swiper';
import { IComponent } from '../../../src/js/@types/IComponent';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import './swiperHolder.pcss';

const swiperHolder: IComponent = {
  name: 'swiperHolder',
  init(sliders: Array<HTMLElement>) {
    sliders?.forEach((slider) => {
      const sliderConfig = JSON.parse(<string>slider.dataset.swiperConfig) || {};

      const swiper = new Swiper(slider, {
        modules: [Navigation, A11y, Scrollbar, FreeMode, Keyboard],
        ...sliderConfig,
      });
      slider.classList.add('swiper-is-ready');
      swiper.init();
    });
  },
};

export default swiperHolder;
