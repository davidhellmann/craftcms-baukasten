import {IComponent} from '../@types/IComponent'

interface ICompWaypointObserver extends IComponent {
  observerConfig: {
    [key: string]: string | Array<number>
  },

  setElements(): void,
  startObserving(el: HTMLElement | Array<HTMLElement>): void,
  getSettings(el: HTMLElement): void,
  getWaypointTargets(el: HTMLElement): void,
  handleAnimateClasses(el: Array<HTMLElement>, settings: object): void,
}

const waypointObserver: ICompWaypointObserver = {
  name: 'waypointObserver',
  selectors: {
    waypoint: '[waypoint]',
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
  els: {
    $waypoints: null,
    $waypointTargets: null,
  },

  setElements() {
    this.els.$waypoints = [
      ...document.querySelectorAll(this.selectors.waypoint),
    ];
  },

  startObserving(waypoints) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const settings = this.getSettings(entry.target);
        const targets = this.getWaypointTargets(entry.target);

        if (entry.isIntersecting) {
          // Unobserve Element if endless setting false
          if (!settings.endless) {
            observer.unobserve(entry.target);
          }

          // Add in-view class for element
          entry.target.classList.add(this.classes.isInViewport);

          // Animate Targets
          this.handleAnimateClasses(targets, settings);
        } else {
          // Add in-view class for element
          entry.target.classList.remove(this.classes.isInViewport);
          targets.forEach(target => {
            if (target.classList.contains('is-animated')) {
              target.classList.remove('is-animated');
            }
          });
        }
      });
    }, this.observerConfig);

    waypoints.forEach(waypoint => {
      observer.observe(waypoint);
    });
  },

  getSettings(waypoint) {
    const settings = {
      delay: this.settings.delay,
      staggeringDelay: this.settings.staggeringDelay,
      endless: this.settings.endless,
    };

    if (waypoint.hasAttribute('waypoint-delay')) {
      settings.delay = parseInt(waypoint.getAttribute('waypoint-delay'), 10);
    }

    if (waypoint.hasAttribute('waypoint-staggering-delay')) {
      settings.staggeringDelay = parseInt(
        waypoint.getAttribute('waypoint-staggering-delay'),
        10,
      );
    }

    if (waypoint.hasAttribute('waypoint-endless')) {
      settings.endless = waypoint.getAttribute('waypoint-endless') === 'true';
    }

    return settings;
  },

  getWaypointTargets(holder) {
    let targets;

    // Get all targets
    if (!this.els) return;
    this.els.$waypointTargets = [
      ...holder.querySelectorAll<HTMLElement>(this.selectors.waypointTarget),
    ];

    const length:number = this.els.$waypointTargets.length;
    const threshold = this.observerConfig.threshold.length;

    if (length > threshold) {
      // Animate Targets if exits
      targets = this.els.$waypointTargets;
    } else if (holder.hasAttribute('waypoint-target')) {
      // Animate the waypoint itself if no targets exists
      targets = '[waypoint]';
    }

    return targets;
  },

  handleAnimateClasses(targets, settings) {
    targets.forEach((target, index) => {
      const delay = settings.delay + settings.staggeringDelay * index;

      if (!target.classList.contains('is-animated')) {
        setTimeout(() => {
          target.classList.add('is-animated');
        }, delay);
      }
    });
  },

  init(waypointEls:Array<HTMLElement>) {
    // Set Elements
    this.setElements();

    // Handle Waypoints
    if (!this.els) return;
    this.els.$waypoints = waypointEls;
    this.startObserving(this.els.$waypoints);
  },
};

export default waypointObserver;
