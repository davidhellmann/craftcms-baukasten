/**
 * code
 */

import ClipboardJS from 'clipboard';

const code = {
  cfg: {
    codeBlocks: [...document.querySelectorAll('.js-code')],
  },

  copyToClipboard() {
    new ClipboardJS('.js-codeCopy', {
      target: function(trigger) {
        return trigger.nextElementSibling;
      },
    });
  },

  toggleCodeBlock(els) {
    els.forEach(el => {
      const toggle = el.querySelector('.js-codeToggle');
      let status = el.getAttribute('data-status');
      const showText = toggle.getAttribute('data-show');
      const hideText = toggle.getAttribute('data-hide');

      // If Code larger then container show button else hide
      if (el.scrollHeight > el.clientHeight) {
        toggle.addEventListener('click', () => {
          if (status === 'open') {
            status = 'closed';
            toggle.innerHTML = showText;
            toggle.setAttribute('data-status', 'closed');
            toggle.parentElement.parentElement.setAttribute(
              'data-status',
              'closed',
            );
          } else {
            status = 'open';
            toggle.innerHTML = hideText;
            toggle.setAttribute('data-status', 'open');
            toggle.parentElement.parentElement.setAttribute(
              'data-status',
              'open',
            );
          }
        });
      } else {
        toggle.parentElement.parentElement.setAttribute('data-status', 'open');
        toggle.remove();
      }
    });
  },

  init() {
    if (!this.cfg.codeBlocks) return;
    this.toggleCodeBlock(this.cfg.codeBlocks);
    this.copyToClipboard();
  },
};

export default code;
