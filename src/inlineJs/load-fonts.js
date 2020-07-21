'use strict';

/*
If the font have the same name
https://fontfaceobserver.com/
var font = new FontFaceObserver('Output Sans', {
  weight: 300,
  style: 'italic'
});
* */

var FontA = new FontFaceObserver('Merriweather');
var FontB = new FontFaceObserver('Lato');
var FontC = new FontFaceObserver('Roboto Mono');

Promise.all([FontA.load(), FontB.load(), FontC.load()])
  .then(function() {
    document.documentElement.classList.add('fonts-loaded');
  })
  .catch(e => {
    console.error(e);
    document.documentElement.classList.add('fonts-failed');
  });
