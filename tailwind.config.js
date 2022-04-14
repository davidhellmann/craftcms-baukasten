/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

const fluidType = require('tailwindcss-fluid-type');
const questionMark = require('tailwindcss-question-mark');
const forms = require('@tailwindcss/forms')({
  strategy: 'class',
});
const debugScreens = require('tailwindcss-debug-screens');

// Settings
const settingsGrid = require('./tailwind/tailwind.settings.grid');
const settingsColors = require('./tailwind/tailwind.settings.colors');
const settingsFontFamily = require('./tailwind/tailwind.settings.fontFamily');
const settingsfluidType = require('./tailwind/tailwind.settings.fluidType');
const settingsScreens = require('./tailwind/tailwind.settings.screens');
const settingsAspectRatio = require('./tailwind/tailwind.settings.aspectRatio');

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
      aspectRatio: { ...settingsAspectRatio },
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
    debugScreens,
    questionMark,
    fluidType,
    forms,
    ({ addComponents }) => {
      addComponents(pluginAddComponents);
    },
  ],
};
