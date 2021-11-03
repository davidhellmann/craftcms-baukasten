module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb-base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    'import/prefer-default-export': 'off',
    // removes wrong unused warning on enums
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.vue', '.js', '.ts', '.css', '.pcss'],
      },
    },
  },
};
