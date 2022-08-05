/*
 * Tailwind Color Settings
 * Colors MUST BE defined as HEX Value!!!
 */

const colors = require('tailwindcss/colors');

// Map Default Colors
const mapDefaults = (palette, name) => {
  if (!name || !palette) return;
  const colors = {};
  Object.entries(palette).map((color) => {
    colors[`${name}-${color[0]}`] = color[1];
  });

  return colors;
};

module.exports = [
  {
    name: 'default',
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      ...mapDefaults(colors.zinc, 'gray'),
      ...mapDefaults(colors.emerald, 'primary'),
      ...mapDefaults(colors.amber, 'secondary'),
    },
  },
  {
    name: 'monochrome',
    colors: {
      ...mapDefaults(colors.zinc, 'primary'),
      ...mapDefaults(colors.neutral, 'secondary'),
    },
  },
];
