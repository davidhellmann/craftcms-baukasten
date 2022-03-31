export default (async () => {
  const vueSampleEl = document.querySelector('#sample');
  if (vueSampleEl) {
    const { createApp } = await import('vue');
    const { default: Sample } = await import('../vue/Sample.vue');

    // Create our vue instance
    const sample = createApp(Sample);
    // Mount the app
    sample.mount('#sample');
  }
})();
