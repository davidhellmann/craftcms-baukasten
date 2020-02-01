/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

const schriftPlugin = require('tailwindcss-schrift');
const baukastenConfig = require('./baukasten.config');

module.exports = {
  theme: {
    // Extend the default Tailwind config here
    extend: {
      colors: baukastenConfig.colors,
      width: {
        ...baukastenConfig.cols6,
        ...baukastenConfig.cols10,
        ...baukastenConfig.cols12,
        ...baukastenConfig.cols24,
      },
      maxWidth: baukastenConfig.breakpoints
    },
    // Replace the default Tailwind config here
    schrift: baukastenConfig.schrift,
    screens: baukastenConfig.breakpoints,
    spacing: {
      ...baukastenConfig.spacingPxSmall,
      ...baukastenConfig.spacingPxBig,
      ...baukastenConfig.spacingRem,
    },
  },
  corePlugins: {},
  plugins: [
    schriftPlugin()
  ],
};

/*
* screens: overwrite
* colors: overwrite (rgb, black, white, transparent)
* spacings: extend
* border-radius: overwrite, none
* borderColor: overwrite, default black, currentColor
* borderWidth: overwerite, 1-5px
* box-shadows: overwrite, none
* container: false
* fonts: sans, serif, mono leeres array auskommentiert
* fontSize: false
* maxWidth: none muss noch rein.
* opacity: extend, leeres object
*
*
* */
