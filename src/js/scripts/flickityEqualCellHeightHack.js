import Flickity from 'flickity';

/**
 * flickityEqualCellHeightHack
 */

const flickityEqualCellHeightHack = {
  init() {
    Flickity.prototype._createResizeClass = function() {
      this.element.classList.add('is-flickityResize');
    };

    Flickity.createMethods.push('_createResizeClass');

    const { resize } = Flickity.prototype;
    Flickity.prototype.resize = function() {
      this.element.classList.remove('is-flickityResize');
      resize.call(this);
      this.element.classList.add('is-flickityResize');
    };
  },
};

export default flickityEqualCellHeightHack;
