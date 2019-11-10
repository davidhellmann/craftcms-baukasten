/**
 * disableHover
 */

const disableHover = {
  cfg: {
    body: document.body,
    timer: '',
  },

  setClasses() {
    clearTimeout(this.cfg.timer);
    if (!this.cfg.body.classList.contains('no-hover')) {
      this.cfg.body.classList.add('no-hover');
    }
    this.cfg.timer = setTimeout(() => {
      this.cfg.body.classList.remove('no-hover');
    }, 250);
  },

  init() {
    window.addEventListener('scroll', this.setClasses.bind(this), false);
  },
};

export default disableHover;
