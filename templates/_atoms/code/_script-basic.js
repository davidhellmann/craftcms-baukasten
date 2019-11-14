/**
 * code
 */

const code = {
  cfg: {
    codeBlocks: [...document.querySelectorAll('.js-code.variant-basic')],
  },

  toggleCodeBlock(els) {
    els.forEach(el => {
      const toggle = el.nextElementSibling;
      let status = el.getAttribute('data-status');
      const textHolder = toggle.querySelector('.js-textHolder');
      const showText = toggle.getAttribute('data-show');
      const hideText = toggle.getAttribute('data-hide');

      toggle.addEventListener('click', () => {
        if (status === 'open') {
          status = 'closed';
          textHolder.innerHTML = showText;
          toggle.setAttribute('data-status', 'closed');
          toggle.previousElementSibling.setAttribute('data-status', 'closed');
        } else {
          status = 'open';
          textHolder.innerHTML = hideText;
          toggle.setAttribute('data-status', 'open');
          toggle.previousElementSibling.setAttribute('data-status', 'open');
        }
      });
    });
  },

  init() {
    if (this.cfg.codeBlocks) {
      this.toggleCodeBlock(this.cfg.codeBlocks);
    }
  },
};

export default code;
