/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */
const colors = require('tailwindcss/colors');
const fontBase = 1.125; // REM
const fontFactor = 1.2; // minor-third
const fontLineHeight = 1.6;

// Typography Stuff
const defaultTheme = require('tailwindcss/defaultTheme');
const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = px => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      '../templates/**/*.{twig,html,vue,js,ts}',
      '../src/vue/**/*.{vue,js,ts}',
    ],
    layers: ['base', 'components', 'utilities'],
    mode: 'layers',
    options: {
      whitelist: ['../src/css/components/**/*.{pcss,css}'],
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'Georgia', 'Times New Roman', 'Times', 'serif'],
      mono: ['JetBrains Mono', 'Courier New', 'Courier', 'monospace'],
    },
    fontSize: {
      xs: [`${fontBase * Math.pow(fontFactor, -2)}rem`, '1.5'],
      sm: [`${fontBase * Math.pow(fontFactor, -1)}rem`, '1.5'],
      base: [`${fontBase}rem`, '1.5'],
      lg: [`${fontBase * Math.pow(fontFactor, 1)}rem`, '1.5'],
      xl: [`${fontBase * Math.pow(fontFactor, 2)}rem`, '1.4'],
      '2xl': [`${fontBase * Math.pow(fontFactor, 3)}rem`, '1.3'],
      '3xl': [`${fontBase * Math.pow(fontFactor, 4)}rem`, '1.2'],
      '4xl': [`${fontBase * Math.pow(fontFactor, 5)}rem`, '1.1'],
      '5xl': [`${fontBase * Math.pow(fontFactor, 6)}rem`, '1'],
      '6xl': [`${fontBase * Math.pow(fontFactor, 7)}rem`, '1'],
      '7xl': [`${fontBase * Math.pow(fontFactor, 8)}rem`, '1'],
      '8xl': [`${fontBase * Math.pow(fontFactor, 9)}rem`, '1'],
      '9xl': [`${fontBase * Math.pow(fontFactor, 10)}rem`, '1'],
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: {
        100: colors.red['100'],
        500: colors.red['500'],
        900: colors.red['900'],
      },
      yellow: {
        100: colors.yellow['100'],
        500: colors.yellow['500'],
        900: colors.yellow['900'],
      },
      green: {
        100: colors.green['100'],
        500: colors.green['500'],
        900: colors.green['900'],
      },
    },
    extend: {
      spacing: {
        '50vh': '50vh',
      },
      zIndex: {
        1000: '1000',
        10000: '10000',
        100000: '100000',
      },
      // Typography Plugin
      typography: theme => ({
        DEFAULT: {
          css: [
            {
              color: theme('colors.gray.700', defaultTheme.colors.gray[700]),
              maxWidth: '65ch',
              '[class~="lead"]': {
                color: theme('colors.gray.600', defaultTheme.colors.gray[600]),
              },
              a: {
                color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
                textDecoration: 'underline',
                fontWeight: '500',
              },
              strong: {
                color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
                fontWeight: '600',
              },
              'ol > li': {
                position: 'relative',
              },
              'ol > li::before': {
                content: 'counter(list-item) "."',
                position: 'absolute',
                fontWeight: '400',
                color: theme('colors.gray.500', defaultTheme.colors.gray[500]),
              },
              'ul > li': {
                position: 'relative',
              },
              'ul > li::before': {
                content: '""',
                position: 'absolute',
                backgroundColor: theme(
                  'colors.gray.300',
                  defaultTheme.colors.gray[300],
                ),
                borderRadius: '50%',
              },
              hr: {
                borderColor: theme(
                  'colors.gray.200',
                  defaultTheme.colors.gray[200],
                ),
                borderTopWidth: 1,
              },
              blockquote: {
                fontWeight: '500',
                fontStyle: 'italic',
                color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
                borderLeftWidth: '0.25rem',
                borderLeftColor: theme(
                  'colors.gray.200',
                  defaultTheme.colors.gray[200],
                ),
                quotes: '"\\201C""\\201D""\\2018""\\2019"',
              },
              'blockquote p:first-of-type::before': {
                content: 'open-quote',
              },
              'blockquote p:last-of-type::after': {
                content: 'close-quote',
              },
              h1: {
                color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
                fontWeight: '800',
              },
              h2: {
                color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
                fontWeight: '700',
              },
              h3: {
                color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
                fontWeight: '600',
              },
              h4: {
                color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
                fontWeight: '600',
              },
              'figure figcaption': {
                color: theme('colors.gray.500', defaultTheme.colors.gray[500]),
              },
              code: {
                color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
                fontWeight: '600',
              },
              'code::before': {
                content: '"`"',
              },
              'code::after': {
                content: '"`"',
              },
              'a code': {
                color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
              },
              pre: {
                color: theme('colors.gray.200', defaultTheme.colors.gray[200]),
                backgroundColor: theme(
                  'colors.gray.800',
                  defaultTheme.colors.gray[800],
                ),
                overflowX: 'auto',
              },
              'pre code': {
                backgroundColor: 'transparent',
                borderWidth: '0',
                borderRadius: '0',
                padding: '0',
                fontWeight: '400',
                color: 'inherit',
                fontSize: 'inherit',
                fontFamily: 'inherit',
                lineHeight: 'inherit',
              },
              'pre code::before': {
                content: '""',
              },
              'pre code::after': {
                content: '""',
              },
              table: {
                width: '100%',
                tableLayout: 'auto',
                textAlign: 'left',
                marginTop: em(32, 16),
                marginBottom: em(32, 16),
              },
              thead: {
                color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
                fontWeight: '600',
                borderBottomWidth: '1px',
                borderBottomColor: theme(
                  'colors.gray.300',
                  defaultTheme.colors.gray[300],
                ),
              },
              'thead th': {
                verticalAlign: 'bottom',
              },
              'tbody tr': {
                borderBottomWidth: '1px',
                borderBottomColor: theme(
                  'colors.gray.200',
                  defaultTheme.colors.gray[200],
                ),
              },
              'tbody tr:last-child': {
                borderBottomWidth: '0',
              },
              'tbody td': {
                verticalAlign: 'top',
              },
            },
            {
              fontSize: `${fontBase}rem`,
              lineHeight: fontLineHeight,
              p: {
                marginTop: em(20, 16),
                marginBottom: em(20, 16),
              },
              '[class~="lead"]': {
                fontSize: theme('fontSize.xl[0]'),
                lineHeight: fontLineHeight - 0.2,
                marginTop: em(24, 20),
                marginBottom: em(24, 20),
              },
              blockquote: {
                marginTop: em(32, 20),
                marginBottom: em(32, 20),
                paddingLeft: em(20, 20),
              },
              h1: {
                fontSize: theme('fontSize.3xl[0]'),
                marginTop: '0',
                marginBottom: em(32, 36),
                lineHeight: theme('fontSize.3xl[1]'),
              },
              h2: {
                fontSize: theme('fontSize.2xl[0]'),
                marginTop: em(48, 24),
                marginBottom: em(24, 24),
                lineHeight: theme('fontSize.2xl[1]'),
              },
              h3: {
                fontSize: theme('fontSize.xl[0]'),
                marginTop: em(32, 20),
                marginBottom: em(12, 20),
                lineHeight: theme('fontSize.xl[1]'),
              },
              h4: {
                marginTop: em(24, 16),
                marginBottom: em(8, 16),
                lineHeight: theme('fontSize.l[1]'),
              },
              img: {
                marginTop: em(32, 16),
                marginBottom: em(32, 16),
              },
              video: {
                marginTop: em(32, 16),
                marginBottom: em(32, 16),
              },
              figure: {
                marginTop: em(32, 16),
                marginBottom: em(32, 16),
              },
              'figure > *': {
                marginTop: '0',
                marginBottom: '0',
              },
              'figure figcaption': {
                fontSize: theme('fontSize.sm[0]'),
                lineHeight: fontLineHeight,
                marginTop: em(12, 14),
              },
              code: {
                fontSize: theme('fontSize.sm[0]'),
              },
              'h2 code': {
                fontSize: em(21, 24),
              },
              'h3 code': {
                fontSize: em(18, 20),
              },
              pre: {
                fontSize: theme('fontSize.sm[0]'),
                lineHeight: fontLineHeight,
                marginTop: em(24, 14),
                marginBottom: em(24, 14),
                borderRadius: rem(6),
                paddingTop: em(12, 14),
                paddingRight: em(16, 14),
                paddingBottom: em(12, 14),
                paddingLeft: em(16, 14),
              },
              ol: {
                marginTop: em(20, 16),
                marginBottom: em(20, 16),
              },
              ul: {
                marginTop: em(20, 16),
                marginBottom: em(20, 16),
              },
              li: {
                marginTop: em(8, 16),
                marginBottom: em(8, 16),
              },
              'ol > li': {
                paddingLeft: em(28, 16),
              },
              'ol > li::before': {
                left: '0',
              },
              'ul > li': {
                paddingLeft: em(28, 16),
              },
              'ul > li::before': {
                width: em(6, 16),
                height: em(6, 16),
                top: `calc(${em(28 / 2, 16)} - ${em(3, 16)})`,
                left: em(4, 16),
              },
              '> ul > li p': {
                marginTop: em(12, 16),
                marginBottom: em(12, 16),
              },
              '> ul > li > *:first-child': {
                marginTop: em(20, 16),
              },
              '> ul > li > *:last-child': {
                marginBottom: em(20, 16),
              },
              '> ol > li > *:first-child': {
                marginTop: em(20, 16),
              },
              '> ol > li > *:last-child': {
                marginBottom: em(20, 16),
              },
              'ul ul, ul ol, ol ul, ol ol': {
                marginTop: em(12, 16),
                marginBottom: em(12, 16),
              },
              hr: {
                marginTop: em(48, 16),
                marginBottom: em(48, 16),
              },
              'hr + *': {
                marginTop: '0',
              },
              'h2 + *': {
                marginTop: '0',
              },
              'h3 + *': {
                marginTop: '0',
              },
              'h4 + *': {
                marginTop: '0',
              },
              table: {
                fontSize: theme('fontSize.sm[0]'),
                lineHeight: fontLineHeight,
              },
              'thead th': {
                paddingRight: em(8, 14),
                paddingBottom: em(8, 14),
                paddingLeft: em(8, 14),
              },
              'thead th:first-child': {
                paddingLeft: '0',
              },
              'thead th:last-child': {
                paddingRight: '0',
              },
              'tbody td': {
                paddingTop: em(8, 14),
                paddingRight: em(8, 14),
                paddingBottom: em(8, 14),
                paddingLeft: em(8, 14),
              },
              'tbody td:first-child': {
                paddingLeft: '0',
              },
              'tbody td:last-child': {
                paddingRight: '0',
              },
            },
            {
              '> :first-child': {
                marginTop: '0',
              },
              '> :last-child': {
                marginBottom: '0',
              },
            },
          ],
        },
        md: {
          css: [
            {
              fontSize: theme('fontSize.lg[0]'),
              lineHeight: fontLineHeight,
              p: {
                marginTop: em(24, 20),
                marginBottom: em(24, 20),
              },
              '[class~="lead"]': {
                fontSize: theme('fontSize.2xl[0]'),
                lineHeight: fontLineHeight - 0.2,
                marginTop: em(24, 24),
                marginBottom: em(24, 24),
              },
              blockquote: {
                marginTop: em(48, 30),
                marginBottom: em(48, 30),
                paddingLeft: em(32, 30),
              },
              h1: {
                fontSize: theme('fontSize.4xl[0]'),
                marginTop: '0',
                marginBottom: em(48, 56),
                lineHeight: theme('fontSize.4xl[1]'),
              },
              h2: {
                fontSize: theme('fontSize.3xl[0]'),
                marginTop: em(56, 36),
                marginBottom: em(32, 36),
                lineHeight: theme('fontSize.3xl[1]'),
              },
              h3: {
                fontSize: theme('fontSize.2xl[0]'),
                marginTop: em(48, 30),
                marginBottom: em(20, 30),
                lineHeight: theme('fontSize.2xl[1]'),
              },
              h4: {
                marginTop: em(36, 20),
                marginBottom: em(12, 20),
                lineHeight: theme('fontSize.xl[1]'),
              },
              img: {
                marginTop: em(40, 20),
                marginBottom: em(40, 20),
              },
              video: {
                marginTop: em(40, 20),
                marginBottom: em(40, 20),
              },
              figure: {
                marginTop: em(40, 20),
                marginBottom: em(40, 20),
              },
              'figure > *': {
                marginTop: '0',
                marginBottom: '0',
              },
              'figure figcaption': {
                fontSize: theme('fontSize.base[0]'),
                lineHeight: fontLineHeight,
                marginTop: em(18, 18),
              },
              code: {
                fontSize: theme('fontSize.base[0]'),
              },
              'h2 code': {
                fontSize: em(31, 36),
              },
              'h3 code': {
                fontSize: em(27, 30),
              },
              pre: {
                fontSize: theme('fontSize.base[0]'),
                lineHeight: fontLineHeight,
                marginTop: em(36, 18),
                marginBottom: em(36, 18),
                borderRadius: rem(8),
                paddingTop: em(20, 18),
                paddingRight: em(24, 18),
                paddingBottom: em(20, 18),
                paddingLeft: em(24, 18),
              },
              ol: {
                marginTop: em(24, 20),
                marginBottom: em(24, 20),
              },
              ul: {
                marginTop: em(24, 20),
                marginBottom: em(24, 20),
              },
              li: {
                marginTop: em(12, 20),
                marginBottom: em(12, 20),
              },
              'ol > li': {
                paddingLeft: em(36, 20),
              },
              'ol > li::before': {
                left: '0',
              },
              'ul > li': {
                paddingLeft: em(36, 20),
              },
              'ul > li::before': {
                width: em(7, 20),
                height: em(7, 20),
                top: `calc(${em(36 / 2, 20)} - ${em(3.5, 20)})`,
                left: em(5, 20),
              },
              '> ul > li p': {
                marginTop: em(16, 20),
                marginBottom: em(16, 20),
              },
              '> ul > li > *:first-child': {
                marginTop: em(24, 20),
              },
              '> ul > li > *:last-child': {
                marginBottom: em(24, 20),
              },
              '> ol > li > *:first-child': {
                marginTop: em(24, 20),
              },
              '> ol > li > *:last-child': {
                marginBottom: em(24, 20),
              },
              'ul ul, ul ol, ol ul, ol ol': {
                marginTop: em(16, 20),
                marginBottom: em(16, 20),
              },
              hr: {
                marginTop: em(56, 20),
                marginBottom: em(56, 20),
              },
              'hr + *': {
                marginTop: '0',
              },
              'h2 + *': {
                marginTop: '0',
              },
              'h3 + *': {
                marginTop: '0',
              },
              'h4 + *': {
                marginTop: '0',
              },
              table: {
                fontSize: theme('fontSize.base[0]'),
                lineHeight: fontLineHeight,
              },
              'thead th': {
                paddingRight: em(12, 18),
                paddingBottom: em(16, 18),
                paddingLeft: em(12, 18),
              },
              'thead th:first-child': {
                paddingLeft: '0',
              },
              'thead th:last-child': {
                paddingRight: '0',
              },
              'tbody td': {
                paddingTop: em(16, 18),
                paddingRight: em(12, 18),
                paddingBottom: em(16, 18),
                paddingLeft: em(12, 18),
              },
              'tbody td:first-child': {
                paddingLeft: '0',
              },
              'tbody td:last-child': {
                paddingRight: '0',
              },
            },
            {
              '> :first-child': {
                marginTop: '0',
              },
              '> :last-child': {
                marginBottom: '0',
              },
            },
          ],
        },
      }),
    },
  },
  variants: {},
  corePlugins: {
    float: false,
    container: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-question-mark'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen md': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen xl': {
            maxWidth: 'calc(theme(screens.xl) + 4rem)',
          },
          '@screen 2xl': {
            maxWidth: 'calc(theme(screens.2xl) + 8rem)',
            paddingLeft: '4rem',
            paddingRight: '4rem',
          },
        },
      });
    },
  ],
};
