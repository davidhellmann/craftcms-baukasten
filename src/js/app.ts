// Import our CSS
import '../css/app.css';
import sayHello from './scripts/hello';

sayHello.init();

// Add JS Loaded class to the body
document.documentElement.classList.add('js-loaded');

// App main
const main = async () => {
  // Import Vendors
  await import('./_vendors');

  // Import Scripts
  await import('./_scripts');

  // Import Components
  await import('./_components');

  // Import Components
  await import('./_vue-components');
};

// Execute async function
// eslint-disable-next-line
main()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  .then(() => {})
  .catch((e) => console.error(e));

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
// if (import.meta.hot) {
//   import.meta.hot.accept(() => {
//     console.log('HMR');
//   });
// }
