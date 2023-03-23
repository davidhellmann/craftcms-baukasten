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
  getSettings(el: Element): Settings;
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
    staggeringDelay: 100,
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
        const settings = this.getSettings(entry.target);
        const targets = this.getWaypointTargets(entry.target);

        if (entry.isIntersecting) {
          // Unobserve Element if endless setting false
          if (!settings.endless) {
            observer.unobserve(entry.target);
          }

          // Add in-view class for element
          if (!this.classes) return;
          entry.target.classList?.add(this.classes.isInViewport);

          // Animate Targets
          if (!targets) return;
          this.handleAnimateClasses(targets, settings);
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

  getSettings(waypoint) {
    const settings: Settings = {
      delay: this.settings?.delay ?? 50,
      staggeringDelay: this.settings?.staggeringDelay ?? 100,
      endless: this.settings?.endless ?? false,
    };

    settings.delay = getAttributeAsNumber(waypoint, 'waypoint-delay', settings.delay);

    settings.staggeringDelay = getAttributeAsNumber(
      waypoint,
      'waypoint-staggering-delay',
      settings.staggeringDelay,
    );

    settings.endless = waypoint.getAttribute('waypoint-endless') === 'true';

    return settings;
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
      const delay = settings.delay + settings.staggeringDelay * index;

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
