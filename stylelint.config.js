module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'screen',
          'extends',
          'responsive',
          'apply',
          'include',
          'error',
          'for',
          'each',
          'if',
          'warn',
          'mixin',
          'function',
        ],
      },
    ],
    'block-no-empty': null,
    'no-descending-specificity': null,
  },
};
