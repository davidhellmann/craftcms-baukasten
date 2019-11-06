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
        ],
      },
    ],
    'block-no-empty': null,
  },
};

