/**/
/*
 * @package  craft-baukasten
 * @author David Hellmann [david@hellmann.io]
 *
 * David
 */

const fooDavid = {
  cfg: {
    name: 'fooDavid',
    selectors: {
      fooDavid: 'c-fooDavid',
    },
    classes: {
      active: 'is-active',
      inActive: 'is-inActive',
      hidden: 'is-hidden',
      visible: 'is-visible',
    },
    el: {
      $fooDavid: undefined,
    },
    els: {
      $fooDavid: undefined,
    },
  },

  setElements() {
    this.cfg.el.$fooDavid = document.querySelector(this.cfg.selectors.fooDavid);
  },

  init() {
    console.debug(`Init: ${this.cfg.name}`);
    this.setElements();
  },
};

export default fooDavid;
