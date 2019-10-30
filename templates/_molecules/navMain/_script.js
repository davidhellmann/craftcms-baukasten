/*
 * Description of what this file is for
 *
 * @package Baukasten
 * @author David Hellmann [david@hellmann.io]
 * navMain
 */

const navMain = {
  cfg:  {
    name: 'navMain',
    selectors: {
      navMain: 'm-navMain',
    },
    classes: {
      active: 'is-active',
      inActive: 'is-inActive',
      hidden: 'is-hidden',
      visible: 'is-visible',
    },
    el: {
      $navMain: undefined,
    },
    els: {
      $navMain: undefined,
    },
  },

  log(msg) {
    console.log(msg); // eslint-disable-line
  },

  setElements() {
    this.cfg.el.$navMain = document.querySelector(this.cfg.selectors.navMain);
  },

  init() {
    this.setElements();
  },
};

export default navMain;
