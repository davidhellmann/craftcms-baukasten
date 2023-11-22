export default (async () => {
  const alpinejsEls = document.querySelectorAll('[alpinejs]');
  if (alpinejsEls.length > 0) {
    const { default: alpinejs } = await import('./vendors/alpinejs');
    alpinejs.init();
  }
})();
