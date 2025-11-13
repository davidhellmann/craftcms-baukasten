export default (async () => {
  // Gallery
  const imageGalleryEls = document.querySelectorAll<HTMLElement>('[data-js="image-gallery"]');
  if (imageGalleryEls.length > 0) {
    const { default: imageGallery } = await import('../../templates/_components/gallery/images');
    imageGallery.init(imageGalleryEls);
  }

  // swiperHolder
  const swiperHolderEls = document.querySelectorAll<HTMLElement>('[data-js="swiper-holder"]');
  if (swiperHolderEls.length > 0) {
    const { default: swiperHolder } = await import(
      '../../templates/_components/slider/swiperHolder'
    );
    swiperHolder.init(swiperHolderEls);
  }

  // Code
  const codeBlockEls = document.querySelectorAll<HTMLElement>('[data-js="code"]');
  if (codeBlockEls.length > 0) {
    const { default: code } = await import('../../templates/_components/text/code');
    code.init(codeBlockEls);
  }
})();
