import App from '../vue/App.vue';
import { createApp } from 'vue';
import 'typeface-lato';
import 'typeface-merriweather';
import 'typeface-roboto-mono';

// Add JS Loaded class to the body
document.documentElement.classList.add('js-loaded');

// App main
const main = async () => {
  // Import Vendors
  // await import(/* webpackChunkName: "vendors" */ './_vendors.ts');

  // Import Scripts
  // await import(/* webpackChunkName: "scripts" */ './_scripts.ts');

  // Import Components
  // await import(/* webpackChunkName: "components" */ './_components.ts');

  // Import Vue Components
  // await import(/* webpackChunkName: "vueComponents" */ './_vue-components.ts');

  // Async load the Vue 3 APIs we need from the Vue ESM
  // Create our vue instance
  const app = createApp(App);

  // Mount the app
  const root = app.mount('#component-container');

  return root;
};

// Execute async function
// eslint-disable-next-line
main().then(root => {});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
