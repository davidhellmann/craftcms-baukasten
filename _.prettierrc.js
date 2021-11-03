module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  useTabs: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 240,
      }
    }
  ]
};
