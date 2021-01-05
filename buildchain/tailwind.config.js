/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */
const colors = require('tailwindcss/colors');
const fontBase = 1.125; // REM
const fontFactor = 1.2; // minor-third

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
    fontSize: {
      sm: [`${fontBase * Math.pow(fontFactor, -1)}rem`, '1.5'],
      base: [`${fontBase}rem`, '1.5'],
      lg: [`${fontBase * Math.pow(fontFactor, 1)}rem`, '1.5'],
      xl: [`${fontBase * Math.pow(fontFactor, 2)}rem`, '1.4'],
      '2xl': [`${fontBase * Math.pow(fontFactor, 3)}rem`, '1.3'],
      '3xl': [`${fontBase * Math.pow(fontFactor, 4)}rem`, '1.2'],
      '4xl': [`${fontBase * Math.pow(fontFactor, 5)}rem`, '1.1'],
      '5xl': [`${fontBase * Math.pow(fontFactor, 6)}rem`, '1'],
      '6xl': [`${fontBase * Math.pow(fontFactor, 7)}rem`, '1'],
      '7xl': [`${fontBase * Math.pow(fontFactor, 8)}rem`, '1'],
      '8xl': [`${fontBase * Math.pow(fontFactor, 9)}rem`, '1'],
      '9xl': [`${fontBase * Math.pow(fontFactor, 10)}rem`, '1'],
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
