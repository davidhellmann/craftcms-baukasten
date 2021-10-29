// Add JS Loaded class to the body
document.documentElement.classList.add('js-loaded');

// Import our CSS
import '@/css/app.pcss';

// App main
const main = async () => {
  try {
    // Import Vendors
    const {default: vendors} = await import('./_vendors');
    await vendors();

    // Import Scripts
    const {default: scripts} = await import('./_scripts');
    await scripts();

    // Import Components
    const {default: components} = await import('./_components');
    await components();
  } catch (e) {
    console.error(e);
  }
};

// Execute async function
// eslint-disable-next-line
main().then(() => {
});
