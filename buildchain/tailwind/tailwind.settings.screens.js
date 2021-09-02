/*
 * Tailwind Screens Settings
 */

const settings = require('./tailwind.settings');

const remToPx = rem => {
  return `${rem * 16}px`;
};

module.exports = {
  sm: remToPx(settings.screensRem.sm),
  md: remToPx(settings.screensRem.md),
  lg: remToPx(settings.screensRem.lg),
  xl: remToPx(settings.screensRem.xl),
  '2xl': remToPx(settings.screensRem['2xl']),
  nthover: { raw: '(hover: hover)' },
};
