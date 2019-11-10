/**
 * bodyClass
 */

const resizeClass = {
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

  init() {
    window.addEventListener('resize', () => {
      this.isResizing();

      clearTimeout(this.cfg.timer);
      this.cfg.timer = setTimeout(() => {
        this.isDoneResizing();
      }, 250);
    });
  },
};

export default resizeClass;
