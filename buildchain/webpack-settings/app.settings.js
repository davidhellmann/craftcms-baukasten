// app.settings.js

// node modules
require('dotenv').config();
const path = require('path');

// settings
module.exports = {
  alias: {
    '@': path.resolve('../src'),
  },
  copyright: 'David Hellmann',
  entry: {
    app: [
      '../src/js/app.ts',
      '../src/css/app.pcss',
      './node_modules/typeface-merriweather/files/merriweather-latin-900.woff2',
      './node_modules/typeface-merriweather/files/merriweather-latin-900.woff',
      './node_modules/typeface-merriweather/files/merriweather-latin-900italic.woff2',
      './node_modules/typeface-merriweather/files/merriweather-latin-900italic.woff',
      './node_modules/typeface-lato/files/lato-latin-300.woff2',
      './node_modules/typeface-lato/files/lato-latin-300.woff',
      './node_modules/typeface-lato/files/lato-latin-700.woff2',
      './node_modules/typeface-lato/files/lato-latin-700.woff',
      './node_modules/typeface-jetbrains-mono/dist/JetBrainsMono-Regular.woff2',
      './node_modules/typeface-jetbrains-mono/dist/JetBrainsMono-Regular.woff',
      './node_modules/typeface-jetbrains-mono/dist/JetBrainsMono-Bold.woff2',
      './node_modules/typeface-jetbrains-mono/dist/JetBrainsMono-Bold.woff',
    ],
    'lazysizes-wrapper': ['../src/js/utils/lazysizes-wrapper.ts'],
  },
  extensions: ['.ts', '.js', '.vue', '.json'],
  name: 'craftcms-baukasten',
  paths: {
    dist: path.resolve('../web/dist/'),
  },
  urls: {
    criticalCss: 'http://craftcms-baukasten.test/',
    publicPath: () => process.env.PUBLIC_PATH || '/dist/',
  },
};
