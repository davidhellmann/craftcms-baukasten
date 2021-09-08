const vendors = {
  init() {
    // waypointObserver
    if (document.querySelectorAll('[alpinejs]').length) {
      import('./vendors/alpinejs')
        .then(alpinejs => alpinejs.default.init())
        .catch(e => console.error(`${e.name} : ${e.message}`));
    }
  },
};

export default vendors;
