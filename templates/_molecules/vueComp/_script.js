/*
 * Description of what this file is for
 *
 * @package Baukasten
 * @author David Hellmann [david@hellmann.io]
 * vueComp
 */

import Vue from 'vue';
import Component from './_component.vue';

const vueComp = {
  cfg:  {
    name: 'vueComp',
    selectors: {
      vueComp: 'm-vueComp',
    },
    classes: {
      active: 'is-active',
      inActive: 'is-inActive',
      hidden: 'is-hidden',
      visible: 'is-visible',
    },
    el: {
      $vueComp: undefined,
    },
    els: {
      $vueComp: undefined,
    },
  },

  init() {
    new Vue({
      el: '#vueComp',
      render: createElement => createElement(Component),
    });
  },
};

export default vueComp;
