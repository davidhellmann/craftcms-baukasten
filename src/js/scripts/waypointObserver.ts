import { IComponent } from '../@types/IComponent';

interface Settings {
  delay: number;
  staggeringDelay: number;
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
    endless: boolean;
  };

  startObserving(el: NodeListOf<HTMLElement>): void;
  setSettings(el: Element): void;
  getWaypointTargets(el: Element): Array<HTMLElement>;
  handleAnimateClasses(el: Array<HTMLElement>, settings: Settings): void;
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
    waypointTarget: '[waypoint-target]',
  },
  settings: {
    delay: 50,
    staggeringDelay: 25,
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
  },

  getWaypointTargets(holder): Array<HTMLElement> {
    if (!this.selectors) return [];
    let targets = [...holder.querySelectorAll<HTMLElement>(this.selectors.waypointTarget)];
    const holderHasTargets = holder.hasAttribute('waypoint-target');
    if (targets.length <= this.observerConfig.threshold[0] && holderHasTargets) {
      // Animate the waypoint itself if no targets exists
      targets = [holder as HTMLElement];
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

  init(waypointEls: NodeListOf<HTMLElement>) {
    this.startObserving(waypointEls);
  },
};

export default waypointObserver;
