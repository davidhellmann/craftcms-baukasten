const vueComps = {
  async init() {
    // Each Vue Component is decoupled instance
    // Dummy Comp
    if (document.querySelector('#sampleComp')) {
      // Import Vue Components
      const { createApp } = await import(/* webpackChunkName: "vue" */ 'vue');
      const { default: SampleComp } = await import(
        /* webpackChunkName: "sampleComp" */ '../vue/SampleComp.vue'
      );

      // Create our vue instance
      const sampleComp = createApp(SampleComp);
      // Mount the app
      sampleComp.mount('#sampleComp');
    }
  },
};

export default vueComps;
