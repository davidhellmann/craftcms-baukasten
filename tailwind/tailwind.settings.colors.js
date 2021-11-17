/*
 * Tailwind Color Settings
 */

const generateColorClass =
  (variable) =>
  ({ opacityValue }) =>
    opacityValue ? `rgba(var(--${variable}), ${opacityValue})` : `rgb(var(--${variable}))`;

module.exports = {
  current: 'currentColor',
  transparent: 'transparent',
  black: generateColorClass('c-black'),
  white: generateColorClass('c-white'),
  gray: {
    50: generateColorClass('c-gray-50'),
    100: generateColorClass('c-gray-100'),
    200: generateColorClass('c-gray-200'),
    300: generateColorClass('c-gray-300'),
    400: generateColorClass('c-gray-400'),
    500: generateColorClass('c-gray-500'),
    DEFAULT: generateColorClass('c-gray-500'),
    600: generateColorClass('c-gray-600'),
    700: generateColorClass('c-gray-700'),
    800: generateColorClass('c-gray-800'),
    900: generateColorClass('c-gray-900'),
  },
  primary: {
    50: generateColorClass('c-primary-50'),
    100: generateColorClass('c-primary-100'),
    200: generateColorClass('c-primary-200'),
    300: generateColorClass('c-primary-300'),
    400: generateColorClass('c-primary-400'),
    500: generateColorClass('c-primary-500'),
    DEFAULT: generateColorClass('c-primary-500'),
    600: generateColorClass('c-primary-600'),
    700: generateColorClass('c-primary-700'),
    800: generateColorClass('c-primary-800'),
    900: generateColorClass('c-primary-900'),
  },
  secondary: {
    50: generateColorClass('c-secodary-50'),
    100: generateColorClass('c-secodary-100'),
    200: generateColorClass('c-secodary-200'),
    300: generateColorClass('c-secodary-300'),
    400: generateColorClass('c-secodary-400'),
    500: generateColorClass('c-secodary-500'),
    DEFAULT: generateColorClass('c-secodary-500'),
    600: generateColorClass('c-secodary-600'),
    700: generateColorClass('c-secodary-700'),
    800: generateColorClass('c-secodary-800'),
    900: generateColorClass('c-secodary-900'),
  },
};
