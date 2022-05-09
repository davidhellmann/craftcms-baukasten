export default (async () => {
  const vueSampleEl = document.querySelector('#sample');
  if (vueSampleEl) {
    const { createApp } = await import('vue');
    const { default: SampleComp } = await import('../vue/SampleComp.vue');

    // Create our vue instance
    const sample = createApp(SampleComp);
    // Mount the app
    sample.mount('#SampleComp');
  }
})();
