// Dependencies
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { IComponent } from '../../../src/js/@types/IComponent';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './images.css';

const imageGallery: IComponent = {
  name: 'imageGallery',

  init(imageGalleryEls: NodeListOf<HTMLElement>) {
    imageGalleryEls?.forEach((gal) => {
      const dynamicData = gal.dataset.dynamicData || null;

      if (dynamicData) {
        const dynamicGallery = lightGallery(gal, {
          plugins: [lgThumbnail, lgZoom],
          download: false,
          thumbnail: true,
          dynamic: true,
          licenseKey: '',
          dynamicEl: JSON.parse(dynamicData),
        });

        gal.addEventListener('click', () => {
          dynamicGallery.openGallery(0);
        });
      }
    });
  },
};
export default imageGallery;
