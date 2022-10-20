/*
 * Tailwind Color Settings
 * IMPORTANT: Custom colors MUST BE defined as HEX Value!!!
 * IMPORTANT: You should define the same colors for each theme based on the default theme
 * otherwise theming works not as expected, except for colors like "inherit", "current", and "transparent".
 *
 */

const colors = require('tailwindcss/colors');
const useMapDefaultColorPalette = require('./helpers/useMapDefaultColorPalette');

module.exports = [
  {
    name: 'default',
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      'keyboard-focus': '#ff98de',
      ...useMapDefaultColorPalette({ palette: colors.zinc, name: 'gray' }),
      ...useMapDefaultColorPalette({ palette: colors.emerald, name: 'primary' }),
      ...useMapDefaultColorPalette({ palette: colors.amber, name: 'secondary' }),
    },
  },
  // {
  //   name: 'monochrome',
  //   colors: {
  //     ...useMapDefaultColorPalette({ palette: colors.zinc, name: 'primary' }),
  //     ...useMapDefaultColorPalette({ palette: colors.neutral, name: 'secondary' }),
  //   },
  // },
];
