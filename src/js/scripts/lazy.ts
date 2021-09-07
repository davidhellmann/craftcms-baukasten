export const initLazyloading = (selector: string): void => {
  let images = document.querySelectorAll(selector);

  if ('IntersectionObserver' in window) {
    // Create new observer object
    let lazyItemObserver = new IntersectionObserver((entries, observer) => {
      // Loop through IntersectionObserverEntry objects
      entries.forEach(entry => {
        // Do these if the target intersects with the root
        if (entry.isIntersecting) {
          let lazyItem: any = entry.target;

          if (lazyItem.nodeName === 'IMG') {
            lazyItem.src = lazyItem.dataset.src || lazyItem.src;
            lazyItem.srcset = lazyItem.dataset.srcset;
            lazyItem.sizes = `${lazyItem.getBoundingClientRect().width}px`;
          }

          if (lazyItem.nodeName === 'SOURCE') {
            lazyItem.srcset = lazyItem.dataset.srcset;
          }

          if (lazyItem.nodeName === 'IFRAME') {
            lazyItem.src = lazyItem.dataset.src;
          }

          lazyItem.classList.remove('lazyload');
          lazyItem.classList.add('lazyloaded');
          lazyItemObserver.unobserve(lazyItem);
        }
      });
    });

    // Loop through and observe each image
    images.forEach(function (lazyItem) {
      lazyItemObserver.observe(lazyItem);
    });

    // Save for Sprig
    window._LazyImageSelector = selector;
    window._LazyImageObserver = lazyItemObserver;
  }
};
