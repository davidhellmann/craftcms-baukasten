"use strict";

var FontA = new FontFaceObserver("Merriweather");
var FontB = new FontFaceObserver("Montserrat");

Promise.all([FontA.load(), FontB.load()]).then(function () {
    document.documentElement.className += "fonts-loaded";
});
