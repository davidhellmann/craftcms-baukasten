import {IComponent} from '../../../src/js/@types/IComponent'

// Dependencies
import lightGallery from '@NPM/lightgallery';
import lgThumbnail from '@NPM/lightgallery/plugins/thumbnail'
import lgZoom from '@NPM/lightgallery/plugins/zoom'
import '@NPM/lightGallery/css/lightgallery.css'
import '@NPM/lightGallery/css/lg-zoom.css'
import '@NPM/lightGallery/css/lg-thumbnail.css'
import './images.pcss'

const imageGallery: IComponent = {
  name: 'imageGallery',
  init(imageGalleryEls: Array<HTMLElement>) {
    imageGalleryEls?.forEach(gal => {
      const dynamicData = gal.dataset.dynamicData || null

      if (dynamicData) {
        const dynamicGallery = lightGallery(gal, {
          plugins: [lgThumbnail, lgZoom],
          download: false,
          thumbnail: true,
          dynamic: true,
          dynamicEl: JSON.parse(dynamicData)
        })

        gal.addEventListener('click', () => {
          dynamicGallery.openGallery(0);
        });
      }
    })
  },
};
export default imageGallery;
