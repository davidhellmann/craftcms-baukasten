export const init = (els: NodeListOf<HTMLElement>, selector: string, threshold = 0.25): void => {
  if ('IntersectionObserver' in window) {
    // Create new observer object
    const lazyItemObserver = new IntersectionObserver(
      (entries) => {
        // Loop through IntersectionObserverEntry objects
        entries.forEach((entry) => {
          // Do these if the target intersects with the root
          if (entry.isIntersecting) {
            const lazyItem = entry.target as HTMLImageElement | HTMLSourceElement;

            if (lazyItem.nodeName === 'IMG') {
              lazyItem.src = lazyItem.dataset.src || lazyItem.src;
              if (lazyItem.dataset.srcset) {
                lazyItem.srcset = lazyItem.dataset.srcset;
              }
              lazyItem.sizes = `${Math.round(lazyItem.getBoundingClientRect().width)}px`;
            }

            if (lazyItem.nodeName === 'SOURCE') {
              if (lazyItem.dataset.srcset) {
                lazyItem.srcset = lazyItem.dataset.srcset;
              }
            }

            if (lazyItem.nodeName === 'IFRAME') {
              if (lazyItem.dataset.src) {
                lazyItem.src = lazyItem.dataset.src;
              }
            }

            // lazyItem.classList.remove('lazyload');
            lazyItem.classList.add('lazyloaded');

            const parentNode: HTMLElement | null = lazyItem.parentElement;
            if (parentNode?.style?.backgroundColor) {
              setTimeout(() => {
                parentNode.style.backgroundColor = 'transparent';
              }, 1000);
            }

            lazyItemObserver.unobserve(lazyItem);
          }
        });
      },
      { threshold },
    );

    // Loop through and observe each image
    els.forEach((lazyItem) => {
      lazyItemObserver.observe(lazyItem);
    });

    // Save for Sprig
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.LazyImageSelector = selector;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.LazyImageObserver = lazyItemObserver;
  }
};
