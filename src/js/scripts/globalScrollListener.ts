/**
 * globalScrollListener
 */
import _throttle from 'lodash-es/throttle';
import { IComponent } from '../@types/IComponent';

interface ICompGlobalScrollListener extends IComponent {
  documentElement: HTMLElement;
  timer: null | ReturnType<typeof setTimeout>;
  lastScrollTop: number;
  setClasses(): void;
  init(): void;
}

const globalScrollListener: ICompGlobalScrollListener = {
  name: 'globalScrollListener',
  documentElement: document.documentElement,
  timer: null,
  lastScrollTop: 0,

  setClasses() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (!this.documentElement.classList.contains('no-hover')) {
      this.documentElement.classList.add('no-hover');
    }
    this.timer = setTimeout(() => {
      this.documentElement.classList.remove('no-hover');
    }, 250);

    const scrollOffsetTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollOffsetTop > this.lastScrollTop) {
      // downscroll code
      this.documentElement.classList.remove('is-scrollingUp');
      this.documentElement.classList.add('is-scrollingDown');

      if (scrollOffsetTop > 100) {
        this.documentElement.classList.add('is-scrollingDown--100');
      }

      if (scrollOffsetTop > 500) {
        this.documentElement.classList.add('is-scrollingDown--500');
      }
    } else {
      // upscroll code
      this.documentElement.classList.remove('is-scrollingDown');
      this.documentElement.classList.add('is-scrollingUp');

      if (scrollOffsetTop <= 100) {
        this.documentElement.classList.remove('is-scrollingDown--100');
        this.documentElement.classList.remove('is-scrollingDown--500');
      }
    }
    // For Mobile or negative scrolling
    this.lastScrollTop = scrollOffsetTop <= 0 ? 0 : scrollOffsetTop;
  },

  init() {
    const winScroll = _throttle(() => {
      this.setClasses();
    }, 250);

    window.addEventListener('scroll', winScroll);
  },
};

export default globalScrollListener;
