/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

import './tailwind.custom';

module.exports = {
  theme: {
    // Extend the default Tailwind config here
    extend: {
      colors: {
        foo: 'var(--c-red)',
      },
      width: {
        ...cols6,
        ...cols10,
        ...cols12,
        ...cols24,
      },
      maxWidth: {
        min: '320px',
        s: '600px',
        m: '800px',
        l: '1200px',
        max: '1600px',
      }
    },
    // Replace the default Tailwind config here
    screens: {
      min: '320px',
      s: '600px',
      m: '800px',
      l: '1200px',
      max: '1600px',
    },
    spacing: {
      ...spacingPx,
      ...spacingRem,
    },
    fontSize: {
      ...fontsMobile,
      ...fontsDesktop
    },
  },
  corePlugins: {},
  plugins: [],
};
