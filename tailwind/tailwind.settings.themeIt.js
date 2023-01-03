/*
 * Tailwind Theme it Settings
 */

const colors = require('tailwindcss/colors');

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
      gray: colors.zinc,
      primary: colors.green,
      secondary: colors.emerald,
    },
  },
  {
    name: 'monochrome',
    colors: {
      primary: colors.neutral,
      secondary: colors.stone,
    },
  },
  {
    name: 'blue',
    colors: {
      primary: colors.blue,
      secondary: colors.sky,
    },
  },
  {
    name: 'red',
    colors: {
      primary: colors.red,
      secondary: colors.rose,
    },
  },
  {
    name: 'purple',
    colors: {
      primary: colors.purple,
      secondary: colors.violet,
    },
  },
];
