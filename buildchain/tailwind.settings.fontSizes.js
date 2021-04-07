/*
 * Tailwind Font Size Settings
 */

const settings = require('./tailwind.settings');
const createFontSize = (multi = 0, lineHeightModifier = 0) => {
  return [
    `${
      settings.typography.fontSize *
      Math.pow(settings.typography.msFactor, multi)
    }rem`,
    settings.typography.lineHeight + lineHeightModifier,
  ];
};

module.exports = {
  xs: createFontSize(-2),
  sm: createFontSize(-1),
  base: createFontSize(0),
  lg: createFontSize(1),
  xl: createFontSize(2, -0.1),
  '2xl': createFontSize(3, -0.2),
  '3xl': createFontSize(4, -0.3),
  '4xl': createFontSize(5, -0.4),
  '5xl': createFontSize(6, -0.5),
  '6xl': createFontSize(7, -0.5),
  '7xl': createFontSize(8, -0.5),
  '8xl': createFontSize(9, -0.5),
  '9xl': createFontSize(10, -0.5),
};
