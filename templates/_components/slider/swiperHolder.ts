import Swiper, {
  A11y,
  FreeMode,
  Keyboard,
  Navigation,
  Scrollbar,
  Pagination,
  Autoplay,
  EffectFade,
} from 'swiper';
import { IComponent } from '../../../src/js/@types/IComponent';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './swiperHolder.css';
import './swiperOverflow.css';
import './swiperHeroImages.css';

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
          // @ts-ignore
          swiper = new Swiper(slider, {
            modules: [
              Navigation,
              A11y,
              Scrollbar,
              FreeMode,
              Keyboard,
              Pagination,
              Autoplay,
              EffectFade,
            ],
            ...sliderConfig,
            on: {
              beforeInit() {
                slider.classList.remove('swiper-is-destroyed');
                slider.classList.add('swiper-is-ready');
              },
              afterInit() {
                if (sliderConfig?.autoplay) {
                  setTimeout(() => {
                    slider.classList.add('swiper-has-started');
                  });
                }
              },
              slideChangeTransitionStart() {
                if (sliderConfig?.autoplay) {
                  slider.classList.remove('swiper-has-started');
                }
              },
              slideChangeTransitionEnd() {
                if (sliderConfig?.autoplay) {
                  slider.classList.add('swiper-has-started');
                }
              },
            },
          });

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
