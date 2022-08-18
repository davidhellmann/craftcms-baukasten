/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */
/** @type {import('tailwindcss').Config} */

// Settings
const settingsGrid = require('./tailwind/tailwind.settings.grid');
const settingsFluidType = require('./tailwind/tailwind.settings.fluidType');
const settingsFontFamily = require('./tailwind/tailwind.settings.fontFamily');
const settingsScreens = require('./tailwind/tailwind.settings.screens');
const settingsAspectRatio = require('./tailwind/tailwind.settings.aspectRatio');

const questionMark = require('tailwindcss-question-mark');
const fluidType = require('tailwindcss-fluid-type')(settingsFluidType);
const forms = require('@tailwindcss/forms')({
  strategy: 'class',
});
const debugScreens = require('tailwindcss-debug-screens');

// Plugins
const pluginAddComponents = require('./tailwind/tailwind.plugins.addComponents');
const pluginMultiTheme = require('./tailwind/tailwind.plugins.multiTheme');

module.exports = {
  content: ['./templates/**/*.{twig,html,vue,js,ts}', './src/vue/**/*.{vue,js,ts}'],
  safelist: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: settingsFontFamily,
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
    fluidType,
    forms,
    pluginMultiTheme,
    questionMark,
    ({ addComponents }) => {
      addComponents(pluginAddComponents);
    },
  ],
};
