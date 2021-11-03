// Dependencies
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { IComponent } from '../../../src/js/@types/IComponent';
// import 'lightGallery/css/lightgallery.css'
// import 'lightGallery/css/lg-zoom.css'
// import 'lightGallery/css/lg-thumbnail.css'
import './images.pcss';

const imageGallery: IComponent = {
  name: 'imageGallery',

  init(imageGalleryEls: Array<HTMLElement>) {
    imageGalleryEls?.forEach((gal) => {
      const dynamicData = gal.dataset.dynamicData || null;

      if (dynamicData) {
        const dynamicGallery = lightGallery(gal, {
          plugins: [lgThumbnail, lgZoom],
          download: false,
          thumbnail: true,
          dynamic: true,
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
