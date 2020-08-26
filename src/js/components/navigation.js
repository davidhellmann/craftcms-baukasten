const navigationMain = {
  cfg: {
    name: 'navigationMain',
    selectors: {
      navigationMain: '.c-navigationMain',
      hasPopup: '[aria-haspopup="true"]',
    },
    classes: {
      isActive: 'sssss',
    },
    el: {
      $navigationMain: undefined,
    },
    els: {
      $hasPopup: undefined,
    },
  },

  handleClicks(e) {
    e.preventDefault();
    if (e.target.getAttribute('aria-expanded') === 'false') {
      e.target.setAttribute('aria-expanded', 'true');
    } else {
      e.target.setAttribute('aria-expanded', 'false');
    }
  },

  setElements() {
    this.cfg.el.$navigationMain = document.querySelector(
      this.cfg.selectors.navigationMain,
    );

    if (this.cfg.el.$navigationMain) {
      this.cfg.els.$hasPopup = [
        ...this.cfg.el.$navigationMain.querySelectorAll(
          this.cfg.selectors.hasPopup,
        ),
      ];
    }
  },

  closeSubNav(els) {
    els.forEach(el => {
      console.log(el.setAttribute('aria-expanded', 'false'));
    });
  },

  handleClickOutside() {
    document.addEventListener('click', e => {
      const navContainer = document.querySelector(
        this.cfg.selectors.navigationMain,
      );
      if (!navContainer.contains(e.target) && this.cfg.els.$hasPopup) {
        this.closeSubNav(this.cfg.els.$hasPopup);
      }
    });
  },

  init() {
    this.setElements();
    this.handleClickOutside();

    if (!this.cfg.els.$hasPopup) return;
    this.cfg.els.$hasPopup.forEach(el =>
      el.addEventListener('click', this.handleClicks),
    );
  },
};

export default navigationMain;
