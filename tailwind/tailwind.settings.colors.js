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
    50: withOpacityValue('--c-secondary-50'),
    100: withOpacityValue('--c-secondary-100'),
    200: withOpacityValue('--c-secondary-200'),
    300: withOpacityValue('--c-secondary-300'),
    400: withOpacityValue('--c-secondary-400'),
    500: withOpacityValue('--c-secondary-500'),
    DEFAULT: withOpacityValue('--c-secondary-500'),
    600: withOpacityValue('--c-secondary-600'),
    700: withOpacityValue('--c-secondary-700'),
    800: withOpacityValue('--c-secondary-800'),
    900: withOpacityValue('--c-secondary-900'),
  },
};
