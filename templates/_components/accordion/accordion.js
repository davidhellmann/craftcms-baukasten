/**
 * accordion
 */

const accordion = {
  // Config
  cfg: {
    body: document.body,
    triggers: [...document.querySelectorAll('.js-accordionTrigger')],
    status: 'is-open',
  },

  // Toggle Content
  toggleContent(e) {
    if (!e.currentTarget.classList.contains(this.cfg.status)) {
      e.currentTarget.classList.add(this.cfg.status);
    } else {
      e.currentTarget.classList.remove(this.cfg.status);
    }
  },

  // Init
  init() {
    if (!this.cfg.triggers) return;
    this.cfg.triggers.forEach(trigger => {
      trigger.addEventListener('click', event => {
        this.toggleContent(event);
      });
    });
  },
};

export default accordion;
