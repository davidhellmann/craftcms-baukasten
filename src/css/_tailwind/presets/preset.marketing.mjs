import plugin from 'tailwindcss/plugin';
import presetMarketingTheme from './preset.marketing.theme.mjs';

export default {
  presets: [presetMarketingTheme],
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        // Default color transition on links unless user prefers reduced motion.
        '@media (prefers-reduced-motion: no-preference)': {
          a: {
            transition: 'color .3s ease-in-out',
          },
        },
        body: {
          color: theme('colors.neutral.980'),
          backgroundColor: theme('colors.white'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.normal'),
          //--------------------------------------------------------------------------
          // Set sans, serif or mono stack with optional custom font as default.
          //--------------------------------------------------------------------------
          // fontFamily: theme('fontFamily.mono'),
          fontFamily: theme('fontFamily.sans'),
          // fontFamily: theme('fontFamily.serif'),
        },
      }),
        // Custom components for this particular site.
        addComponents({}),
        // Custom utilities for this particular site.
        addUtilities({});
    }),
  ],
};
