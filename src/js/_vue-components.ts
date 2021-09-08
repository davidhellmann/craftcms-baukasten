const vueComps = {
  async init() {
    // Each Vue Component is decoupled instance
    // Dummy Comp
    if (document.querySelector('#sample')) {
      // Import Vue onents
      const { createApp } = await import(/* webpackChunkName: "vue" */ 'vue');
      const { default: Sample } = await import(
        /* webpackChunkName: "sample" */ '../vue/Sample.vue'
      );

      // Create our vue instance
      const sample = createApp(Sample);
      // Mount the app
      sample.mount('#sample');
    }
  },
};

export default vueComps;
