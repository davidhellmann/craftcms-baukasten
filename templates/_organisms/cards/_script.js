/*
 * Description of what this file is for
 *
 * @package Baukasten
 * @author David Hellmann [david@hellmann.io]
 * cards
 */

import Vue from 'vue';
import Cards from './_component.vue';

const cards = {
  cfg: {
    name: 'cards',
  },

  log(msg) {
        console.log(msg); // eslint-disable-line
  },

  init() {
    new Vue({
      name: 'CardsRoot',
      components: {Cards},
    }).$mount('[data-component="cards"]');

    this.log(`Init: ${this.cfg.name}`);
  },
};

export default cards;
