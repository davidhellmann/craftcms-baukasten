const plugin = require('tailwindcss/plugin');
// Defaults
const DEFAULT_SETTINGS = {
  screenMin: 20,
  screenMax: 96,
  ratio: 2,
  mobileFirst: false,
  unit: 'rem',
  prefix: '',
};
const DEFAULT_VALUES = {
  0: 0,
  px: '1px',
  0.5: 0.125,
  1: 0.25,
  1.5: 0.375,
  2: 0.5,
  2.5: 0.625,
  3: 0.75,
  3.5: 0.875,
  4: 1,
  5: 1.25,
  6: 1.5,
  7: 1.75,
  8: 2,
  9: 2.25,
  10: 2.5,
  11: 2.75,
  12: 3,
  14: 3.5,
  16: 4,
  20: 5,
  24: 6,
  28: 7,
  32: 8,
  36: 9,
  40: 10,
  44: 11,
  48: 12,
  52: 13,
  56: 14,
  60: 15,
  64: 16,
  72: 18,
  80: 20,
  96: 24,
};
const DEFAULT_VARIANTS = ['responsive'];

module.exports = plugin(
  function ({ matchUtilities, theme, variants, e }) {
    const values = theme('fluidSpacings.values', DEFAULT_VALUES);
    const prefix = theme('fluidSpacings.settings.prefix', DEFAULT_SETTINGS.prefix);
    const settingsAsArray = Object.entries(theme('fluidSpacings.settings', DEFAULT_SETTINGS));
    const settingsAsArrayFiltered = settingsAsArray
      .filter(([key, value]) => key !== 'unit')
      .filter(([key, value]) => key !== 'mobileFirst')
      .filter(([key, value]) => key !== 'prefix');
    const finalSettings = Object.fromEntries(settingsAsArrayFiltered);
    const settingsAreNumbers = Object.values(finalSettings).every(
      (value) => typeof value === 'number',
    );

    const calcSpacing = (
      value = 0,
      sFsRatio = theme('fluidSpacings.settings.ratio', DEFAULT_SETTINGS.ratio),
    ) => {
      if (settingsAreNumbers) {
        const sFsSMin = theme('fluidSpacings.settings.screenMin', DEFAULT_SETTINGS.screenMin);
        const sFsSMax = theme('fluidSpacings.settings.screenMax', DEFAULT_SETTINGS.screenMax);
        const sFsMobileFirst = theme(
          'fluidSpacings.settings.mobileFirst',
          DEFAULT_SETTINGS.mobileFirst,
        );
        const sFsUnit =
          typeof theme('fluidSpacings.settings.unit', DEFAULT_SETTINGS.unit) === 'string'
            ? theme('fluidSpacings.settings.unit', DEFAULT_SETTINGS.unit)
            : 'rem';
        const sFsMin = sFsMobileFirst ? value : value / sFsRatio;
        const sFsMax = sFsMobileFirst ? value * sFsRatio : value;
        return `clamp(${sFsMin}${sFsUnit}, calc(${sFsMin}${sFsUnit} + ((${sFsMax} - ${sFsMin}) * ((100vw - ${sFsSMin}${sFsUnit}) / (${sFsSMax} - ${sFsSMin})))), ${sFsMax}${sFsUnit})`;
      }
      return value;
    };

    const keyMap = [
      ['m', 'margin'],
      ['-m', 'margin'],
      ['mx', 'marginInline'],
      ['my', 'marginBlock'],
      ['ml', 'marginInlineStart'],
      ['mr', 'marginInlineEnd'],
      ['mt', 'marginBlockStart'],
      ['mb', 'marginBlockEnd'],
    ];

    const output = {};
    keyMap.forEach((key) => {
      const handle = key[0];
      const property = key[1];
      const cssUnits = ['rem', 'px', 'vh', 'vw', 'em', 'ch'];
      output[handle] = (value) => {
        return {
          [property]:
            typeof value === 'string' && cssUnits.some((term) => value.includes(term))
              ? value
              : calcSpacing(value),
        };
      };
    });

    matchUtilities(
      output,
      { values: theme('fluidSpacings.values') },
      // [
      //   Object.entries(values).map(([key, value]) => {
      //     let output = {};
      //
      //     // Check if value is a string
      //     if (typeof value === 'string') {
      //       output = value;
      //     }
      //
      //     // Check if value is a number
      //     if (typeof value === 'number') {
      //       output = calcSpacing(value);
      //     }
      //
      //     // Check if value is array with length 1
      //     if (Array.isArray(value) && value.length === 1) {
      //       output = typeof value === 'number' ? calcSpacing(value[0]) : value[0];
      //     }
      //
      //     // Check if value is array with length 2
      //     if (Array.isArray(value) && value.length === 2) {
      //       const val = value[0];
      //       const ratio =
      //         typeof value === 'number'
      //           ? value[1]
      //           : theme('fluidSpacings.settings.screenMax', DEFAULT_SETTINGS.ratio);
      //
      //       if (typeof val === 'number') {
      //         output = calcSpacing(val, ratio);
      //       } else {
      //         output = val;
      //       }
      //     }
      //
      //     console.log(value);
      //
      //     console.log(output);
      //
      //     return {
      //       // Margins
      //       [`.${e(`${prefix}m-${key}`)}`]: { margin: output },
      //       [`.${e(`${prefix}mx-${key}`)}`]: { marginInline: output },
      //       [`.${e(`${prefix}my-${key}`)}`]: { marginBlock: output },
      //       [`.${e(`${prefix}ml-${key}`)}`]: { marginInlineStart: output },
      //       [`.${e(`${prefix}mr-${key}`)}`]: { marginInlineEnd: output },
      //       [`.${e(`${prefix}mt-${key}`)}`]: { marginBlockStart: output },
      //       [`.${e(`${prefix}mb-${key}`)}`]: { marginBlockEnd: output },
      //
      //       // Scroll Margins
      //       [`.${e(`${prefix}scroll-m-${key}`)}`]: { scrollMargin: output },
      //       [`.${e(`${prefix}scroll-mx-${key}`)}`]: { scrollMarginInline: output },
      //       [`.${e(`${prefix}scroll-my-${key}`)}`]: { scrollMarginBlock: output },
      //       [`.${e(`${prefix}scroll-ml-${key}`)}`]: { scrollMarginInlineStart: output },
      //       [`.${e(`${prefix}scroll-mr-${key}`)}`]: { scrollMarginInlineEnd: output },
      //       [`.${e(`${prefix}scroll-mt-${key}`)}`]: { scrollMarginBlockStart: output },
      //       [`.${e(`${prefix}scroll-mb-${key}`)}`]: { scrollMarginBlockEnd: output },
      //
      //       // Padding
      //       [`.${e(`${prefix}p-${key}`)}`]: { padding: output },
      //       [`.${e(`${prefix}px-${key}`)}`]: { paddingInline: output },
      //       [`.${e(`${prefix}py-${key}`)}`]: { paddingBlock: output },
      //       [`.${e(`${prefix}pl-${key}`)}`]: { paddingInlineStart: output },
      //       [`.${e(`${prefix}pr-${key}`)}`]: { paddingInlineEnd: output },
      //       [`.${e(`${prefix}pt-${key}`)}`]: { paddingBlockStart: output },
      //       [`.${e(`${prefix}pb-${key}`)}`]: { paddingBlockEnd: output },
      //
      //       // Scroll Padding
      //       [`.${e(`${prefix}scroll-p-${key}`)}`]: { scrollPadding: output },
      //       [`.${e(`${prefix}scroll-px-${key}`)}`]: { scrollPaddingInline: output },
      //       [`.${e(`${prefix}scroll-py-${key}`)}`]: { scrollPaddingBlock: output },
      //       [`.${e(`${prefix}scroll-pl-${key}`)}`]: { scrollPaddingInlineStart: output },
      //       [`.${e(`${prefix}scroll-pr-${key}`)}`]: { scrollPaddingInlineEnd: output },
      //       [`.${e(`${prefix}scroll-pt-${key}`)}`]: { scrollPaddingBlockStart: output },
      //       [`.${e(`${prefix}scroll-pb-${key}`)}`]: { scrollPaddingBlockEnd: output },
      //
      //       // Gap
      //       [`.${e(`${prefix}gap-${key}`)}`]: { gap: output },
      //       [`.${e(`${prefix}gap-x-${key}`)}`]: { columnGap: output },
      //       [`.${e(`${prefix}gap-y-${key}`)}`]: { rowGap: output },
      //
      //       // Space Between
      //       [`.${e(`${prefix}space-x-${key}`)}`]: { marginInlineStart: output },
      //       [`.${e(`${prefix}space-y-${key}`)}`]: { marginBlockStart: output },
      //     };
      //   }),
      // ],
      variants('fluidSpacings', DEFAULT_VARIANTS),
    );
  },
  {
    theme: {
      fluidSpacings: {
        settings: DEFAULT_SETTINGS,
        values: DEFAULT_VALUES,
      },
    },
    variants: {
      fluidSpacings: DEFAULT_VARIANTS,
    },
  },
);
