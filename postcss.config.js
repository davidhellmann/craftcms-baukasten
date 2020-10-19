module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [require('stylelint')],
    }),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env'),
  ],
};
