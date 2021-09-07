/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

// Settings
const settingsScreens = require('./tailwind/tailwind.settings.screens');
const settingsGrid = require('./tailwind/tailwind.settings.grid');
const settingsFontSizes = require('./tailwind/tailwind.settings.fontSizes');
const settingsColors = require('./tailwind/tailwind.settings.colors');

// Plugins
const pluginAddComponents = require('./tailwind/tailwind.plugins.addComponents');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      '../templates/**/*.{twig,html,vue,js,ts}',
      '../src/vue/**/*.{vue,js,ts}',
    ],
    layers: ['base', 'components', 'utilities'],
    mode: 'layers',
    options: {
      safelist: ['../src/css/components/**/*.{pcss,css,js,ts}'],
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'Times New Roman', 'Times', 'serif'],
      mono: ['"JetBrains Mono"', '"Courier New"', 'Courier', 'monospace'],
    },
    fontSize: settingsFontSizes,
    colors: settingsColors,
    screens: settingsScreens,
    extend: {
      spacing: {
        '50vh': '50vh',
      },
      zIndex: {
        1000: '1000',
        10000: '10000',
        100000: '100000',
      },
      gridTemplateColumns: { ...settingsGrid.gridTemplateColumns },
      gridColumn: { ...settingsGrid.gridColumn },
      gridRowStart: { ...settingsGrid.gridRowStart },
      gridRowEnd: { ...settingsGrid.gridRowEnd },
      // Typography Plugin
      // typography: theme => (settingsProse(theme))
    },
  },
  variants: {},
  corePlugins: {
    float: false,
    container: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography')({
    //   modifiers: ['md'],
    // }),
    require('tailwindcss-question-mark'),
    function ({ addComponents }) {
      addComponents(pluginAddComponents);
    },
  ],
};
