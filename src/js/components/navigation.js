const navigation = {
  cfg: {
    selectors: {
      navigations: '.js-navigation',
    },
    classes: {
      isActive: 'is-active',
    },
    els: {
      $navigations: null,
    },
  },

  setElements() {
    this.cfg.els.$navigations = [
      ...document.querySelectorAll(this.cfg.selectors.navigations),
    ];
  },

  setParentClasses(nav) {
    const liElements = [...nav.querySelectorAll('li')];
    if (!liElements) return;

    liElements.forEach(el => {
      el.classList.add(this.cfg.classes.isActive);
    });
  },

  setActivesClasses(els) {
    els.forEach(el => {
      el.classList.add(this.cfg.classes.isActive);
    });
  },

  liService(els) {
    const currentUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

    els.forEach(el => {
      const matchingElements = [
        ...el.querySelectorAll(`a[href="${currentUrl}"]`),
      ];

      if (matchingElements.length > 0) {
        const ulElements = [...el.querySelectorAll('ul, div')] || [];
        this.setActivesClasses([...matchingElements, el, ...ulElements]);
      }
    });
  },

  navService() {
    this.cfg.els.$navigations.forEach(nav => {
      const liElements = [...nav.querySelectorAll('li')];

      if (!liElements) return;
      this.liService(liElements);
    });
  },

  init() {
    this.setElements();
    if (!this.cfg.els.$navigations) return;
    this.navService();
  },
};

export default navigation;
