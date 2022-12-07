/*
 * Tailwind Plugins AddComponents Settings
 */

module.exports = {
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
  '.container-full': {
    width: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    '@screen md': {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
    '@screen 2xl': {
      paddingLeft: '4rem',
      paddingRight: '4rem',
    },
  },
};
