/*
 * Tailwind Plugins AddComponents Settings
 */
const plugin = require('tailwindcss/plugin');
const colorThemes = require('./tailwind.settings.colors');

const hexToRGB = (hexColor) => {
  if (!hexColor.startsWith('#')) return hexColor;
  const c = hexColor.startsWith('#') ? hexColor.substring(1) : hexColor;
  const l = c.length;

  if (l === 3) {
    return [
      parseInt(`${c.substring(0, 1)}${c.substring(0, 1)}`, 16),
      parseInt(`${c.substring(1, 2)}${c.substring(1, 2)}`, 16),
      parseInt(`${c.substring(2, 3)}${c.substring(2, 3)}`, 16),
    ].join(' ');
  }

  if (l === 6) {
    return [
      parseInt(c.substring(0, 2), 16),
      parseInt(c.substring(2, 4), 16),
      parseInt(c.substring(4, 6), 16),
    ].join(' ');
  }
};

const finalColorSet = {};
const finalThemeColorSettings = {};
colorThemes.forEach((theme) => {
  const { colors, name } = theme;
  const finalColors = {};

  Object.entries(colors).forEach((color) => {
    finalColors[`--c-${color[0]}`] = hexToRGB(color[1]);
  });

  if (name === 'default') {
    finalColorSet[':root'] = finalColors;
  }

  finalColorSet[`[data-theme="${name}"]`] = finalColors;
});

Object.entries(finalColorSet[':root']).forEach((color) => {
  const [a, b] = color;

  if (/\s/.test(b)) {
    finalThemeColorSettings[a.replace('--c-', '')] = `rgb(var(${a}) / <alpha-value>)`;
  } else {
    finalThemeColorSettings[a.replace('--c-', '')] = `var(${a})`;
  }
});

module.exports = plugin(
  ({ addBase }) => {
    addBase(finalColorSet);
  },

  {
    theme: {
      colors: finalThemeColorSettings,
    },
  },
);
