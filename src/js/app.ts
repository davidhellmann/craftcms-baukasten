import 'alpinejs'

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

  // Import Vue Components
  await import(/* webpackChunkName: "vueComponents" */ './_vue-components')
    .then(vueComponents => vueComponents.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
};

// Execute async function
// eslint-disable-next-line
main().then(() => {
  console.log('App Initialized')
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
