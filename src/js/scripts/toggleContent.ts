/**
 * toggleContent
 */

const toggleContent = {
  cfg: {
    name: 'toggleContent',
    selectors: {
      triggers: '.js-toggleContent--trigger',
      content: '.js-toggleContent--content',
    },
    classes: {
      isOpen: 'is-open',
    },
    els: {
      $triggers: null,
    },
  },

  setElements() {
    this.cfg.els.$triggers = [...document.querySelectorAll(this.cfg.selectors.triggers)];
  },

  toggleContent() {
    this.cfg.els.$triggers.forEach((el) => {
      el.addEventListener('click', () => {
        el.classList.toggle(this.cfg.classes.isOpen);
        if (el.nextElementSibling.matches(this.cfg.selectors.content)) {
          el.nextElementSibling.classList.toggle(this.cfg.classes.isOpen);
        }
      });
    });
  },

  init() {
    console.debug(`Init: ${this.cfg.name}`);
    this.setElements();

    if (!this.cfg.els.$triggers) return;
    this.toggleContent();
  },
};

export default toggleContent;
