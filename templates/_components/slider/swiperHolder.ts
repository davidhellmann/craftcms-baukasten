import Swiper, { A11y, FreeMode, Keyboard, Navigation, Scrollbar } from 'swiper';
import { IComponent } from '../../../src/js/@types/IComponent';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import './swiperHolder.css';
import './swiperOverflow.css';

const swiperHolder: IComponent = {
  name: 'swiperHolder',
  init(sliders: NodeListOf<HTMLElement>) {
    if (sliders) {
      sliders.forEach((slider) => {
        const sliderConfig = JSON.parse(<string>slider.dataset.swiperConfig) || {};
        const destroyBreakpoint = slider.dataset.swiperDestroyBreakpoint || '';

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        let swiper = undefined;

        const initSwiper = () => {
          swiper = new Swiper(slider, {
            modules: [Navigation, A11y, Scrollbar, FreeMode, Keyboard],
            ...sliderConfig,
          });

          slider.classList.remove('swiper-is-destroyed');
          slider.classList.add('swiper-is-ready');
          swiper.init();
        };

        const checkDestroy = () => {
          const breakpoint = window.matchMedia(`(${destroyBreakpoint})`);
          if (breakpoint.matches) {
            slider.classList.add('swiper-is-destroyed');
            slider.classList.remove('swiper-is-ready');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (swiper) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              swiper.destroy(true, true);
            }
          } else {
            initSwiper();
          }
        };

        if (destroyBreakpoint.length > 0) {
          checkDestroy();
          window.addEventListener('resize', () => {
            checkDestroy();
          });
        } else {
          initSwiper();
        }
      });
    }
  },
};

export default swiperHolder;
