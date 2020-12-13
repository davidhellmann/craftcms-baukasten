//  --------------------------------------------------------
//  SmoothScroll
//  https://github.com/cferdinandi/smooth-scroll
//  --------------------------------------------------------

import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('[data-scroll]', {
  // Selectors
  ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
  header: null, // Selector for fixed headers (must be a valid CSS selector)

  // Speed & Easing
  // Integer. How fast to complete the scroll in milliseconds
  speed: 250,

  // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
  offset: 50,

  // Easing pattern to use
  easing: 'easeInOutCubic',

  // Callback API
  // before() { }, // Callback to run before scroll
  // after() { } // Callback to run after scroll
});

if (window.location.hash) {
  setTimeout(() => {
    // Get the anchor
    const anchor = document.getElementById(window.location.hash.split('#')[1]);

    // Get the toggle (if one exists)
    const toggle = document.querySelector(`a[href*="${window.location.hash}"]`);

    // Any custom options you want to use would go here
    const options = {};
    scroll.animateScroll(anchor, toggle, options);
  }, 1000);
}
