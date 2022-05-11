import _debounce from 'lodash-es/debounce';
import { IComponent } from '../../../src/js/@types/IComponent';

import './imagesCalculated.css';

interface ICompImagesCalculated extends IComponent {
  settings: {
    imageHolderWidth: number;
    height: number;
  };
  setImageHeights(el: NodeListOf<HTMLElement>, height: number, ratio: number): void;
  startImageGrid(el: HTMLElement | NodeListOf<HTMLElement>): void;
  doCalculation(el: HTMLElement, width: number): void;
}

const imagesCalculated: ICompImagesCalculated = {
  name: 'imagesCalculated',
  settings: {
    imageHolderWidth: 0,
    height: 10,
  },

  setImageHeights(images, ratio, height) {
    images?.forEach((image) => {
      // eslint-disable-next-line no-param-reassign
      image.style.height = `${height * ratio}px`;
    });
  },

  doCalculation(imageHolder, imageHolderWidth) {
    const images: NodeListOf<HTMLElement> = imageHolder.querySelectorAll<HTMLImageElement>('img');
    let imagesWidthSum = 0;
    const imageCount: number = images.length - 1 || 1;
    const rowGap = parseFloat(
      getComputedStyle(<HTMLElement>imageHolder).getPropertyValue('row-gap'),
    );
    const gap: number = imageCount * rowGap;

    images?.forEach((image) => {
      if (!this.settings) return;
      // eslint-disable-next-line no-param-reassign
      image.style.height = `${this.settings?.height}px`;
      imagesWidthSum += image.getBoundingClientRect().width;
    });

    const ratio = (imageHolderWidth - gap) / imagesWidthSum;
    this.setImageHeights(images, this.settings.height, ratio);
  },

  startImageGrid(imageGridCalculatedEls: NodeListOf<HTMLElement>) {
    imageGridCalculatedEls?.forEach((imageHolder) => {
      if (!this.settings) return;
      this.settings.imageHolderWidth = imageHolder.getBoundingClientRect().width;
      this.doCalculation(imageHolder, this.settings?.imageHolderWidth);
    });
  },

  init(imageGridCalculatedEls: HTMLElement | NodeListOf<HTMLElement>) {
    this.startImageGrid(imageGridCalculatedEls);

    const winResize = _debounce(() => {
      this.startImageGrid(imageGridCalculatedEls);
    }, 10);

    window.addEventListener('resize', winResize);
  },
};

export default imagesCalculated;
