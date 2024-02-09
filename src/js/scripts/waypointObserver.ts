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

  handleAnimateAttributes(el: Array<HTMLElement>, settings: Settings): void;

  watchDomChanges(): void;

  init(el: HTMLElement | NodeListOf<HTMLElement>): void;
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
    element.setAttribute('data-waypoint-animated', 'true');
  }, delay);
};

const waypointObserver: ICompWaypointObserver = {
  name: 'waypointObserver',
  selectors: {
    waypointTarget: '[data-waypoint-target]:not([data-waypoint])',
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
          entry.target.setAttribute('data-waypoint-in-viewport', 'true');

          // Animate Targets
          if (!targets) return;
          this.handleAnimateAttributes(targets, this.settings);
        } else {
          // Add in-view class for element
          entry.target.removeAttribute('data-waypoint-in-viewport');
          targets?.forEach((target) => {
            if (target.hasAttribute('data-waypoint-animated')) {
              target.removeAttribute('data-waypoint-animated');
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
    this.settings.delay = getAttributeAsNumber(
      waypoint,
      'data-waypoint-delay',
      this.settings.delay,
    );

    this.settings.staggeringDelay = getAttributeAsNumber(
      waypoint,
      'data-waypoint-staggering-delay',
      this.settings.staggeringDelay,
    );

    this.settings.endless = waypoint.getAttribute('data-waypoint-endless') === 'true';

    this.settings.includeHolder = waypoint.getAttribute('data-waypoint-include-holder') === 'true';
  },

  findWaypointTargets(holder: HTMLElement): Array<HTMLElement> {
    if (!this.selectors) return [];
    const allTargets = holder.querySelectorAll<HTMLElement>(this.selectors.waypointTarget);

    return Array.from(allTargets).filter((target) => {
      return target.closest('[data-waypoint]') === holder;
    }) as Array<HTMLElement>;
  },

  getWaypointTargets(holder: HTMLElement): Array<HTMLElement> {
    if (!this.selectors) return [];
    let targets = [...this.findWaypointTargets(holder)];
    const holderIsTarget = holder.hasAttribute('data-waypoint-target');
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

  handleAnimateAttributes(targets: Array<HTMLElement>, settings: Settings): void {
    targets.forEach((target, index) => {
      let delay = settings.delay + settings.staggeringDelay * index;

      if (settings.staggeringDelay === 0) {
        delay = settings.delay;
      }

      if (!target.hasAttribute('data-waypoint-animated')) {
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
          const waypointEls = document.querySelectorAll('[data-waypoint]');
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
