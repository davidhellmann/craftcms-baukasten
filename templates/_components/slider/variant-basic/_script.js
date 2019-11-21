/**
 * Image Slider
 */

import Flickity from 'flickity';
import 'flickity-imagesloaded';

const imageSlider = {
  cfg: {
    slider: '.js-slider',
    sliderOptions: {
      cellAlign: 'left',
      contain: true,
      draggable: true,
      lazyLoad: 2,
      friction: 0.15,
      selectedAttraction: 0.01,
      groupCells: true,
      setGallerySize: true,
      imagesLoaded: true,
      prevNextButtons: true,
      pageDots: true,
      wrapAround: false,
    },
  },

  init() {
    window.addEventListener('load', () => {
      const sliders = [...document.querySelectorAll(this.cfg.slider)];
      if (sliders) {
        sliders.forEach(slider => {
          const flkty = new Flickity(slider, this.cfg.sliderOptions);
          flkty.resize();

          setTimeout(() => {
            flkty.resize();
            slider.classList.add('is-ready');
          }, 1000);

          /* eslint-disable */
          flkty.on(
            'dragStart',
            () => (document.ontouchmove = e => e.preventDefault()),
          );
          flkty.on('dragEnd', () => (document.ontouchmove = () => true));
          /* eslint-enable */
        });
      }
    });
  },
};

export default imageSlider;
