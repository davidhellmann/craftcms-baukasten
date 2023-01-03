const createObject = require('./createObject');

module.exports = (finalColorSet) => {
  const finalThemeColorSettings = {};
  if (!finalColorSet) return finalThemeColorSettings;

  Object.entries(finalColorSet[':root']).forEach((color) => {
    const [a, b] = color;
    const colorKey = a.replace('--c-', '');
    let colorName = colorKey.split('-')[0] || colorKey;
    let colorLevel = colorKey.split('-')[1] || colorName;

    if (/\s/.test(b)) {
      if (colorName === colorLevel) {
        finalThemeColorSettings[colorName] = `rgb(var(${a}) / <alpha-value>)`;
      } else {
        createObject(
          finalThemeColorSettings,
          colorName,
          colorLevel,
          `rgb(var(${a}) / <alpha-value>)`,
        );
      }
    } else {
      if (colorName === colorLevel) {
        finalThemeColorSettings[colorName] = `var(${a})`;
      } else {
        createObject(finalThemeColorSettings, colorName, colorLevel, `var(${a})`);
      }
    }
  });

  return finalThemeColorSettings;
};
