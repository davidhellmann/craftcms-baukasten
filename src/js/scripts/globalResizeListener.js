/**
 * globalResizeListener
 */
import _throttle from 'lodash/throttle';

const globalResizeListener = {
  cfg: {
    body: document.body,
    timer: null
  },

  isDoneResizing() {
    this.cfg.body.classList.remove('is-resizing');
    this.cfg.body.classList.add('is-resized');
  },

  isResizing() {
    this.cfg.body.classList.add('is-resizing');
    this.cfg.body.classList.remove('is-resized');
  },

  saveViewPortWidthsToLocalStorage() {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    localStorage.setItem('vw', vw);
    localStorage.setItem('vh', vh);
  },

  init() {
    const winResize = _throttle(() => {
      this.saveViewPortWidthsToLocalStorage();
      this.isResizing();

      clearTimeout(this.cfg.timer);
      this.cfg.timer = setTimeout(() => {
        this.isDoneResizing();
      }, 250);
    }, 500);

    window.addEventListener('resize', winResize);
  }
};

export default globalResizeListener;
