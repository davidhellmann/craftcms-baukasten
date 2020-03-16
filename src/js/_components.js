// Gallery
if (document.querySelectorAll('.js-gallery').length) {
  import(/* webpackChunkName: "photoswipe" */ './components/photoswipe.js')
    .then(photoswipe => photoswipe.default.init('.js-gallery'))
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Slider
if (document.querySelectorAll('.js-slider').length) {
  import(
    /* webpackChunkName: "slider" */ '../../templates/_components/imageSlider/imageSlider.js'
  )
    .then(slider => slider.default.init())
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
