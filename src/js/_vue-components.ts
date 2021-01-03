const vueComps = {
  async init() {
    console.log('Init Vue Comps')
    // Each Vue Component is decoupled instance
    // Dummy Comp
    if (document.querySelector('#dummyComp')) {
      // Import Vue Components
      const { createApp } = await import(/* webpackChunkName: "vue" */ 'vue');
      const { default: DummyComp } = await import(/* webpackChunkName: "dummyComp" */ '../vue/DummyComp.vue');

      // Create our vue instance
      const dummyComp = createApp(DummyComp);
      // Mount the app
      dummyComp.mount('#dummyComp');
    }
  },
};

export default vueComps;
