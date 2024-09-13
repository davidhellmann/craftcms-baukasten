import presetDefault from 'tailwindcss/defaultConfig';
// import presetGlobal from './presets/preset.global.mjs';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [presetDefault],
  darkMode: 'class',
  content: ['./templates/**/*.{twig,html,vue,js,ts,json}', './src/vue/**/*.{vue,js,ts}'],
  safelist: [],
};
