const components = {
  init() {
    // Gallery
    if (document.querySelectorAll('.js-imageGallery').length) {
      import('/src/templates/_components/gallery/images')
        .then(imageGallery => imageGallery.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }

    // sliderImages
    if (
      document.querySelectorAll('.js-sliderImages').length &&
      document.documentElement.classList.contains('no-touchevents')
    ) {
      import('/src/templates/_components/slider/images')
        .then(imageSlider => imageSlider.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }

    // Image Grid Calculated
    if (document.querySelectorAll('.js-imageGridCalculated').length) {
      import('/src/templates/_components/grid/imagesCalculated')
        .then(imagesCalculated => imagesCalculated.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }

    // Code Snippets
    if (document.querySelectorAll('.js-code').length) {
      import('./scripts/prism')
        .then(prism => prism.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
      import('/src/templates/_components/code/code')
        .then(code => code.default.init())
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
