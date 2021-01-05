/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      '../templates/**/*.{twig,html,vue,js,ts}',
      '../src/vue/**/*.{vue,js,ts}',
    ],
    layers: ['base', 'components', 'utilities'],
    mode: 'layers',
    options: {
      whitelist: ['../src/css/components/**/*.{pcss,css}'],
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'Times New Roman', 'Times', 'serif'],
      mono: ['JetBrains Mono', 'Courier New', 'Courier', 'monospace'],
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: {
        100: colors.red['100'],
        500: colors.red['500'],
        900: colors.red['900'],
      },
      yellow: {
        100: colors.yellow['100'],
        500: colors.yellow['500'],
        900: colors.yellow['900'],
      },
      green: {
        100: colors.green['100'],
        500: colors.green['500'],
        900: colors.green['900'],
      },
    },
    extend: {
      spacing: {
        '50vh': '50vh',
      },
      zIndex: {
        1000: '1000',
        10000: '10000',
        100000: '100000',
      },
    },
  },
  variants: {},
  corePlugins: {
    float: false,
    container: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-question-mark'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen md': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen xl': {
            maxWidth: 'calc(theme(screens.xl) + 4rem)',
          },
          '@screen 2xl': {
            maxWidth: 'calc(theme(screens.2xl) + 8rem)',
            paddingLeft: '4rem',
            paddingRight: '4rem',
          },
        },
      });
    },
  ],
};
