/*
 * Tailwind Font Size Settings
 */

const settings = require('./tailwind.settings');

// build the clamp property
const calcModularScale = (scale = 0) => {
  const fontSizeMin =
    settings.typography.fontSizeMin *
    Math.pow(settings.typography.ratioMin, scale);
  const fontSizeMax =
    settings.typography.fontSizeMax *
    Math.pow(settings.typography.ratioMax, scale);
  return `clamp(
    ${fontSizeMin}rem,
    calc(${fontSizeMin}rem + (${fontSizeMax} - ${fontSizeMin}) * ((100vw - ${settings.screensRem.min}rem) / (${settings.screensRem['2xl']} - ${settings.screensRem.min}))),
    ${fontSizeMax}rem
  )`;
};

module.exports = {
  xs: calcModularScale(-2),
  sm: calcModularScale(-1),
  base: calcModularScale(0),
  lg: calcModularScale(1),
  xl: calcModularScale(2),
  '2xl': calcModularScale(3),
  '3xl': calcModularScale(4),
  '4xl': calcModularScale(5),
  '5xl': calcModularScale(6),
  '6xl': calcModularScale(7),
  '7xl': calcModularScale(8),
  '8xl': calcModularScale(9),
  '9xl': calcModularScale(10),
};
