// Gallery
if (document.querySelectorAll('.js-gallery').length) {
  import(/* webpackChunkName: "photoswipe" */ './components/photoswipe.js')
    .then(photoswipe => photoswipe.default.init('.js-gallery'))
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Slider
if (document.querySelectorAll('.js-slider-basic').length) {
  import(
    /* webpackChunkName: "slider" */ '../templates/_organisms/slider/_script-basic.js'
  )
    .then(slider => slider.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Code Snippets
if (document.querySelectorAll('.js-code-basic').length) {
  import(/* webpackChunkName: "prism" */ './scripts/prism.js');
  import(
    /* webpackChunkName: "code" */ '../templates/_atoms/code/_script-basic.js'
  )
    .then(code => code.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Grid overlay
if (document.querySelectorAll('.m-gridOverlay').length) {
  import(
    /* webpackChunkName: "gridOverlay" */ '../templates/_molecules/gridOverlay/_script-basic.js'
  )
    .then(gridOverlay => gridOverlay.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}
