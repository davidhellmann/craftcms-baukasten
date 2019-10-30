/*
 * Description of what this file is for
 *
 * @package Baukasten
 * @author David Hellmann [david@hellmann.io]
 * select
 */

const select = {
  cfg:  {
    name: 'select',
    selectors: {
      sample: '.sample',
    },
    classes: {
      active: 'is-active',
      inActive: 'is-inActive',
      hidden: 'is-hidden',
      visible: 'is-visible',
    },
    el: {
      $sample: undefined,
    },
    els: {
      $sample: undefined,
    },
  },

  log(msg) {
    console.log(msg); // eslint-disable-line
  },

  setElements() {
    this.cfg.el.$sample = document.querySelector(this.cfg.selectors.sample);
  },

  init() {
    this.setElements();
  },
};

export default select;
