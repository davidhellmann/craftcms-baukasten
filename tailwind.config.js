/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

// Base Typo Settings
const typeSettings = {
  baseFontSize: 20,
  baseFontSizeMobile: 16,
  ratio: 1.2,
  ratioMobile: 1.1,
};

// Modular Scale Calc
const ms = (fontSize, ratio, y) => {
  return `${(fontSize * Math.pow(ratio, y)).toString()}px`;
};

module.exports = {
  theme: {
    // Extend the default Tailwind config here
    extend: {
      colors: {
        foo: 'var(--c-red)',
      },
      width: {
        '1/6': '16.666666666666664%',
        '2/6': '33.33333333333333%',
        '3/6': '50%',
        '4/6': '66.66666666666666%',
        '5/6': '83.33333333333334%',
        '6/6': '100%',
        '1/24': '4.166666666666666%',
        '2/24': '8.333333333333332%',
        '3/24': '12.5%',
        '4/24': '16.666666666666664%',
        '5/24': '20.833333333333336%',
        '6/24': '25%',
        '7/24': '29.166666666666668%',
        '8/24': '33.33333333333333%',
        '9/24': '37.5%',
        '10/24': '41.66666666666667%',
        '11/24': '45.83333333333333%',
        '12/24': '50%',
        '13/24': '54.166666666666664%',
        '14/24': '58.333333333333336%',
        '15/24': '62.5%',
        '16/24': '66.66666666666666%',
        '17/24': '70.83333333333334%',
        '18/24': '75%',
        '19/24': '79.16666666666666%',
        '20/24': '83.33333333333334%',
        '21/24': '87.5%',
        '22/24': '91.66666666666666%',
        '23/24': '95.83333333333334%',
        '24/24': '100%',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
      },
    },
    // Replace the default Tailwind config here
    screens: {
      min: '320px',
      s: '600px',
      m: '800px', // Most important cause here is the switch from mobile to desktop
      l: '1200px',
      max: '1600px',
    },
    spacing: {
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '28': '28px',
      '32': '32px',
      '36': '36px',
      '40': '40px',
      '44': '44px',
      '48': '48px',
      '52': '52px',
      '56': '56px',
      '60': '60px',
      '64': '64px',
      '68': '68px',
      '72': '72px',
      '76': '76px',
      '80': '80px',
      '96': '96px',
      '120': '120px',
      '160': '160px',
      '200': '200px',
      '240': '240px',
      '280': '280px',
      '320': '320px',
      '360': '360px',
      '400': '400px',
      '440': '440px',
      '480': '480px',
      '520': '520px',
    },
    fontSize: {
      // Desktop
      'ms--2': ms(typeSettings.baseFontSize, typeSettings.ratio, -2),
      'ms--1': ms(typeSettings.baseFontSize, typeSettings.ratio, -1),
      'ms-0': ms(typeSettings.baseFontSize, typeSettings.ratio, 0),
      'ms-1': ms(typeSettings.baseFontSize, typeSettings.ratio, 1),
      'ms-2': ms(typeSettings.baseFontSize, typeSettings.ratio, 2),
      'ms-3': ms(typeSettings.baseFontSize, typeSettings.ratio, 3),
      'ms-4': ms(typeSettings.baseFontSize, typeSettings.ratio, 4),
      'ms-5': ms(typeSettings.baseFontSize, typeSettings.ratio, 5),
      'ms-6': ms(typeSettings.baseFontSize, typeSettings.ratio, 6),
      'ms-7': ms(typeSettings.baseFontSize, typeSettings.ratio, 7),
      'ms-8': ms(typeSettings.baseFontSize, typeSettings.ratio, 8),
      'ms-9': ms(typeSettings.baseFontSize, typeSettings.ratio, 9),
      // Mobile
      'ms--2--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        -2,
      ),
      'ms--1--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        -1,
      ),
      'ms-0--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        0,
      ),
      'ms-1--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        1,
      ),
      'ms-2--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        2,
      ),
      'ms-3--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        3,
      ),
      'ms-4--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        4,
      ),
      'ms-5--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        5,
      ),
      'ms-6--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        6,
      ),
      'ms-7--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        7,
      ),
      'ms-8--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        8,
      ),
      'ms-9--mobile': ms(
        typeSettings.baseFontSizeMobile,
        typeSettings.ratioMobile,
        9,
      ),
    },
  },
  corePlugins: {},
  plugins: [],
};
