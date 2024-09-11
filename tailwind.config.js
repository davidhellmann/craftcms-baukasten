/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

/** @type {import('tailwindcss').Config} */

// plugins
import containerQuerries from '@tailwindcss/container-queries';
import fluidType from 'tailwindcss-fluid-type';
import components from './tailwind/tailwind.plugins.addComponents';

// Settings
import settingsGrid from './tailwind/tailwind.settings.grid';
import settingsfluidType from './tailwind/tailwind.settings.fluidType';
import colors from 'tailwindcss/colors.js';

export default {
  content: ['./templates/**/*.{twig,html,vue,js,ts,json}', './src/vue/**/*.{vue,js,ts}'],
  safelist: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
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
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'Times New Roman', 'Times', 'serif'],
      mono: ['"JetBrains Mono"', '"Courier New"', 'Courier', 'monospace'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      nthover: { raw: '(hover: hover)' },
    },
    extend: {
      gridTemplateColumns: { ...settingsGrid.gridTemplateColumns },
      gridColumn: { ...settingsGrid.gridColumn },
      gridRowStart: { ...settingsGrid.gridRowStart },
      gridRowEnd: { ...settingsGrid.gridRowEnd },
      aspectRatio: {
        landscape: '3 / 2',
        portrait: '2 / 3',
      },
      transitionTimingFunction: {
        'out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      },
    },
  },
  variants: {},
  corePlugins: {
    container: false,
    fontSize: false,
  },
  plugins: [
    containerQuerries,
    fluidType({
      ...settingsfluidType,
    }),
    ({ addComponents }) => {
      addComponents(components);
    },
  ],
};
