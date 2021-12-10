/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

// Settings
const settingsGrid = require('./tailwind/tailwind.settings.grid');
const settingsColors = require('./tailwind/tailwind.settings.colors');
const settingsFontFamily = require('./tailwind/tailwind.settings.fontFamily');
const settingsfluidType = require('./tailwind/tailwind.settings.fluidType');
const settingsScreens = require('./tailwind/tailwind.settings.screens');

// Plugins
const pluginAddComponents = require('./tailwind/tailwind.plugins.addComponents');

module.exports = {
  content: ['./templates/**/*.{twig,html,vue,js,ts}', './src/vue/**/*.{vue,js,ts}'],
  safelist: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: settingsFontFamily,
    fluidType: settingsfluidType,
    colors: settingsColors,
    screens: settingsScreens,
    extend: {
      gridTemplateColumns: { ...settingsGrid.gridTemplateColumns },
      gridColumn: { ...settingsGrid.gridColumn },
      gridRowStart: { ...settingsGrid.gridRowStart },
      gridRowEnd: { ...settingsGrid.gridRowEnd },
    },
    // Plugin Stuff
    debugScreens: {
      ignore: ['nthover'],
      position: ['bottom', 'right'],
    },
  },
  variants: {},
  corePlugins: {
    container: false,
    fontSize: false, // disable cause we use the fluid type plugin
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-question-mark'),
    require('tailwindcss-fluid-type'),
    function ({ addComponents }) {
      addComponents(pluginAddComponents);
    },
  ],
};
