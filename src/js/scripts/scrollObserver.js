/**
 * ScrollMonitor
 */

const scrollMonitorScript = {
  cfg: {
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
      $waypoints: undefined,
      $waypointTargets: undefined,
    },
  },

  setElements() {
    this.cfg.els.$waypoints = [
      ...document.querySelectorAll(this.cfg.selectors.waypoint),
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
          entry.target.classList.add(this.cfg.classes.isInViewport);

          // Animate Targets
          this.handleAnimateClasses(targets, settings);
        } else {
          // Add in-view class for element
          entry.target.classList.remove(this.cfg.classes.isInViewport);
          targets.forEach(target => {
            if (target.classList.contains('is-animated')) {
              target.classList.remove('is-animated');
            }
          });
        }
      });
    }, this.cfg.observerConfig);

    waypoints.forEach(waypoint => {
      observer.observe(waypoint);
    });
  },

  getSettings(waypoint) {
    const settings = {
      delay: this.cfg.settings.delay,
      staggeringDelay: this.cfg.settings.staggeringDelay,
      endless: this.cfg.settings.endless,
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
    this.cfg.els.$waypointTargets = [
      ...holder.querySelectorAll(this.cfg.selectors.waypointTarget),
    ];

    if (
      this.cfg.els.$waypointTargets.length > this.cfg.observerConfig.threshold
    ) {
      // Animate Targets if exits
      targets = this.cfg.els.$waypointTargets;
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

  init() {
    // Set Elements
    this.setElements();

    // Handle Waypoints
    if (!this.cfg.els.$waypoints) return;
    this.startObserving(this.cfg.els.$waypoints);
  },
};

export default scrollMonitorScript;
