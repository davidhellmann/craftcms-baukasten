import 'alpinejs';

// Add JS Loaded class to the body
document.documentElement.classList.add('js-loaded');

// Import our CSS
import '@/css/app.pcss';
// App main
const main = async () => {
  // Import Vendors
  await import('./_vendors')
    .then(vendors => vendors.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));

  // Import Scripts
  await import('./_scripts')
    .then(scripts => scripts.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));

  // Import Components
  await import('./_components')
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
  console.log('App Initialized');
});
