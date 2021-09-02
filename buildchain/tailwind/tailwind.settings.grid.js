/*
 * Tailwind Grid Settings
 */

const settings = require('./tailwind.settings');
const createItems = (count, keyPrefix, output) => {
  return Array.from(new Array(count + 1), (entry, index) => index).reduce(
    (a, b) => ({
      ...a,
      [`${keyPrefix}${b}`]: output.split('$$$').join(`${b}`),
    }),
  );
};

module.exports = {
  gridTemplateColumns: createItems(
    settings.grid.cols,
    '',
    `repeat($$$, minmax(0, 1fr))`,
  ),
  gridColumn: createItems(settings.grid.cols, 'span-', `span $$$ / span $$$`),
  gridRowStart: createItems(settings.grid.cols, '', `$$$`),
  gridRowEnd: createItems(settings.grid.cols, '', `$$$`),
};
