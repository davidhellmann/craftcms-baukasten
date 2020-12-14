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
  await import(/* webpackChunkName: "vendors" */ './_vendors')
    .then(vendors => vendors.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));

  // Import Scripts
  await import(/* webpackChunkName: "scripts" */ './_scripts')
    .then(scripts => scripts.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));

  // Import Components
  await import(/* webpackChunkName: "components" */ './_components')
    .then(components => components.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));

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
