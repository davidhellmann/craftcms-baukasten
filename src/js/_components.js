// Gallery
if (document.querySelectorAll('.js-gallery').length) {
  import(/* webpackChunkName: "photoswipe" */ './components/photoswipe.js')
    .then(photoswipe => photoswipe.default.init('.js-gallery'))
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Slider
if (document.querySelectorAll('.js-slider.variant-basic').length) {
  import(
    /* webpackChunkName: "slider" */ '../templates/_organisms/slider/variant-basic/_script.js'
  )
    .then(slider => slider.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}
