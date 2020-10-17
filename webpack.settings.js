// webpack.settings.js - webpack settings config

// node modules
require('dotenv').config();
const path = require('path');
const Terser = require('terser');
const Postcss = require('postcss');
const Cssnano = require('cssnano');

// Webpack settings exports
// noinspection WebpackConfigHighlighting
module.exports = {
  name: 'Craft Baukasten Sample',
  copyright: 'David Hellmann',
  paths: {
    src: {
      base: './src/',
      css: './src/css/',
      js: './src/js/',
    },
    dist: {
      base: './web/dist/',
      clean: ['**/*'],
    },
    templates: './templates/**/*.{twig,rss,csv,php,html}',
    ignore: [/node_modules/],
  },
  urls: {
    live: 'https://craft-baukasten.baukasten.io',
    staging: 'https://craft-baukasten.baukasten.io',
    local: 'http://craft-baukasten-sample.test',
    critical: 'http://craft-baukasten-sample.test',
    publicPath: () => process.env.PUBLIC_PATH || '/dist/',
  },
  vars: {
    cssName: 'styles',
  },
  entries: {
    app: 'app.js',
    css: 'css.js',
  },
  babelLoaderConfig: {
    exclude: [/(node_modules|bower_components)/],
  },
  copyWebpackConfig: [
    {
      context: './src/fonts/',
      from: '**/*',
      to: 'fonts',
    },
    {
      context: './src/img/svg/',
      from: '**/*',
      to: 'img/svg',
    },
    {
      context: './src/img/bitmap/',
      from: '**/*',
      to: 'img/bitmap',
    },
    {
      from: './src/js/workbox-catch-handler.js',
      to: 'js/[name].[ext]',
    },
    // copy and minify inlineJs
    {
      from: './src/inlineJs/tab-handler.js',
      to: 'js/[name].[ext]',
      transform(content) {
        return Terser.minify(content.toString()).code;
      },
    },
    // copy and minify inlineJs
    {
      from: './src/inlineJs/service-worker.js',
      to: 'js/[name].[ext]',
      transform(content) {
        return Terser.minify(content.toString()).code;
      },
    },
  ],
  criticalCssConfig: {
    base: './web/dist/criticalcss/',
    suffix: '_critical.min.css',
    criticalWidth: 1920,
    criticalHeight: 1440,
    ampPrefix: 'amp_',
    ampCriticalWidth: 600,
    ampCriticalHeight: 19200,
    criticalIgnore: [],
    pages: [
      {
        url: '',
        template: 'index',
      },
    ],
  },
  devServerConfig: {
    public: () => process.env.DEVSERVER_PUBLIC || 'http://localhost:8080',
    host: () => process.env.DEVSERVER_HOST || 'localhost',
    poll: () => process.env.DEVSERVER_POLL || false,
    port: () => process.env.DEVSERVER_PORT || 8080,
    https: () => process.env.DEVSERVER_HTTPS || false,
  },
  manifestConfig: {
    basePath: '',
  },
  saveRemoteFileConfig: [
    {
      url: 'https://www.google-analytics.com/analytics.js',
      filepath: 'js/analytics.js',
    },
  ],
  createSymlinkConfig: [
    {
      origin: 'img/favicons/favicon.ico',
      symlink: '../favicon.ico',
    },
  ],
  webappConfig: {
    logo: './src/img/favicon-src.png',
    prefix: 'img/favicons/',
  },
  workboxConfig: {
    swDest: '../sw.js',
    precacheManifestFilename: 'js/precache-manifest.[manifestHash].js',
    importScripts: ['/dist/js/workbox-catch-handler.js'],
    exclude: [
      /\.(png|jpe?g|gif|svg|webp)$/i,
      /\.map$/,
      /^manifest.*\\.js(?:on)?$/,
    ],
    globDirectory: './web/',
    globPatterns: ['offline.html', 'offline.svg'],
    offlineGoogleAnalytics: true,
    runtimeCaching: [
      {
        urlPattern: /\/admin.*$/,
        handler: 'networkOnly',
      },
      {
        urlPattern: /\.php$/,
        handler: 'networkOnly',
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 20,
          },
        },
      },
    ],
  },
};
