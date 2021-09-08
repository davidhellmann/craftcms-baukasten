/*
 * Tailwind Settings
 */

const modularScales = {
  'double-octave': 4,
  pi: 3.14159265359,
  'major-twelfth': 3,
  'major-eleventh': 2.666666667,
  'major-tenth': 2.5,
  octave: 2,
  'major-seventh': 1.875,
  'minor-seventh': 1.777777778,
  'major-sixth': 1.666666667,
  golden: 1.618034,
  'minor-sixth': 1.6,
  fifth: 1.5,
  'augmented-fourth': 1.41421,
  fourth: 1.333333333,
  'major-third': 1.25,
  'minor-third': 1.2,
  'major-second': 1.125,
  'minor-second': 1.066666667,
};

module.exports = {
  typography: {
    fontSizeMin: 1.125,
    fontSizeMax: 1.2,
    ratioMin: modularScales['major-second'],
    ratioMax: modularScales['minor-third'],
  },

  screensRem: {
    min: 20,
    sm: 40,
    md: 48,
    lg: 64,
    xl: 80,
    '2xl': 96,
  },
  grid: {
    cols: 24,
  },
};
