import { IComponent } from '../@types/IComponent';

interface Settings {
  delay: number;
  staggeringDelay: number;
  includeHolder: boolean;
  endless: boolean;
}

interface ICompWaypointObserver extends IComponent {
  observerConfig: {
    threshold: Array<number>;
    rootMargin: string;
  };

  settings: {
    delay: number;
    staggeringDelay: number;
    includeHolder: boolean;
    endless: boolean;
  };

  startObserving(el: NodeListOf<HTMLElement>): void;

  setSettings(el: Element): void;

  findWaypointTargets(el: Element): Array<HTMLElement>;

  getWaypointTargets(el: Element): Array<HTMLElement>;

  handleAnimateClasses(el: Array<HTMLElement>, settings: Settings): void;

  watchDomChanges(): void;
}

const getAttributeAsNumber = (
  element: Element,
  attributeName: string,
  defaultValue: number,
): number => {
  const value = element.getAttribute(attributeName);
  return value ? parseInt(value, 10) : defaultValue;
};

const animateElement = (element: HTMLElement, delay: number): void => {
  setTimeout(() => {
    element.classList.add('is-animated');
  }, delay);
};

const waypointObserver: ICompWaypointObserver = {
  name: 'waypointObserver',
  selectors: {
    waypointTarget: '[waypoint-target]:not([waypoint])',
  },
  settings: {
    delay: 50,
    staggeringDelay: 35,
    includeHolder: false,
    endless: false,
  },
  observerConfig: {
    threshold: [0],
    rootMargin: '0px 0px -10% 0px',
  },
  classes: {
    isInViewport: 'is-inViewport',
    isAnimated: 'is-animated',
  },

  startObserving(waypoints) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.setSettings(entry.target);
        const targets = this.getWaypointTargets(entry.target);

        if (entry.isIntersecting) {
          // Unobserve Element if endless setting false
          if (!this.settings.endless) {
            observer.unobserve(entry.target);
          }

          // Add in-view class for element
          if (!this.classes) return;
          entry.target.classList?.add(this.classes.isInViewport);

          // Animate Targets
          if (!targets) return;
          this.handleAnimateClasses(targets, this.settings);
        } else {
          // Add in-view class for element
          if (!this.classes) return;
          entry.target.classList?.remove(this.classes.isInViewport);
          targets?.forEach((target) => {
            if (target.classList?.contains('is-animated')) {
              target.classList?.remove('is-animated');
            }
          });
        }
      });
    }, this.observerConfig);

    waypoints.forEach((waypoint) => {
      observer.observe(waypoint);
    });
  },

  setSettings(waypoint) {
    this.settings.delay = getAttributeAsNumber(waypoint, 'waypoint-delay', this.settings.delay);

    this.settings.staggeringDelay = getAttributeAsNumber(
      waypoint,
      'waypoint-staggering-delay',
      this.settings.staggeringDelay,
    );

    this.settings.endless = waypoint.getAttribute('waypoint-endless') === 'true';

    this.settings.includeHolder = waypoint.getAttribute('waypoint-include-holder') === 'true';
  },

  findWaypointTargets(holder: HTMLElement): Array<HTMLElement> {
    if (!this.selectors) return [];
    const allTargets = holder.querySelectorAll<HTMLElement>(this.selectors.waypointTarget);

    return Array.from(allTargets).filter((target) => {
      return target.closest('[waypoint]') === holder;
    }) as Array<HTMLElement>;
  },

  getWaypointTargets(holder: HTMLElement): Array<HTMLElement> {
    if (!this.selectors) return [];
    let targets = [...this.findWaypointTargets(holder)];
    const holderIsTarget = holder.hasAttribute('waypoint-target');
    if (holderIsTarget && !this.settings.includeHolder) {
      // Animate the waypoint itself if there is a waypoint-target attribute
      targets = [holder];
    }

    if (holderIsTarget && this.settings.includeHolder) {
      // Animate also the holder element with the waypoint-targets
      targets = [holder, ...targets];
    }

    return targets;
  },

  handleAnimateClasses(targets: Array<HTMLElement>, settings: Settings): void {
    targets.forEach((target, index) => {
      let delay = settings.delay + settings.staggeringDelay * index;

      if (settings.staggeringDelay === 0) {
        delay = settings.delay;
      }

      if (!target.classList.contains('is-animated')) {
        animateElement(target, delay);
      }
    });
  },

  watchDomChanges() {
    const targetNode = document.body;
    const config = {
      childList: true,
      attributes: true,
      subtree: true,
    };

    const callback = (mutationList: MutationRecord[]) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
          const waypointEls = document.querySelectorAll('[waypoint]');
          this.startObserving(waypointEls as NodeListOf<HTMLElement>);
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  },

  init(waypointEls: NodeListOf<HTMLElement>) {
    this.startObserving(waypointEls);
    this.watchDomChanges();
  },
};

export default waypointObserver;
