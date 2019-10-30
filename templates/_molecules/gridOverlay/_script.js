/*
 * Description of what this file is for
 *
 * @package Baukasten
 * @author David Hellmann [david@hellmann.io]
 * gridOverlay
 */

const gridOverlay = {
  cfg:  {
    name: 'gridOverlay',
    selectors: {
      toggleGrid: '.js-toggleGrid',
      gridOverlay: '.m-gridOverlay',
    },
    el: {
      $toggleGrid: undefined,
      $gridOverlay: undefined,
    },
  },

  setElements() { // eslint-disable-line
    this.cfg.el.$toggleGrid = document.querySelector(this.cfg.selectors.toggleGrid);
    this.cfg.el.$gridOverlay = document.querySelector(this.cfg.selectors.gridOverlay);
  },

  toggleGrid() {
    if (this.cfg.el.$gridOverlay) {
      this.cfg.el.$gridOverlay.classList.toggle('is-visible');

      let gridVisible = false;
      if (this.cfg.el.$gridOverlay.classList.contains('is-visible')) {
        gridVisible = true;
      } else {
        gridVisible = false;
      }
      localStorage.setItem('gridVisible', gridVisible);
    }
  },

  init() {
        console.debug(`Init: ${this.cfg.name}`); // eslint-disable-line
    setTimeout(() => {
      this.setElements();

      // Show grid when in true in local storage
      if (this.cfg.el.$gridOverlay && localStorage.getItem('gridVisible') === 'true') {
        this.cfg.el.$gridOverlay.classList.add('is-visible');
      }

      // Toggle Grid
      if (this.cfg.el.$toggleGrid) {
        this.cfg.el.$toggleGrid.addEventListener('click', () => {
          this.toggleGrid();
        }, false);
      }
    }, 500);
  },
};

export default gridOverlay;
