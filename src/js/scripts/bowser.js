/**
 * Browser detect
 */

import Bowser from 'bowser';

/* eslint-disable */
const browser = Bowser.getParser(window.navigator.userAgent);
const browserName = browser.getBrowserName();
let platform = browser.getPlatformType();
let browserVersion = browser.getBrowserVersion();

if (typeof platform === 'undefined') {
  platform = null;
}

if (typeof browserVersion === 'undefined') {
  browserVersion = null;
} else {
  browserVersion = browserVersion
    .toLowerCase()
    .replace(' ', '-')
    .split('.', 1)[0];
}
/* eslint-enable */

const browserDetect = {
  cfg: {
    customOutput: true,
    docHead: document.querySelector('html'),
    version: browserVersion,
    name: browserName.toLowerCase().replace(' ', '-'),
    platform,
  },

  useImagesWithoutSrcSet() {
    const images = [...document.querySelectorAll('[data-rootimage]')];

    if (images) {
      images.forEach(image => {
        const rootImageUrl = image.getAttribute('data-rootimage');
        image.setAttribute('src', rootImageUrl);
      });
    }
  },

  /**
   *
   */
  /* eslint-disable */
  detectBrowser() {
    if (this.cfg.customOutput) {
      // Use the switch condition if you want to customize the output
      switch (browserName) {
        case 'Microsoft Edge':
          this.cfg.docHead.classList.add(
            'browser-edge',
            `browser-edge-${this.cfg.version}`,
            `os-${this.cfg.platform}`,
          );
          break;

        case 'Internet Explorer':
          this.cfg.docHead.classList.add(
            'browser-ie',
            `browser-ie-${this.cfg.version}`,
            `os-${this.cfg.platform}`,
          );
          this.useImagesWithoutSrcSet();
          break;

        case 'Firefox':
          this.cfg.docHead.classList.add(
            'browser-firefox',
            `browser-firefox-${this.cfg.version}`,
            `os-${this.cfg.platform}`,
          );
          break;

        case 'Safari':
          this.cfg.docHead.classList.add(
            'browser-safari',
            `browser-safari-${this.cfg.version}`,
            `os-${this.cfg.platform}`,
          );
          break;

        case 'Chrome':
          this.cfg.docHead.classList.add(
            'browser-chrome',
            `browser-chrome-${this.cfg.version}`,
            `os-${this.cfg.platform}`,
          );
          break;

        default:
      }

      // Generate Class for Browser with the old CSS Grid Spec
      const oldSpecBrowser = [
        'internet-explorer-10',
        'internet-explorer-11',
        'microsoft-edge-12',
        'microsoft-edge-13',
        'microsoft-edge-14',
        'microsoft-edge-15',
      ];

      if (oldSpecBrowser.includes(`${this.cfg.name}-${this.cfg.version}`)) {
        this.cfg.docHead.classList.add('browser-oldies');
      }
    } else {
      // Generate Classes based on Browser and BrowserVersion
      this.cfg.docHead.classList.add(
        this.cfg.name,
        `${this.cfg.name}-${this.cfg.version}`,
        `os-${this.cfg.platform}`,
      );
    }
  },
  /* eslint-enable */

  init() {
    this.detectBrowser();
  },
};

export default browserDetect;
