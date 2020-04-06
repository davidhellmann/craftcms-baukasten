/**
 * ScrollMonitor
 */

import scrollMonitor from 'scrollmonitor';

const scrollMonitorScript = {
  handleWaypointTriggers(waypointTriggers) {
    waypointTriggers.forEach(waypointTrigger => {
      const elementWatcher = scrollMonitor.create(waypointTrigger);

      elementWatcher.enterViewport(() => {
        waypointTrigger.classList.add('is-inViewport');

        // Get all elements
        const waypointTriggerEls = waypointTrigger.querySelectorAll(
          '[waypoint]',
        );
        if (waypointTriggerEls) {
          this.handleAnimateClasses(waypointTriggerEls);
        }
        // Do it just on time
        elementWatcher.destroy();
      });
    });
  },

  handleAnimateClasses(waypointTriggerEls) {
    waypointTriggerEls.forEach((waypointTriggerEl, index) => {
      const delay = 250 + 100 * index;

      if (!waypointTriggerEl.classList.contains('is-animated')) {
        setTimeout(() => {
          waypointTriggerEl.classList.add('is-animated');
        }, delay);
      }
    });
  },

  init() {
    const waypointTriggers = document.querySelectorAll('[waypointTrigger]');
    if (waypointTriggers) {
      this.handleWaypointTriggers(waypointTriggers);
    }
  },
};

export default scrollMonitorScript;
