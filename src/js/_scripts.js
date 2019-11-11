// Adds Browser Classes to the document
// await import(/* webpackChunkName: "browserDetect" */ './scripts/bowser.js')
//   .then(browserDetect => browserDetect.default.init())
//   .catch(e => console.error(`${e.name} : ${e.message}`));

// disableHover
import(/* webpackChunkName: "disableHover" */ './scripts/disableHover.js')
  .then(disableHover => disableHover.default.init())
  .catch(e => console.error(`${e.name} : ${e.message}`));

// resizeClass
import(/* webpackChunkName: "resizeClass" */ './scripts/resizeClass.js')
  .then(resizeClass => resizeClass.default.init())
  .catch(e => console.error(`${e.name} : ${e.message}`));

// Scrollmonitor
if (document.querySelectorAll('[waypointTrigger]').length) {
  import(/* webpackChunkName: "scrollMonitor" */ './scripts/scrollMonitor.js')
    .then(scrollMonitor => scrollMonitor.carousel.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}
