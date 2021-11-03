export default async () => {
  try {
    const alpinejsEls = document.querySelectorAll('[alpinejs]');
    if (alpinejsEls) {
      const { default: alpinejs } = await import('./vendors/alpinejs');
      alpinejs.init();
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};
