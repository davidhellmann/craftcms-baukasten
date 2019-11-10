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

// Code Snippets
if (document.querySelectorAll('.a-code').length) {
  import(/* webpackChunkName: "prism" */ './scripts/prism.js');
  import(/* webpackChunkName: "code" */ '../templates/_atoms/code/_script.js')
    .then(code => code.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}

// Code Snippets
// Code Snippets
if (document.querySelectorAll('.m-gridOverlay').length) {
  import(
    /* webpackChunkName: "gridOverlay" */ '../templates/_molecules/gridOverlay/variant-basic/_script.js'
  )
    .then(gridOverlay => gridOverlay.default.init())
    .catch(e => console.error(`${e.name} : ${e.message}`));
}
