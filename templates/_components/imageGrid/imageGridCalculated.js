/*
 * @package  craft-baukasten
 * @author David Hellmann [david@hellmann.io]
 *
 * imageGrid
 */

import _debounce from 'lodash/debounce';

const imageGridCalculated = {
  cfg: {
    name: 'imageGridCalculated',
    selectors: {
      imageHolder: '.c-imageGridCalculated__inner',
    },
    settings: {
      imageHolderWidth: 0,
      height: 10,
    },
    classes: {},
    el: {},
    els: {
      $imageHolders: undefined,
    },
  },

  setElements() {
    this.cfg.els.$imageHolders = [
      ...document.querySelectorAll(this.cfg.selectors.imageHolder),
    ];
  },

  setImageHeights(images, height, ratio) {
    if (!images) return;

    images.forEach(image => {
      image.style.height = `${height * ratio}px`;
    });
  },

  doCalculation(imageHolder, imageHolderWidth) {
    const images = [
      ...imageHolder.querySelectorAll('.c-imageGridCalculated__item img'),
    ];
    let marginSum = 0;
    let imagesWidthSum = 0;

    if (!images) return;
    images.forEach(image => {
      image.style.height = `${this.cfg.settings.height}px`;
      marginSum =
        marginSum +
        parseInt(getComputedStyle(image).getPropertyValue('padding-left')) +
        parseInt(getComputedStyle(image).getPropertyValue('padding-right'));
      imagesWidthSum = imagesWidthSum + image.getBoundingClientRect().width;
    });

    let ratio = (imageHolderWidth - marginSum) / imagesWidthSum;
    this.setImageHeights(images, this.cfg.settings.height, ratio);
  },

  startImageGrid() {
    this.cfg.els.$imageHolders.forEach(imageHolder => {
      this.cfg.settings.imageHolderWidth = imageHolder.getBoundingClientRect().width;
      this.doCalculation(imageHolder, this.cfg.settings.imageHolderWidth);
    });
  },

  init() {
    console.debug(`Init: ${this.cfg.name}`);
    this.setElements();

    if (!this.cfg.els.$imageHolders) return;
    this.startImageGrid();

    const winResize = _debounce(() => {
      this.startImageGrid();
    }, 250);

    window.addEventListener('resize', winResize);
  },
};

export default imageGridCalculated;
