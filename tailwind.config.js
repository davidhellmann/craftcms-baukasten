/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

// Settings
const settingsGrid = require('./tailwind/tailwind.settings.grid');
const settingsColors = require('./tailwind/tailwind.settings.colors');

// Plugins
const pluginAddComponents = require('./tailwind/tailwind.plugins.addComponents');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './templates/**/*.{twig,html,vue,js,ts}',
      './src/vue/**/*.{vue,js,ts}',
    ],
    layers: ['base', 'components', 'utilities'],
    mode: 'layers',
    options: {
      safelist: ['./src/css/components/**/*.{pcss,css,js,ts}'],
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'Times New Roman', 'Times', 'serif'],
      mono: ['"JetBrains Mono"', '"Courier New"', 'Courier', 'monospace'],
    },
    colors: settingsColors,
    extend: {
      gridTemplateColumns: { ...settingsGrid.gridTemplateColumns },
      gridColumn: { ...settingsGrid.gridColumn },
      gridRowStart: { ...settingsGrid.gridRowStart },
      gridRowEnd: { ...settingsGrid.gridRowEnd },
      screens: {
        nthover: { raw: '(hover: hover)' },
      }
    },
    // Plugin Stuff
    debugScreens: {
      ignore: ['nthover'],
      position: ['bottom', 'right'],
    },
  },
  variants: {},
  corePlugins: {
    float: false,
    container: false,
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
