module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  extends: ['airbnb', 'plugin:vue/essential', 'prettier'],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      // check
      webpack: {
        config: './webpack.common.js',
      },
    },
  },
  globals: {
    __DEV__: true,
  },
  env: {
    browser: true,
  },
  rules: {
    'generator-star-spacing': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-danger': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'no-console': 'off',
    'linebreak-style': 'off',
    'padded-blocks': 'off',
    indent: ['error', 2],
    'no-new': 'off',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/script-indent': ['error', 2, {baseIndent: 0}],
        'vue/no-use-v-if-with-v-for': [
          'warn',
          {
            allowUsingIterationVar: false,
          },
        ],
      },
    },
  ],
};
