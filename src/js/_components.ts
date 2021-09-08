const components = {
  init() {
    // Gallery
    if (document.querySelectorAll('.js-imageGallery').length) {
      import('../../templates/_components/gallery/images')
        .then(imageGallery => imageGallery.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }

    // sliderHolder
    if (
      document.querySelectorAll('[data-component-js="js-sliderHolder"]').length
    ) {
      import('../../templates/_components/slider/swiperHolder')
        .then(swiperHolder => swiperHolder.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }

    // Image Grid Calculated
    if (document.querySelectorAll('.js-imageGridCalculated').length) {
      import('../../templates/_components/grid/imagesCalculated')
        .then(imagesCalculated => imagesCalculated.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }

    // Navigation
    if (document.querySelectorAll('.js-navigation').length) {
      import('./components/navigation')
        .then(navigation => navigation.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }
  },
};

export default components;
