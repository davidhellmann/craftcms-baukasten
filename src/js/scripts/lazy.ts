export const initLazyloading = (selector: string): void => {
  let images = document.querySelectorAll(selector);

  if ('IntersectionObserver' in window) {
    // Create new observer object
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      // Loop through IntersectionObserverEntry objects
      entries.forEach(entry => {
        // Do these if the target intersects with the root
        if (entry.isIntersecting) {
          let lazyImage: any = entry.target;

          if (lazyImage.nodeName === 'IMG') {
            lazyImage.src = lazyImage.dataset.src || lazyImage.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.sizes = `${lazyImage.getBoundingClientRect().width}px`;
          }

          if (lazyImage.nodeName === 'SOURCE') {
            lazyImage.srcset = lazyImage.dataset.srcset;
          }

          lazyImage.classList.remove('lazyload');
          lazyImage.classList.add('lazyloaded');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    // Loop through and observe each image
    images.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
};
