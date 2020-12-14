// app.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
  alias: {},
  copyright: 'David Hellmann',
  entry: {
    app: [
      './src/js/app.ts',
      './src/css/app-base.pcss',
      './src/css/app-components.pcss',
      './src/css/app-utilities.pcss',
    ],
    'lazysizes-wrapper': ['./src/js/utils/lazysizes-wrapper.ts'],
  },
  extensions: ['.ts', '.js', '.vue', '.json'],
  name: 'craftcms-baukasten',
  paths: {
    dist: './web/dist/',
  },
  urls: {
    criticalCss: 'http://craftcms-baukasten.test/',
    publicPath: () => process.env.PUBLIC_PATH || '/dist/',
  },
};
