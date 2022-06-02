import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    SITE_URL: 'http://craftcms-baukasten.test/',
    CP_TRIGGER: 'admin',
    CP_LOGIN: 'superuser',
    CP_PASSWORD: 'superuser',
    ENABLE_LIGHTHOUSE: true,
    LIGHTHOUSE_OPTIONS: {
      performance: 80,
      accessibility: 80,
      'best-practices': 0,
      seo: 0,
      pwa: 0,
      'first-contentful-paint': 2000,
      'largest-contentful-paint': 3000,
      'cumulative-layout-shift': 0.1,
      'speed-index': 1000,
      'server-response-time': 500,
    },
    LIGHTHOUSE_OPTIONS_DESKTOP: {
      formFactor: 'desktop',
      screenEmulation: {
        width: 1350,
        height: 940,
        deviceScaleRatio: 1,
        mobile: false,
        disable: false,
      },
      throttling: {
        rttMs: 40,
        throughputKbps: 11024,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0,
      },
    },
    ENABLE_PA11Y: false,
    PA11Y_OPTIONS: {
      runners: ['htmlcs'],
      standard: 'WCAG2AA',
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'http://craftcms-baukasten.test/',
    excludeSpecPattern: '**/examples/**/*.spec.js',
  },
});
