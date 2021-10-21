import {IComponent} from '../../../src/js/@types/IComponent'

// @ts-ignore
import _debounce from 'lodash/debounce';
import './imagesCalculated.pcss'

interface ICompImagesCalculated extends IComponent {
  settings: {
    imageHolderWidth: number,
    height: number,
  },
  setImageHeights(el: Array<HTMLElement>, height: number, ratio: number): void,
  startImageGrid(el: HTMLElement | Array<HTMLElement>): void,
  doCalculation(el: HTMLElement, width: number): void,
}

const imagesCalculated: ICompImagesCalculated = {
  name: 'imagesCalculated',
  settings: {
    imageHolderWidth: 0,
    height: 10,
  },


  setImageHeights(images, ratio, height) {
    images?.forEach(image => {
      image.style.height = `${height * ratio}px`;
    });
  },

  doCalculation(imageHolder, imageHolderWidth) {
    const images: Array<HTMLElement> = [
      ...imageHolder.querySelectorAll<HTMLImageElement>('img'),
    ];
    let imagesWidthSum: number = 0;
    let imageCount: number = images?.length - 1 || 1;
    let gap: number = imageCount * parseFloat(getComputedStyle(<HTMLElement>imageHolder).getPropertyValue('row-gap'))

    images?.forEach(image => {
      if (!this.settings) return;
      image.style.height = `${this.settings?.height}px`;
      imagesWidthSum = imagesWidthSum + image.getBoundingClientRect().width;
    });

    let ratio = (imageHolderWidth - gap) / imagesWidthSum;
    this.setImageHeights(images, this.settings.height, ratio);
  },

  startImageGrid(imageGridCalculatedEls: Array<HTMLElement>) {
    imageGridCalculatedEls?.forEach(imageHolder => {
      if (!this.settings) return;
      this.settings.imageHolderWidth = imageHolder.getBoundingClientRect().width;
      this.doCalculation(imageHolder, this.settings?.imageHolderWidth);
    });
  },

  init(imageGridCalculatedEls: HTMLElement | Array<HTMLElement>) {
    this.startImageGrid(imageGridCalculatedEls);

    const winResize = _debounce(() => {
      this.startImageGrid(imageGridCalculatedEls);
    }, 10);

    window.addEventListener('resize', winResize);
  },
};

export default imagesCalculated;
