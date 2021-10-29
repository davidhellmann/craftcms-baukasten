import Alpine from 'alpinejs';
// import persist from '@alpinejs/persist'

const alpinejs = {
  init() {
    console.log('AlpineJS is ready');
    // @ts-ignore
    window.Alpine = Alpine;
    // Alpine.plugin(persist)
    Alpine.start();
  },
};

export default alpinejs;
