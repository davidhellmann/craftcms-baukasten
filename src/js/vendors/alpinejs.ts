import Alpine from 'alpinejs';

const alpinejs = {
  init() {
    console.log('AlpineJS is ready');
    // @ts-ignore
    window.Alpine = Alpine;
    Alpine.start();
  },
};

export default alpinejs;
