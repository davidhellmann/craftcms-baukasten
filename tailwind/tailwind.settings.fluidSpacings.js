/*
 * Tailwind Fluid Type Settings
 */

module.exports = {
  // your fluid type settings
  // works only with unitless numbers
  // This numbers are the defaults settings
  settings: {
    screenMin: 20, // 20rem === 320px
    screenMax: 96, // 96rem === 1536px
    ratio: 2, // Multiplicator
    mobileFirst: false, // If mobile first true it doubles the values if false it halved the values
    unit: 'rem', // Default Unit
    prefix: '', // set a prefix to use it alongside the default font sizes
  },
  // Creates the text-xx classes
  // This are the default settings and analog to the tailwindcss defaults
  // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
  values: {
    0: 0,
    'px': '1px',
    0.5: 0.125,
    1: 0.25,
    1.5: 0.375,
    2: 0.5,
    2.5: 0.625,
    3: 0.75,
    3.5: 0.875,
    4: 1,
    5: 1.25,
    6: 1.5,
    7: 1.75,
    8: 2,
    9: 2.25,
    10: 2.5,
    11: 2.75,
    12: 3,
    14: 3.5,
    16: 4,
    20: 5,
    24: 6,
    28: 7,
    32: 8,
    36: 9,
    40: 10,
    44: 11,
    48: 12,
    52: 13,
    56: 14,
    60: 15,
    64: 16,
    72: 18,
    80: 20,
    96: 24,
  },
};
