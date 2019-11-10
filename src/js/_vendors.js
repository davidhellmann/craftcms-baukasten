// Async load LazySizes and it's plugins
if (document.querySelectorAll('.lazyload').length) {
  const LazySizes = import(/* webpackChunkName: "LazySizes" */ 'lazysizes');
  import(
    /* webpackChunkName: "LazySizes" */ 'lazysizes/plugins/respimg/ls.respimg.js'
  );
  import(
    /* webpackChunkName: "LazySizes" */ 'lazysizes/plugins/object-fit/ls.object-fit.js'
  );

  // fix issue when image is already in viewport and content is not loaded yet
  document.addEventListener('DOMContentLoaded', () => {
    LazySizes.init();
  });

  document.addEventListener('lazyloaded', e => {
    const target = e.target.parentNode;
    if (target && target.style.backgroundColor) {
      setTimeout(() => {
        target.style.backgroundColor = 'transparent';
      }, 250);
    }
  });
}
