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
  toggleContent(event) {
    event.preventDefault();
    const target = event.currentTarget;
    const accContent = target.nextElementSibling;

    if (!target.classList.contains(this.cfg.status)) {
      target.classList.add(this.cfg.status);
      accContent.style.display = 'block';
    } else {
      target.classList.remove(this.cfg.status);
      accContent.style.display = 'none';
    }
  },

  // Init
  init() {
    this.cfg.triggers.forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        this.toggleContent(event);
      });
    });
  },
};

export default accordion;
