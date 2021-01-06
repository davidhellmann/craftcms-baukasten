/*
 * Tailwind Prose Settings
 */

const settings = require('./tailwind.settings');
const settingsColors = require('./tailwind.settings.colors');

const colorMap = {
  colorDefault: settingsColors.colors.gray['700'],
  colorLead: settingsColors.colors.gray['600'],
  colorLink: settingsColors.colors.gray['900'],
  colorLiBullet: settingsColors.colors.gray['300'],
  colorBorder: settingsColors.colors.gray['200'],
  colorFigCaption: settingsColors.colors.gray['500'],
  colorPre: settingsColors.colors.gray['200'],
  colorPreBg: settingsColors.colors.gray['800'],
};

const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const em = (px, base) => `${round(px / base)}em`;

module.exports = theme => {
  const output = {
    DEFAULT: {
      css: [
        {
          color: colorMap.colorDefault,
          maxWidth: '65ch',
          '[class~="lead"]': {
            color: colorMap.colorLead,
          },
          a: {
            color: colorMap.colorLink,
            textDecoration: 'underline',
            fontWeight: '500',
          },
          strong: {
            color: null,
            fontWeight: '600',
          },
          'ol > li': {
            position: 'relative',
          },
          'ol > li::before': {
            content: 'counter(list-item) "."',
            position: 'absolute',
            fontWeight: '400',
            color: null,
          },
          'ul > li': {
            position: 'relative',
          },
          'ul > li::before': {
            content: '""',
            position: 'absolute',
            backgroundColor: colorMap.colorLiBullet,
            borderRadius: '50%',
          },
          hr: {
            borderColor: colorMap.colorBorder,
            borderTopWidth: 1,
          },
          blockquote: {
            fontWeight: '500',
            fontStyle: 'italic',
            color: null,
            borderLeftWidth: '0.25rem',
            borderLeftColor: colorMap.colorBorder,
            quotes: '"\\201C""\\201D""\\2018""\\2019"',
          },
          'blockquote p:first-of-type::before': {
            content: 'open-quote',
          },
          'blockquote p:last-of-type::after': {
            content: 'close-quote',
          },
          h1: {
            color: null,
            fontWeight: '800',
          },
          h2: {
            color: null,
            fontWeight: '700',
          },
          h3: {
            color: null,
            fontWeight: '600',
          },
          h4: {
            color: null,
            fontWeight: '600',
          },
          'figure figcaption': {
            color: colorMap.colorFigCaption,
          },
          code: {
            color: null,
            fontWeight: '600',
          },
          'code::before': {
            content: '"`"',
          },
          'code::after': {
            content: '"`"',
          },
          'a code': {
            color: null,
          },
          pre: {
            color: colorMap.colorPre,
            backgroundColor: colorMap.colorPreBg,
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
            fontFamily: theme('fontFamily.mono').join(', '),
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
            color: null,
            fontWeight: '600',
            borderBottomWidth: '1px',
            borderBottomColor: colorMap.colorBorder,
          },
          'thead th': {
            verticalAlign: 'bottom',
          },
          'tbody tr': {
            borderBottomWidth: '1px',
            borderBottomColor: colorMap.colorBorder,
          },
          'tbody tr:last-child': {
            borderBottomWidth: '0',
          },
          'tbody td': {
            verticalAlign: 'top',
          },
        },
        {
          fontSize: `${settings.typography.fontSize}rem`,
          lineHeight: settings.typography.lineHeight,
          p: {
            marginTop: em(20, 16),
            marginBottom: em(20, 16),
          },
          '[class~="lead"]': {
            fontSize: theme('fontSize.xl[0]'),
            lineHeight: settings.typography.lineHeight - 0.2,
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
            lineHeight: settings.typography.lineHeight,
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
            lineHeight: settings.typography.lineHeight,
            marginTop: em(24, 14),
            marginBottom: em(24, 14),
            borderRadius: em(6),
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
            lineHeight: settings.typography.lineHeight,
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
          lineHeight: settings.typography.lineHeight,
          p: {
            marginTop: em(24, 20),
            marginBottom: em(24, 20),
          },
          '[class~="lead"]': {
            fontSize: theme('fontSize.2xl[0]'),
            lineHeight: settings.typography.lineHeight - 0.2,
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
            lineHeight: settings.typography.lineHeight,
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
            lineHeight: settings.typography.lineHeight,
            marginTop: em(36, 18),
            marginBottom: em(36, 18),
            borderRadius: em(8),
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
            lineHeight: settings.typography.lineHeight,
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
  };

  return output;
};
