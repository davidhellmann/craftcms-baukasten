module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
        require('stylelint')
      ]
    }),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {grid: true},
      features: {
        'nesting-rules': true
      }
    })
  ]
};
