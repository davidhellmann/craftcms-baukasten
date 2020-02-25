/**
 * globalScrollListener
 */

const globalScrollListener = {
  cfg: {
    body: document.body,
    timer: '',
    lastScrollTop: 0
  },

  setClasses() {
    clearTimeout(this.cfg.timer);
    if (!this.cfg.body.classList.contains('no-hover')) {
      this.cfg.body.classList.add('no-hover');
    }
    this.cfg.timer = setTimeout(() => {
      this.cfg.body.classList.remove('no-hover');
    }, 250);


    const scrollOffsetTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollOffsetTop > this.cfg.lastScrollTop) {
      // downscroll code
      this.cfg.body.classList.remove('is-scrollingUp');
      this.cfg.body.classList.add('is-scrollingDown');
    } else {
      // upscroll code
      this.cfg.body.classList.remove('is-scrollingDown');
      this.cfg.body.classList.add('is-scrollingUp');
    }
    // For Mobile or negative scrolling
    this.cfg.lastScrollTop = scrollOffsetTop <= 0 ? 0 : scrollOffsetTop;
  },

  init() {
    window.addEventListener('scroll', this.setClasses.bind(this), false);
  },
};

export default globalScrollListener;
