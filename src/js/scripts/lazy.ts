type LazyItem = HTMLImageElement | HTMLSourceElement | HTMLIFrameElement;

const handleLazyImage = (lazyItem: HTMLImageElement): void => {
  lazyItem.src = lazyItem.dataset.src || lazyItem.src;
  if (lazyItem.dataset.srcset) {
    lazyItem.srcset = lazyItem.dataset.srcset;
  }
  lazyItem.sizes = `${Math.round(lazyItem.getBoundingClientRect().width)}px`;
};

const handleLazySource = (lazyItem: HTMLSourceElement): void => {
  if (lazyItem.dataset.srcset) {
    lazyItem.srcset = lazyItem.dataset.srcset;
  }
};

const handleLazyIFrame = (lazyItem: HTMLIFrameElement): void => {
  if (lazyItem.dataset.src) {
    lazyItem.src = lazyItem.dataset.src;
  }
};

export const init = (els: NodeListOf<HTMLElement>, selector: string, threshold = 0.25): void => {
  if ('IntersectionObserver' in window) {
    const lazyItemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyItem = entry.target as LazyItem;

            if (lazyItem.nodeName === 'IMG') {
              handleLazyImage(lazyItem as HTMLImageElement);
            } else if (lazyItem.nodeName === 'SOURCE') {
              handleLazySource(lazyItem as HTMLSourceElement);
            } else if (lazyItem.nodeName === 'IFRAME') {
              handleLazyIFrame(lazyItem as HTMLIFrameElement);
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
