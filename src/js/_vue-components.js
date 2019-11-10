const vueComps = async () => {
  // Each Vue Component is decoupled instance
  // confetti
  if (document.querySelector('#confetti')) {
    // Import Vue Components
    const { default: Vue } = await import(/* webpackChunkName: "vue" */ 'vue');
    new Vue({
      el: '#confetti',
      components: {
        confetti: () =>
          import(/* webpackChunkName: "confetti" */ '../vue/Confetti.vue'),
      },
    });
  }
};

// Start Vue Comps
vueComps();
