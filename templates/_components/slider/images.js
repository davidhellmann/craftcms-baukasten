/**
 * Image Slider
 */

import Flickity from 'flickity';
import flickityEqualCellHeightHack from '../../../src/js/scripts/flickityEqualCellHeightHack';
import 'flickity-imagesloaded';

const imageGallery = {
  cfg: {
    slider: '.js-sliderImages',
    sliderOptions: {
      cellAlign: 'left',
      contain: true,
      draggable: '>1',
      groupCells: true,
      imagesLoaded: true,
      prevNextButtons: true,
      pageDots: false,
      percentPosition: true,
      // freeScroll: true,
      // freeScrollFriction: 0.03,
    },
  },

  initSliders(sliders) {
    sliders.forEach(slider => {
      slider.classList.remove('is-hidden');
      slider.offsetHeight;

      const flkty = new Flickity(slider, this.cfg.sliderOptions);
      flickityEqualCellHeightHack.init();

      /* eslint-disable */
      flkty.on(
        'dragStart',
        () => (document.ontouchmove = e => e.preventDefault()),
      );
      flkty.on('dragEnd', () => (document.ontouchmove = () => true));
      /* eslint-enable */
    });
  },

  init() {
    window.addEventListener('load', () => {
      const sliders = [...document.querySelectorAll(this.cfg.slider)];
      if (!sliders) return;
      this.initSliders(sliders);
    });
  },
};

export default imageGallery;
