// copy.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
  copy: [
    {
      from: '../src/js/example-file.js',
      to: 'js/[name].[ext]',
      noErrorOnMissing: true,
    },
    {
      context: '../src/img/svg/',
      from: '**/*',
      to: 'img/svg',
    },
    {
      context: '../src/img/bitmap/',
      from: '**/*',
      to: 'img/bitmap',
    },
    // {
    //   context: '../src/fonts/',
    //   from: '**/*',
    //   to: 'fonts',
    // },
  ],
};
