const hexToRGB = require('./hexToRGB');

module.exports = (options) => {
  const finalColorSet = {};
  if (!options) return finalColorSet;

  options.forEach((theme) => {
    const { colors, name } = theme;
    const finalColors = {};

    Object.entries(colors).forEach((color) => {
      if (typeof color[1] === 'string') {
        finalColors[`--c-${color[0]}`] = hexToRGB(color[1]);
      }

      if (typeof color[1] === 'object') {
        const colorName = color[0];
        Object.entries(color[1]).forEach((color) => {
          finalColors[`--c-${colorName}-${color[0]}`] = hexToRGB(color[1]);
        });
      }
    });

    if (name === 'default') {
      finalColorSet[':root'] = finalColors;
    }

    finalColorSet[`[data-theme="${name}"]`] = finalColors;
  });

  return finalColorSet;
};
