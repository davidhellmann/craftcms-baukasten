import { IComponent } from '../@types/IComponent';

type fileFormat = 'webp' | 'avif';

interface ICompModernImageFormatFallback {
  name: string;
  replaceModernFormatWithFallback(modernFormat: fileFormat): void;
  init(x: fileFormat): void;
}

const modernImageFormatFallback: ICompModernImageFormatFallback = {
  name: 'modernImageFormatFallback',

  replaceModernFormatWithFallback(modernFormat: fileFormat = 'avif'): void {
    const images = [...document.querySelectorAll<HTMLElement>('img, source')];

    if (images) {
      images.forEach((image) => {
        const imageType = image.getAttribute('data-type');
        const dataSrcset = image.getAttribute('data-srcset');
        const srcset = image.getAttribute('srcset');
        const type = image.getAttribute('type');
        // const searchRegExp = new RegExp('\\.avif', 'g');
        let searchRegExp = /.webp/g;
        if (modernFormat === 'avif') {
          searchRegExp = /.avif/g;
        }

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

  init(modernFormat): void {
    this.replaceModernFormatWithFallback(modernFormat);
  },
};

export default modernImageFormatFallback;
