import defaultTheme from 'tailwindcss/defaultTheme';
import colors from '../marketing/settings.colors.mjs';
import shadows from '../marketing/settings.shadows.mjs';
import gradients from '../marketing/settings.gradients.mjs';

export default {
  theme: {
    // Here we define the default colors available. If you want to include
    // all default Tailwind colors you should extend the colors instead.
    colors: colors,
    boxShadow: shadows,
    dropShadow: shadows,
    // Remove the font families you don't want to use.
    fontFamily: {
      mono: [
        // Use a custom mono font for this site by changing 'JetBrains Mono' to the
        // font name you want and uncommenting the following line.
        'VeraMono',
        ...defaultTheme.fontFamily.mono,
      ],
      sans: [
        // Use a custom sans serif font for this site by changing 'Lato' to the
        // font name you want and uncommenting the following line.
        'BerninaSans',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    // The font weights available for this site.
    fontWeight: {
      // hairline: 100,
      // thin: 200,
      light: 300,
      normal: 400,
      // medium: 500,
      semibold: 600,
      // bold: 700,
      extrabold: 800,
      // black: 900,
    },
    fontSize: {
      '3xs': ['0.688rem', '1.9'],
      '2xs': ['0.75rem', '1.8'],
      xs: ['0.875rem', '1.7'],
      sm: ['1rem', '1.625'],
      base: ['1.125rem', '1.55'],
      lg: ['1.375rem', '1.45'],
      xl: ['1.563rem', '1.4'],
      '2xl': ['2.5rem', '1.25'],
      '3xl': ['3.125rem', '1.2'],
      '4xl': ['4.063rem', '1.15'],
    },
    borderRadius: {
      none: '0',
      DEFAULT: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1.25rem',
    },
    extend: {
      backgroundImage: {
        ...gradients,
      },
      // Set default transition durations and easing when using the transition utilities.
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      aspectRatio: {
        landscape: '3 / 2',
        portrait: '2 / 3',
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
        logos: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
      },
      scale: {
        1025: '1.025',
      },
    },
  },
};
