export default (async () => {
  // Gallery
  const imageGalleryEls = document.querySelectorAll<HTMLElement>('.js-imageGallery');
  if (imageGalleryEls.length > 0) {
    const { default: imageGallery } = await import('../../templates/_components/gallery/images');
    imageGallery.init(imageGalleryEls);
  }

  // swiperHolder
  const swiperHolderEls = document.querySelectorAll<HTMLElement>('.js-swiperHolder');
  if (swiperHolderEls.length > 0) {
    const { default: swiperHolder } = await import(
      '../../templates/_components/slider/swiperHolder'
    );
    swiperHolder.init(swiperHolderEls);
  }

  // Image Grid Calculated
  const imageGridCalculatedEls = document.querySelectorAll<HTMLElement>('.js-imageGridCalculated');
  if (imageGridCalculatedEls.length > 0) {
    const { default: imagesCalculated } = await import(
      '../../templates/_components/grid/imagesCalculated'
    );
    imagesCalculated.init(imageGridCalculatedEls);
  }

  // Navigation Main
  const navigationMainEl = document.querySelector<HTMLElement>('.js-navigationMain');
  if (navigationMainEl) {
    const { default: imagesCalculated } = await import(
      '../../templates/_components/navigation/navigationMain'
    );
    imagesCalculated.init(navigationMainEl);
  }

  // Code
  const codeBlockEls = document.querySelectorAll<HTMLElement>('.js-code');
  if (codeBlockEls.length > 0) {
    const { default: code } = await import('../../templates/_components/text/code');
    code.init(codeBlockEls);
  }
})();
