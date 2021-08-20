/**
 * globalScrollListener
 */
import _throttle from 'lodash-es/throttle';

const globalScrollListener = {
  cfg: {
    documentElement: document.documentElement,
    timer: '',
    lastScrollTop: 0,
  },

  setClasses() {
    clearTimeout(this.cfg.timer);
    if (!this.cfg.documentElement.classList.contains('no-hover')) {
      this.cfg.documentElement.classList.add('no-hover');
    }
    this.cfg.timer = setTimeout(() => {
      this.cfg.documentElement.classList.remove('no-hover');
    }, 250);

    const scrollOffsetTop =
      window.pageYOffset || document.documentElement.scrollTop;
    if (scrollOffsetTop > this.cfg.lastScrollTop) {
      // downscroll code
      this.cfg.documentElement.classList.remove('is-scrollingUp');
      this.cfg.documentElement.classList.add('is-scrollingDown');

      if (scrollOffsetTop > 100) {
        this.cfg.documentElement.classList.add('is-scrollingDown--100');
      }

      if (scrollOffsetTop > 500) {
        this.cfg.documentElement.classList.add('is-scrollingDown--500');
      }
    } else {
      // upscroll code
      this.cfg.documentElement.classList.remove('is-scrollingDown');
      this.cfg.documentElement.classList.add('is-scrollingUp');

      if (scrollOffsetTop <= 100) {
        this.cfg.documentElement.classList.remove('is-scrollingDown--100');
        this.cfg.documentElement.classList.remove('is-scrollingDown--500');
      }
    }
    // For Mobile or negative scrolling
    this.cfg.lastScrollTop = scrollOffsetTop <= 0 ? 0 : scrollOffsetTop;
  },

  init() {
    const winScroll = _throttle(() => {
      this.setClasses();
    }, 250);

    window.addEventListener('scroll', winScroll);
  },
};

export default globalScrollListener;
