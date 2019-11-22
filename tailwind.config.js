/*
* Opatciy Map for Colors
* https://www.viget.com/articles/tips-for-your-tailwind-config/
* */

// Base Typo Settings
const typeSettings = {
  baseFontSize: 17,
  ratio: 1.2
}

// Modular Scale Calc
const power = ((x,y) => {
  return `${(typeSettings.baseFontSize * Math.pow(x, y)).toString()}px`;
})

module.exports = {
  theme: {
    // Extend the default Tailwind config here
    extend: {
      colors: {
        'foo': 'var(--c-red)'
      }
    },
    // Replace the default Tailwind config here
    screens: {
      'min': '320px',
      's': '600px',
      'm': '800px',
      'l': 'var(--bp-l)',
      'max': '1600px',
    },
    fontSize: {
      'ms--2': power(typeSettings.ratio,-2),
      'ms--1': power(typeSettings.ratio,-1),
      'ms-0': power(typeSettings.ratio,0),
      'ms-1': power(typeSettings.ratio,1),
      'ms-2': power(typeSettings.ratio,2),
      'ms-3': power(typeSettings.ratio,3),
      'ms-4': power(typeSettings.ratio,4),
      'ms-5': power(typeSettings.ratio,5),
      'ms-6': power(typeSettings.ratio,6),
      'ms-7': power(typeSettings.ratio,7),
      'ms-8': power(typeSettings.ratio,8),
      'ms-9': power(typeSettings.ratio,9),
    }
  },
  corePlugins: {},
  plugins: [],
};
