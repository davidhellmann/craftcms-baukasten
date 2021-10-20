export default async () => {
  try {
    // Gallery
    const imageGalleryEls = [...document.querySelectorAll<HTMLElement>('.js-imageGallery')];
    if (imageGalleryEls) {
      const {default: imageGallery} = await import('../../templates/_components/gallery/images')
      imageGallery.init(imageGalleryEls)
    }

    // swiperHolder
    const swiperHolderEls = [...document.querySelectorAll<HTMLElement>('.js-swiperHolder')];
    if (swiperHolderEls) {
      const {default: swiperHolder} = await import('../../templates/_components/slider/swiperHolder')
      swiperHolder.init(swiperHolderEls)
    }

    // Image Grid Calculated
    const imageGridCalculatedEls = [...document.querySelectorAll<HTMLElement>('.js-imageGridCalculated')];
    if (imageGridCalculatedEls) {
      const {default: imagesCalculated} = await import('../../templates/_components/grid/imagesCalculated')
      imagesCalculated.init(imageGridCalculatedEls)
    }

    // Navigation
    if (document.querySelectorAll('.js-navigation').length) {
      import('./components/navigation')
        .then(navigation => navigation.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }
  } catch (e) {
    console.error(e)
  }
};

