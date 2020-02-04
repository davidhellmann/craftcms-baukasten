/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

const schriftPlugin = require('tailwindcss-schrift');
const baukastenConfig = require('./baukasten.config');

module.exports = {
  theme: {
    // Extend the default Tailwind config here
    colors: baukastenConfig.colors,
    maxWidth: {
      'none': 'none',
      'full': '100%',
      ...baukastenConfig.breakpoints
    },
    screens: baukastenConfig.breakpoints,
    width: {
      '0': '0',
      'full': '100%',
      'screen': '100vw',
      'auto': 'auto',
      ...baukastenConfig.cols6,
      ...baukastenConfig.cols10,
      ...baukastenConfig.cols12,
      ...baukastenConfig.cols24,
    },
    spacing: {
      ...baukastenConfig.spacingPxSmall,
      ...baukastenConfig.spacingPxBig,
      ...baukastenConfig.spacingRem,
    },
    borderRadius: baukastenConfig.borderRadius,
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.black', 'currentColor'),
    }),
    borderWidth: baukastenConfig.borderWidth,
    boxShadow: baukastenConfig.boxShadow,
    fontFamily: baukastenConfig.fontFamily,
    extend: {
      opacity: baukastenConfig.opacity
    },
    // Replace the default Tailwind config here
    schrift: baukastenConfig.schrift,
  },
  corePlugins: {
    container: false,
    fontSize: false
  },
  plugins: [
    schriftPlugin(),
    function ({addComponents, config}) {
      const grid = {
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: config('theme.screens.max'),
          paddingLeft: config('theme.spacing.2'),
          paddingRight: config('theme.spacing.2'),
        },
        '.row': {
          marginLeft: `-${config('theme.spacing.2')}`,
          marginRight: `-${config('theme.spacing.2')}`,
          flexFlow: 'row wrap',
          flex: '1 1 0',
          display: 'flex',
        },
      };

      addComponents(grid);
    },
  ],
};

/*
 * screens: overwrite --- done
 * colors: overwrite (rgb, black, white, transparent) --- done
 * spacings: extend --- done
 * border-radius: overwrite, none --- done
 * borderColor: overwrite, default black, currentColor --- done
 * borderWidth: overwerite, 1-5px --- done
 * box-shadows: overwrite, none --- done
 * container: false (custom) --- done
 * fonts: sans, serif, mono leeres array auskommentiert --- done
 * fontSize: false --- done
 * maxWidth: none muss noch rein. --- done
 * opacity: extend, leeres object --- done
 *
 *
 * */
