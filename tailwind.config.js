/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

import schriftPlugin from 'tailwindcss-schrift';
import baukastenConfig from './baukasten.config';

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
