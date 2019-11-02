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
          'tailwind',
          'apply',
        ],
      },
    ],
    'block-no-empty': null,
  },
};