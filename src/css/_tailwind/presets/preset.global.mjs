import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';

// Pluigins
import containerQueries from '@tailwindcss/container-queries';
import fluidType from 'tailwindcss-fluid-type';

// Settings
import settingsfluidType from '../plugins/settings.fluidType.js';

export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1860px',
    },
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      'keyboard-focus': '#ff98de',
      gray: colors.zinc,
      primary: colors.green,
      secondary: colors.emerald,
    },
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'Times New Roman', 'Times', 'serif'],
      mono: ['"JetBrains Mono"', '"Courier New"', 'Courier', 'monospace'],
    },
    extend: {
      aspectRatio: {
        landscape: '3 / 2',
        portrait: '2 / 3',
      },
      spacing: {
        // Used for the mobile navigation toggle.
        safe: 'calc(env(safe-area-inset-bottom, 0rem) + 2rem)',
        'fluid-grid-gap': 'var(--col-gap)',
      },
      transitionTimingFunction: {
        'out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      },
      zIndex: {
        // Z-index stuff behind it's parent.
        behind: '-1',
      },
    },
  },
  corePlugins: {
    container: false,
    fontSize: false,
  },
  plugins: [
    containerQueries,
    fluidType({
      ...settingsfluidType,
    }),
    // Add Root Styles
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          // Fluid typography from 1 rem to 1.2 rem with fallback to 16px.
          fontSize: '100%',
          'font-size': '1rem', // to make it fluid: clamp(1rem, 1.6vw, 1.2rem)
          // Safari resize fix.
          minHeight: '0vw',
        },
      });
    }),
    // Add Base Styles
    plugin(function ({ addBase, theme }) {
      addBase({
        // Default color transition on links unless user prefers reduced motion.
        '@media (prefers-reduced-motion: no-preference)': {
          a: {
            transition: `color ${theme('transitionDuration.300')} ease-in-out`,
          },
        },
        body: {
          color: theme('colors.gray.900'),
          backgroundColor: theme('colors.black'),
          fontSize: theme('fontSizeFluid.base'),
          '-webkit-font-smoothing': 'antialiased',
          // fontFamily: theme('fontFamily.mono'),
          fontFamily: theme('fontFamily.sans'),
          // fontFamily: theme('fontFamily.serif'),
        },
        img: {
          width: theme('width.full'),
        },
        '.lazyload, .lazyloading': {
          transitionProperty: theme('transitionProperty.all'),
          transitionDuration: theme('transitionDuration.500'),
        },
      });
    }),
    // Fluid Grid
    plugin(function ({ addComponents, addUtilities, theme }) {
      addComponents({
        ':root': {
          '--col-min-padding': '0.5rem',
          '--col-max-padding': '4rem',
          '--col-fluidscale': '3vw',
          '--col-gap':
            'clamp(var(--col-min-padding), var(--col-fluidscale), var(--col-max-padding))',
          '--content-max-width': theme('screens.2xl'),
          '--popout': '0',
          '--col-width':
            'calc((min(calc(100% - var(--padding-left) - var(--padding-right) - 2 * var(--col-gap)), var(--content-max-width)) - 11 * var(--col-gap)) / 12)',
          '--padding-left':
            'clamp(calc(env(safe-area-inset-left, 0rem) + var(--col-min-padding)), var(--col-fluidscale), calc(env(safe-area-inset-left, 0rem) + var(--col-max-padding)))',
          '--padding-right':
            'clamp(calc(env(safe-area-inset-right, 0rem) + var(--col-min-padding)), var(--col-fluidscale), calc(env(safe-area-inset-right, 0rem) + var(--col-max-padding)))',
          '--side-width': 'minmax(0, 1fr)',
        },
        '.fluid-grid': {
          display: 'grid',
          columnGap: 'var(--col-gap)',
          gridTemplateColumns:
            '[full-start] var(--side-width) [popout-start] var(--popout) [content-start col-1] var(--col-width) [col-2] var(--col-width) [col-3] var(--col-width) [col-4] var(--col-width) [col-5] var(--col-width) [col-6] var(--col-width) [col-7] var(--col-width) [col-8] var(--col-width) [col-9] var(--col-width) [col-10] var(--col-width) [col-11] var(--col-width) [col-12] var(--col-width) [content-end] var(--popout) [popout-end] var(--side-width) [full-end]',
        },
      });
      addUtilities({
        '.span-content, .span-md, .span-lg, .span-xl': {
          gridColumn: 'content',
        },
        '.span-popout': {
          gridColumn: 'popout',
        },
        '.span-full': {
          gridColumn: 'full',
        },
        '@media screen(md)': {
          '.span-md': {
            gridColumn: 'col-3 / span 8',
          },
          '.span-lg': {
            gridColumn: 'col-2 / span 10',
          },
          '.span-xl': {
            gridColumn: 'col-1 / span 12',
          },
        },
        '@media screen(lg)': {
          '.span-md': {
            gridColumn: 'col-4 / span 6',
          },
          '.span-lg': {
            gridColumn: 'col-3 / span 8',
          },
          '.span-xl': {
            gridColumn: 'col-2 / span 10',
          },
        },
      });
    }),
    // Stack Utilities
    plugin(function ({ addUtilities, matchUtilities, theme }) {
      matchUtilities(
        {
          stack: (value) => ({
            '> *': {
              '--stack-space': value,
            },
            '> *:not(.no-space-y, .no-space-b) + *:not(.no-space-y, .no-space-t)': {
              'margin-block-start': `var(--stack-item-space, var(--stack-space, ${theme('spacing.16')}))`,
            },
          }),
          'stack-space': (value) => ({
            '--stack-item-space': value,
            '&:is([class*="stack-"][class*="stack-space-"] > *)': {
              '--stack-item-space': value,
            },
          }),
        },
        { values: theme('spacing') },
      );
      addUtilities({
        '[class*="stack-"][class*="stack-space-"]': {
          '& > *': {
            '--stack-item-space': 'initial',
          },
        },
        '.stack-space-inherit': {
          '--stack-item-space': 'initial',
          '&:is([class*="stack-"][class*="stack-space-"] > *)': {
            '--stack-item-space': 'initial',
          },
        },
        '*:is(.stack-space-collapse) + *:is(.stack-space-collapse)': {
          '--stack-item-space': 0,
        },
      });
    }),
  ],
};
