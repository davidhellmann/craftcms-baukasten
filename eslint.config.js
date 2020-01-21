module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 9,
    allowImportExportEverywhere: false,
  },
  extends: [
    'airbnb/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/recommended',
    'prettier'
  ],
  plugins: [
    'prettier',
    'vue'
  ],
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
    node: true,
    es6: true,
  },
  rules: {
    'generator-star-spacing': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'linebreak-style': 'off',
    'padded-blocks': 'off',
    indent: ['error', 2],
    'no-new': 'off',
    'prettier/prettier': 'error',
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never',
    }],

    'max-len': ['error', {
      'comments': 160,
      'ignoreTemplateLiterals': true,
      'ignoreStrings': true,
      'ignorePattern': 'd=\".*\"', // ignore long svg path descriptions
    }],

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
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
