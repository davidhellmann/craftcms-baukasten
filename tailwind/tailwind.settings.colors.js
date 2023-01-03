/*
 * Tailwind Color Settings
 * IMPORTANT: Custom colors must be defined as HEX ('red-500': '#fff' or 'red-500': '#ffffff') or RGB ('red-500': '255 0 0')
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
  {
    name: 'monochrome',
    colors: {
      ...useMapDefaultColorPalette({ palette: colors.zinc, name: 'primary' }),
      ...useMapDefaultColorPalette({ palette: colors.neutral, name: 'secondary' }),
    },
  },
  {
    name: 'blue',
    colors: {
      ...useMapDefaultColorPalette({ palette: colors.blue, name: 'primary' }),
      ...useMapDefaultColorPalette({ palette: colors.fuchsia, name: 'secondary' }),
    },
  },
];
