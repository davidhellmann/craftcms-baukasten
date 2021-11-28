import { IComponent } from '../@types/IComponent';

interface ICompSafariWebPFix extends IComponent {
  replaceWebPWithFileType(): void;
  init(): void;
}

const safariWebPFix: ICompSafariWebPFix = {
  name: 'globalScrollListener',

  replaceWebPWithFileType() {
    const images = [...document.querySelectorAll<HTMLElement>('img, source')];

    if (images) {
      images.forEach((image) => {
        const imageType = image.getAttribute('data-type');
        const dataSrcset = image.getAttribute('data-srcset');
        const srcset = image.getAttribute('srcset');
        const type = image.getAttribute('type');
        // const searchRegExp = new RegExp('\\.webp', 'g');
        const searchRegExp = /.webp/g;

        if (type) {
          image.removeAttribute('type');
        }
        if (dataSrcset) {
          image.setAttribute('data-srcset', dataSrcset.replace(searchRegExp, `.${imageType}`));
        }
        if (srcset) {
          image.setAttribute('srcset', srcset.replace(searchRegExp, `.${imageType}`));
        }
        if (srcset && dataSrcset) {
          image.setAttribute('srcset', dataSrcset.replace(searchRegExp, `.${imageType}`));
        }
      });
    }
  },

  init() {
    this.replaceWebPWithFileType();
  },
};

export default safariWebPFix;
