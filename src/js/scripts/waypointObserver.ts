import { IComponent } from '../@types/IComponent';

interface Settings {
  delay: number;
  staggeringDelay: number;
  endless: boolean;
}

interface ICompWaypointObserver extends IComponent {
  observerConfig: {
    [key: string]: string | Array<number>;
  };

  settings: {
    delay: number;
    staggeringDelay: number;
    endless: boolean;
  };

  startObserving(el: Array<HTMLElement>): void;
  getSettings(el: Element): Settings;
  getWaypointTargets(el: Element): Array<HTMLElement> | Array<any>;
  handleAnimateClasses(el: Array<HTMLElement>, settings: Settings): void;
}

const waypointObserver: ICompWaypointObserver = {
  name: 'waypointObserver',
  selectors: {
    waypointTarget: '[waypoint-target]',
  },
  settings: {
    delay: 250,
    staggeringDelay: 100,
    endless: false,
  },
  observerConfig: {
    threshold: [0],
    rootMargin: '0px 0px -33% 0px',
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
          entry.target.classList.add(this.classes.isInViewport);

          // Animate Targets
          if (!targets) return;
          this.handleAnimateClasses(targets, settings);
        } else {
          // Add in-view class for element
          if (!this.classes) return;
          entry.target.classList.remove(this.classes.isInViewport);
          targets?.forEach((target) => {
            if (target.classList.contains('is-animated')) {
              target.classList.remove('is-animated');
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
      delay: this?.settings?.delay,
      staggeringDelay: this?.settings?.staggeringDelay,
      endless: this?.settings?.endless,
    };

    if (waypoint.hasAttribute('waypoint-delay')) {
      settings.delay = parseInt(<string>waypoint.getAttribute('waypoint-delay'), 10);
    }

    if (waypoint.hasAttribute('waypoint-staggering-delay')) {
      settings.staggeringDelay = parseInt(
        <string>waypoint.getAttribute('waypoint-staggering-delay'),
        10,
      );
    }

    if (waypoint.hasAttribute('waypoint-endless')) {
      settings.endless = waypoint.getAttribute('waypoint-endless') === 'true';
    }

    return settings;
  },

  getWaypointTargets(holder) {
    if (!this.selectors) return [];
    let targets = [...holder.querySelectorAll<HTMLElement>(this.selectors.waypointTarget)];
    const holderHasTargets = holder.hasAttribute('waypoint-target');
    if (targets.length <= this.observerConfig.threshold[0] && holderHasTargets) {
      // Animate the waypoint itself if no targets exists
      targets = [holder as HTMLElement];
    }

    return targets;
  },

  handleAnimateClasses(targets, settings) {
    targets.forEach((target, index) => {
      if (!settings.delay || !settings.staggeringDelay) return;
      const delay = settings.delay + settings.staggeringDelay * index;

      if (!target.classList.contains('is-animated')) {
        setTimeout(() => {
          target.classList.add('is-animated');
        }, delay);
      }
    });
  },

  init(waypointEls: Array<HTMLElement>) {
    this.startObserving(waypointEls);
  },
};

export default waypointObserver;
