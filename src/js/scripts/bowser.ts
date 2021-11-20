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
  platform = 'unknownDevice';
}

if (typeof browserVersion === 'undefined') {
  browserVersion = 'null';
} else {
  browserVersion = browserVersion.toLowerCase().replace(' ', '-').split('.', 1)[0];
}
/* eslint-enable */

const browserDetect = {
  cfg: {
    customOutput: true,
    version: browserVersion,
    name: browserName.toLowerCase().replace(' ', '-'),
    platform,
  },

  useImagesWithoutSrcSet() {
    const images = [...document.querySelectorAll('[data-rootimage]')];

    if (images) {
      images.forEach((image) => {
        const rootImageUrl = image.getAttribute('data-rootimage');
        if (rootImageUrl) {
          image.setAttribute('src', rootImageUrl);
        }
      });
    }
  },

  replaceWebPWithFileType() {
    const images = [...document.querySelectorAll('img, source')];

    if (images) {
      images.forEach((image) => {
        const imageType = image.getAttribute('data-type');
        const dataSrcset = image.getAttribute('data-srcset');
        const srcset = image.getAttribute('srcset');
        const type = image.getAttribute('type');
        // const searchRegExp = new RegExp('\\.webp', 'g');
        const searchRegExp = /\\.webp/g;

        if (type) {
          image.removeAttribute('type');
        }
        if (dataSrcset) {
          image.setAttribute('data-srcset', dataSrcset.replace(searchRegExp, `.${imageType}`));
        }
        if (srcset && dataSrcset) {
          image.setAttribute('srcset', dataSrcset.replace(searchRegExp, `.${imageType}`));
        }
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
        case 'Micrdeviceoft Edge':
          document.documentElement.classList.add(
            'browser-edge',
            `browser-edge-${this.cfg.version}`,
            `device-${this.cfg.platform}`,
          );
          if (this.cfg.version < '18') {
            this.replaceWebPWithFileType();
          }
          break;

        case 'Internet Explorer':
          document.documentElement.classList.add(
            'browser-ie',
            `browser-ie-${this.cfg.version}`,
            `device-${this.cfg.platform}`,
          );
          this.useImagesWithoutSrcSet();
          this.replaceWebPWithFileType();
          break;

        case 'Firefox':
          document.documentElement.classList.add(
            'browser-firefox',
            `browser-firefox-${this.cfg.version}`,
            `device-${this.cfg.platform}`,
          );
          break;

        case 'Safari':
          document.documentElement.classList.add(
            'browser-safari',
            `browser-safari-${this.cfg.version}`,
            `device-${this.cfg.platform}`,
          );
          this.replaceWebPWithFileType();
          break;

        case 'Chrome':
          document.documentElement.classList.add(
            'browser-chrome',
            `browser-chrome-${this.cfg.version}`,
            `device-${this.cfg.platform}`,
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
        document.documentElement.classList.add('browser-oldies');
      }
    } else {
      // Generate Classes based on Browser and BrowserVersion
      document.documentElement.classList.add(
        this.cfg.name,
        `${this.cfg.name}-${this.cfg.version}`,
        `device-${this.cfg.platform}`,
      );
    }
  },
  /* eslint-enable */

  init() {
    this.detectBrowser();
  },
};

export default browserDetect;
