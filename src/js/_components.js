// Gallery
if (document.querySelectorAll('.js-imageGallery').length) {
  import(
    /* webpackChunkName: "photoswipe" */ '../../templates/_components/imageGallery/imageGallery.js'
  )
    .then(photoswipe => photoswipe.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// sliderImages
if (document.querySelectorAll('.js-sliderImages').length) {
  import(
    /* webpackChunkName: "sliderImages" */ '../../templates/_components/slider/sliderImages.js'
  )
    .then(sliderImages => sliderImages.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Image Grid Calculated
if (document.querySelectorAll('.js-imageGridCalculated').length) {
  import(
    /* webpackChunkName: "imageGridCalculated" */ '../../templates/_components/imageGrid/imageGridCalculated.js'
  )
    .then(imageGridCalculated => imageGridCalculated.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Code Snippets
if (document.querySelectorAll('.js-code').length) {
  import(/* webpackChunkName: "prism" */ './scripts/prism.js');
  import(
    /* webpackChunkName: "code" */ '../../templates/_components/code/code.js'
  )
    .then(code => code.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Grid overlay
if (document.querySelectorAll('.gridOverlay').length) {
  import(
    /* webpackChunkName: "gridOverlay" */ '../../templates/_components/gridOverlay/gridOverlay.js'
  )
    .then(gridOverlay => gridOverlay.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}
