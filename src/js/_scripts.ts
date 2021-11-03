export default async () => {
  try {
    // Bowser
    const { default: browserDetect } = await import('./scripts/bowser');
    browserDetect.init();

    // globalScrollListener
    const { default: globalScrollListener } = await import('./scripts/globalScrollListener');
    globalScrollListener.init();

    // globalScrollListener
    const { default: globalResizeListener } = await import('./scripts/globalResizeListener');
    globalResizeListener.init();

    // csrfToken
    const csrfTokenEls = [
      ...document.querySelectorAll<HTMLElement>('input[name="CRAFT_CSRF_TOKEN"]'),
    ];
    if (csrfTokenEls) {
      const { default: csrfToken } = await import('./scripts/csrf');
      csrfToken.init(csrfTokenEls);
    }

    // waypointObserver
    const waypointEls = [...document.querySelectorAll<HTMLElement>('[waypoint]')];
    if (waypointEls) {
      const { default: waypointObserver } = await import('./scripts/waypointObserver');
      waypointObserver.init(waypointEls);
    }

    // Lazy Images
    const selector: string = 'img[loading="lazy"], iframe[loading="lazy"], source[data-srcset]';
    const lazyImageEls = [...document.querySelectorAll<HTMLElement>(selector)];
    if ('loading' in HTMLImageElement.prototype) {
      const lazy = await import('./scripts/lazy');
      lazy.init(lazyImageEls, selector);
    } else {
      // eslint-disable-next-line no-console
      import('lazysizes')
        .then((LazySizes) => LazySizes.init())
        // eslint-disable-next-line no-console
        .catch((e) => console.error(`${e.name} : ${e.message}`));
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};
