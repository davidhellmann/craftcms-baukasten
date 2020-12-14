const scripts = {
  init() {
    // Adds Browser Classes to the document
    import(/* webpackChunkName: "browserDetect" */ './scripts/bowser')
      .then(browserDetect => browserDetect.default.init())
      .catch(e => console.error(`${e.name} : ${e.message}`));

    // globalScrollListener
    import(
      /* webpackChunkName: "globalScrollListener" */ './scripts/globalScrollListener'
    )
      .then(globalScrollListener => globalScrollListener.default.init())
      .catch(e => console.error(`${e.name} : ${e.message}`));

    // globalResizeListener
    import(
      /* webpackChunkName: "globalResizeListener" */ './scripts/globalResizeListener'
    )
      .then(globalResizeListener => globalResizeListener.default.init())
      .catch(e => console.error(`${e.name} : ${e.message}`));

    // csrfToken
    if (document.querySelectorAll('input[name="CRAFT_CSRF_TOKEN"]').length) {
      import(/* webpackChunkName: "csrfToken" */ './scripts/csrf')
        .then(csrfToken => csrfToken.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }

    // scrollObserver
    if (document.querySelectorAll('[waypoint]').length) {
      import(
        /* webpackChunkName: "scrollObserver" */ './scripts/scrollObserver'
      )
        .then(scrollObserver => scrollObserver.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }
  },
};

export default scripts;
