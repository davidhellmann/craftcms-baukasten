/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */
import colors from 'tailwindcss/colors';

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './templates/**/*.{twig,html,vue,js,ts}',
      './src/vue/**/*.{vue,js,ts}',
    ],
    layers: ['base', 'components', 'utilities'],
    mode: 'layers',
    options: {
      whitelist: ['./src/css/components/**/*.{css}'],
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        red: colors.red,
        blue: colors.lightBlue,
        yellow: colors.amber,
        green: colors.emerald,
      },
      spacing: {
        '50vh': '50vh',
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
          paddingLeft: '1rem',
          paddingRight: '1rem',
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
