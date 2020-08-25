// Gallery
if (document.querySelectorAll('.js-imageGallery').length) {
  import(
    /* webpackChunkName: "imageGallery" */ '../../templates/_components/gallery/images.js'
  )
    .then(imageGallery => imageGallery.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// sliderImages
if (document.querySelectorAll('.js-sliderImages').length) {
  import(
    /* webpackChunkName: "imageSlider" */ '../../templates/_components/slider/images.js'
  )
    .then(imageSlider => imageSlider.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Image Grid Calculated
if (document.querySelectorAll('.js-imageGridCalculated').length) {
  import(
    /* webpackChunkName: "imagesCalculated" */ '../../templates/_components/grid/imagesCalculated.js'
  )
    .then(imagesCalculated => imagesCalculated.default.init())
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

// Accordion
if (document.querySelectorAll('.js-accordionTrigger').length) {
  import(
    /* webpackChunkName: "accordion" */ '../../templates/_components/accordion/accordion.js'
  )
    .then(accordion => accordion.default.init())
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

// Freeform
if (document.querySelectorAll('.c-freeform').length) {
  import(
    /* webpackChunkName: "freeform" */ '../../templates/_components/freeform/freeform.js'
  )
    .then(freeform => freeform.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Pagination
if (document.querySelectorAll('.c-pagination, .c-paginationSimple').length) {
  import(/* webpackChunkName: "pagination" */ './components/pagination.js')
    .then(pagination => pagination.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Navigation
if (document.querySelectorAll('.js-navigation').length) {
  import(/* webpackChunkName: "navigation" */ './components/navigation.js')
    .then(navigation => navigation.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}
