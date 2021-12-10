/*
 * Tailwind Color Settings
 */

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  current: 'currentColor',
  transparent: 'transparent',
  black: withOpacityValue('--c-black'),
  white: withOpacityValue('--c-white'),
  gray: {
    50: withOpacityValue('--c-gray-50'),
    100: withOpacityValue('--c-gray-100'),
    200: withOpacityValue('--c-gray-200'),
    300: withOpacityValue('--c-gray-300'),
    400: withOpacityValue('--c-gray-400'),
    500: withOpacityValue('--c-gray-500'),
    DEFAULT: withOpacityValue('--c-gray-500'),
    600: withOpacityValue('--c-gray-600'),
    700: withOpacityValue('--c-gray-700'),
    800: withOpacityValue('--c-gray-800'),
    900: withOpacityValue('--c-gray-900'),
  },
  primary: {
    50: withOpacityValue('--c-primary-50'),
    100: withOpacityValue('--c-primary-100'),
    200: withOpacityValue('--c-primary-200'),
    300: withOpacityValue('--c-primary-300'),
    400: withOpacityValue('--c-primary-400'),
    500: withOpacityValue('--c-primary-500'),
    DEFAULT: withOpacityValue('--c-primary-500'),
    600: withOpacityValue('--c-primary-600'),
    700: withOpacityValue('--c-primary-700'),
    800: withOpacityValue('--c-primary-800'),
    900: withOpacityValue('--c-primary-900'),
  },
  secondary: {
    50: withOpacityValue('--c-secodary-50'),
    100: withOpacityValue('--c-secodary-100'),
    200: withOpacityValue('--c-secodary-200'),
    300: withOpacityValue('--c-secodary-300'),
    400: withOpacityValue('--c-secodary-400'),
    500: withOpacityValue('--c-secodary-500'),
    DEFAULT: withOpacityValue('--c-secodary-500'),
    600: withOpacityValue('--c-secodary-600'),
    700: withOpacityValue('--c-secodary-700'),
    800: withOpacityValue('--c-secodary-800'),
    900: withOpacityValue('--c-secodary-900'),
  },
};
