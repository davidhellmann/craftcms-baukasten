/*
 * @package  craft-baukasten
 * @author David Hellmann [david@hellmann.io]
 *
 * sampleBasic
 */

const sampleBasic = {
  cfg: {
    name: 'sampleBasic',
    selectors: {
      sample: 'a-sampleBasic',
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

  setElements() {
    this.cfg.el.$sample = document.querySelector(this.cfg.selectors.sample);
  },

  init() {
    console.debug(`Init: ${this.cfg.name}`);
    this.setElements();
  },
};

export default sampleBasic;
