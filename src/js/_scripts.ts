const scripts = {
  init() {
    // Adds Browser Classes to the document
    import('./scripts/bowser')
      .then(browserDetect => browserDetect.default.init())
      .catch(e => console.error(`${e.name} : ${e.message}`));

    // globalScrollListener
    import('./scripts/globalScrollListener')
      .then(globalScrollListener => globalScrollListener.default.init())
      .catch(e => console.error(`${e.name} : ${e.message}`));

    // globalResizeListener
    import('./scripts/globalResizeListener')
      .then(globalResizeListener => globalResizeListener.default.init())
      .catch(e => console.error(`${e.name} : ${e.message}`));

    // csrfToken
    if (document.querySelectorAll('input[name="CRAFT_CSRF_TOKEN"]').length) {
      import('./scripts/csrf')
        .then(csrfToken => csrfToken.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }

    // scrollObserver
    if (document.querySelectorAll('[waypoint]').length) {
      import('./scripts/scrollObserver')
        .then(scrollObserver => scrollObserver.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }

    // Lazy Images
    if (
      document.querySelectorAll('img[loading="lazy"], source[data-srcset]')
        .length &&
      'loading' in HTMLImageElement.prototype
    ) {
      import('./scripts/lazy')
        .then(lazy =>
          lazy.initLazyloading('img[loading="lazy"], source[data-srcset]'),
        )
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }
  },
};

export default scripts;
