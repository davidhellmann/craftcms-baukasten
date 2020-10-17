// Async load LazySizes and it's plugins
if (document.querySelectorAll('.lazyload').length) {
  const nativeLazy = false;
  if ('loading' in HTMLImageElement.prototype && nativeLazy) {
    const images = [...document.querySelectorAll('img[loading="lazy"]')];
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
      img.srcset = img.dataset.srcset;
      img.sizes = `${img.getBoundingClientRect().width}px`;
    });
  } else {
    const LazySizes = import(/* webpackChunkName: "LazySizes" */ 'lazysizes');

    /*import(
      /!* webpackChunkName: "LazySizes" *!/ 'lazysizes/plugins/respimg/ls.respimg.js'
    );*/

    /*import(
      /!* webpackChunkName: "LazySizes" *!/ 'lazysizes/plugins/object-fit/ls.object-fit.js'
    );*/

    // fix issue when image is already in viewport and content is not loaded yet
    document.addEventListener('DOMContentLoaded', () => {
      LazySizes.init();
    });
  }
}
