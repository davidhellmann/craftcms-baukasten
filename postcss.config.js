let functions = require('./postcss.functions');
let mixins = require('./postcss.mixins');

module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [require('stylelint')],
    }),
    require('tailwindcss')('./tailwind.config.js'),
    /*require('postcss-functions')({
      functions,
    }),
    require('postcss-mixins')({
      mixins,
    }),
    require('postcss-css-variables'),*/
    require('postcss-fixes'),
    require('postcss-preset-env')({
      autoprefixer: { grid: true },
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};
