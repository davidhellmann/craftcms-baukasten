// Adds Browser Classes to the document
// await import(/* webpackChunkName: "browserDetect" */ './scripts/bowser.js')
//   .then(browserDetect => browserDetect.default.init())
//   .catch(e => console.error(`${e.name} : ${e.message}`));

// disableHover
import(/* webpackChunkName: "disableHover" */ './scripts/globalScrollListener.js')
  .then(globalScrollListener => globalScrollListener.default.init())
  .catch(e => console.error(`${e.name} : ${e.message}`));

// resizeClass
import(/* webpackChunkName: "resizeClass" */ './scripts/resizeClass.js')
  .then(resizeClass => resizeClass.default.init())
  .catch(e => console.error(`${e.name} : ${e.message}`));

// csrfToken
if (document.querySelectorAll('input[name="CRAFT_CSRF_TOKEN"]').length) {
  import(/* webpackChunkName: "csrfToken" */ './scripts/csrf.js')
    .then(csrfToken => csrfToken.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Scrollmonitor
if (document.querySelectorAll('[waypointTrigger], [waypoint]').length) {
  import(/* webpackChunkName: "scrollMonitor" */ './scripts/scrollMonitor.js')
    .then(scrollMonitor => scrollMonitor.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}
