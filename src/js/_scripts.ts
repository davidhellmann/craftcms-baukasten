// Adds Browser Classes to the document
import(/* webpackChunkName: "browserDetect" */ './scripts/bowser.js')
  .then(browserDetect => browserDetect.default.init())
  .catch(e => console.error(`${e.name} : ${e.message}`));

// globalScrollListener
import(
  /* webpackChunkName: "globalScrollListener" */ './scripts/globalScrollListener.js'
)
  .then(globalScrollListener => globalScrollListener.default.init())
  .catch(e => console.error(`${e.name} : ${e.message}`));

// globalResizeListener
import(
  /* webpackChunkName: "globalResizeListener" */ './scripts/globalResizeListener.js'
)
  .then(globalResizeListener => globalResizeListener.default.init())
  .catch(e => console.error(`${e.name} : ${e.message}`));

// csrfToken
if (document.querySelectorAll('input[name="CRAFT_CSRF_TOKEN"]').length) {
  import(/* webpackChunkName: "csrfToken" */ './scripts/csrf.js')
    .then(csrfToken => csrfToken.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// scrollObserver
if (document.querySelectorAll('[waypoint]').length) {
  import(/* webpackChunkName: "scrollObserver" */ './scripts/scrollObserver.js')
    .then(scrollObserver => scrollObserver.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Smooth Scroll
if (document.querySelectorAll('[data-scroll]').length) {
  import(/* webpackChunkName: "smoothScroll" */ './scripts/smoothScroll.js')
    .then(smoothScroll => scroll()) // eslint-disable-line
    .catch(e => console.error(`${e.name} : ${e.message}`));
}
