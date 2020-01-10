/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

// Space Function
function space(key, multi, unit) {
  return `${key * multi}${unit}`;
}

// Create PX Spacings
const spacingPx = Array.from(new Array(33), (entry, index) => (index * 4)).reduce(
  (a, b) => ({ ...a, [`${b}px`]: space(b, 1, 'px') }),
);

// Create REM Spacings
const spacingRem = Array.from(new Array(65), (entry, index) => (index) / 2).reduce(
  (a, b) => ({ ...a, [b]: space(b, 1, 'rem') }),
);

// Cols Function
function cols(col, context, unit) {
  return `${col / context * 100}${unit}`;
}

// 6er Cols
const cols6 = Array.from(new Array(7), (entry, index) => (index)).reduce(
  (a, b) => ({ ...a, [`${b}/6`]: cols(b, 6, '%') }),
);

// 10er Cols
const cols10 = Array.from(new Array(11), (entry, index) => (index)).reduce(
  (a, b) => ({ ...a, [`${b}/10`]: cols(b, 10, '%') }),
);

// 12er Cols
const cols12 = Array.from(new Array(13), (entry, index) => (index)).reduce(
  (a, b) => ({ ...a, [`${b}/12`]: cols(b, 12, '%') }),
);

// 24er Cols
const cols24 = Array.from(new Array(25), (entry, index) => (index)).reduce(
  (a, b) => ({ ...a, [`${b}/24`]: cols(b, 24, '%') }),
);

// Font Stuff

// Base Typo Settings
const typeSettings = {
  baseFontSize: 20,
  baseFontSizeMobile: 16,
  ratio: 1.2,
  ratioMobile: 1.1,
};

// Modular Scale Calc
const ms = (fontSize, ratio, value) => {
  return `${(fontSize * Math.pow(ratio, value)).toString()}px`;
};

function fontSizes(fontSize, ratio, value) {
  return ms(fontSize, ratio, value);
}

const fontsDesktop = Array.from(new Array(13), (entry, index) => (index - 3)).reduce(
  (a, b) => ({ ...a, [`ms-${b}`]: ms(typeSettings.baseFontSize, typeSettings.ratio, b) }),
);

const fontsMobile = Array.from(new Array(13), (entry, index) => (index - 3)).reduce(
  (a, b) => ({ ...a, [`ms-${b}--mobile`]: ms(typeSettings.baseFontSizeMobile, typeSettings.ratioMobile, b) }),
);
