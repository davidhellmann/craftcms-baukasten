/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

// Cols Function
function cols(col, context, unit) {
  return `${(col / context) * 100}${unit}`;
}

// Space Function
function space(key, multi, unit) {
  return `${key * multi}${unit}`;
}

module.exports = {
  breakpoints: {
    min: '320px',
    s: '600px',
    m: '800px',
    l: '1200px',
    max: '1600px',
  },

  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
  },

  schrift: {
    minFontSize: '16px',
    maxFontSize: '18px',
    minRatio: 1.1,
    maxRatio: 1.3,
    scales: [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    minBreakpoint: '320px',
    maxBreakpoint: '1600px',
  },

  // Create PX Spacings
  spacingPxSmall: Array.from(
    new Array(13),
    (entry, index) => index * 4,
  ).reduce((a, b) => ({ ...a, [`${b}px`]: space(b, 1, 'px') })),

  // Create PX Spacings
  spacingPxBig: Array.from(
    new Array(18),
    (entry, index) => index * 16 + 48,
  ).reduce((a, b) => ({ ...a, [`${b}px`]: space(b, 1, 'px') })),

  // Create REM Spacings
  spacingRem: Array.from(
    new Array(65),
    (entry, index) => index / 2,
  ).reduce((a, b) => ({ ...a, [b]: space(b, 1, 'rem') })),

  // 6er Cols
  cols6: Array.from(new Array(7), (entry, index) => index).reduce((a, b) => ({
    ...a,
    [`${b}/6`]: cols(b, 6, '%'),
  })),

  // 10er Cols
  cols10: Array.from(new Array(11), (entry, index) => index).reduce((a, b) => ({
    ...a,
    [`${b}/10`]: cols(b, 10, '%'),
  })),

  // 12er Cols
  cols12: Array.from(new Array(13), (entry, index) => index).reduce((a, b) => ({
    ...a,
    [`${b}/12`]: cols(b, 12, '%'),
  })),

  // 24er Cols
  cols24: Array.from(new Array(25), (entry, index) => index).reduce((a, b) => ({
    ...a,
    [`${b}/24`]: cols(b, 24, '%'),
  })),
};
