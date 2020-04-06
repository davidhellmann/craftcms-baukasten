/**
 * globalResizeListener
 */
import _throttle from 'lodash/throttle';

const globalResizeListener = {
  cfg: {
    body: document.body,
    timer: null,
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
    const vw = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0,
    );
    const vh = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );
    const sh = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight || 0,
    );

    localStorage.setItem('vw', vw);
    localStorage.setItem('vh', vh);
    localStorage.setItem('sh', sh);
  },

  init() {
    const winResize = _throttle(() => {
      this.saveViewPortWidthsToLocalStorage();
      this.isResizing();

      clearTimeout(this.cfg.timer);
      this.cfg.timer = setTimeout(() => {
        this.isDoneResizing();
      }, 250);
    }, 250);

    this.saveViewPortWidthsToLocalStorage();
    window.addEventListener('resize', winResize);
  },
};

export default globalResizeListener;
