/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

const baukastenConfig = require('./baukasten.config');

module.exports = {
  purge: [
    './templates/**/*.twig',
    './templates/**/*.html',
    './templates/**/*.vue',
    './src/vue/**/*.vue',
  ],
  theme: {
    // Extend the default Tailwind config here
    colors: baukastenConfig.colors,
    maxWidth: {
      none: 'none',
      full: '100%',
      ...baukastenConfig.breakpoints,
    },
    screens: baukastenConfig.breakpoints,
    width: {
      ...baukastenConfig.widths,
      ...baukastenConfig.spacings,
    },
    spacing: baukastenConfig.spacings,
  },
  corePlugins: {
    container: false,
    boxSizing: false,
    display: false,
    divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    float: false,
    clear: false,
    objectFit: false,
    objectPosition: false,
    overflow: false,
    position: false,
    inset: false,
    visibility: false,
    zIndex: false,
    flexDirection: true,
    flexWrap: true,
    alignItems: true,
    alignContent: true,
    alignSelf: true,
    justifyContent: true,
    flex: true,
    flexGrow: true,
    flexShrink: true,
    order: true,
    gridTemplateColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridColumnStartEnd: false,
    gridTemplateRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    gap: false,
    gridAutoFlow: false,
    padding: true,
    margin: true,
    width: true,
    minWidth: false,
    maxWidth: true,
    height: false,
    minHeight: false,
    maxHeight: false,
    fontFamily: false,
    fontSize: false,
    fontSmoothing: false,
    fontStyle: false,
    fontWeight: false,
    letterSpacing: false,
    lineHeight: false,
    listStyleType: false,
    listStylePosition: false,
    placeholderColor: false,
    placeholderOpacity: false,
    textAlign: false,
    textColor: false,
    textDecoration: false,
    textTransform: false,
    textOpacity: false,
    verticalAlign: false,
    whitespace: false,
    wordBreak: false,
    backgroundAttachment: false,
    backgroundColor: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    backgroundOpacity: false,
    borderColor: false,
    borderStyle: false,
    borderWidth: false,
    borderRadius: false,
    borderCollapse: false,
    borderOpacity: false,
    tableLayout: false,
    boxShadow: false,
    opacity: false,
    transitionProperty: false,
    transitionDuration: false,
    transitionTimingFunction: false,
    scale: false,
    rotate: false,
    translate: false,
    skew: false,
    transformOrigin: false,
    appearance: false,
    cursor: false,
    outline: false,
    pointerEvents: false,
    resize: false,
    userSelect: false,
    fill: false,
    stroke: false,
    strokeWidth: false,
    accessibility: true,
    space: false,
  },
  plugins: [],
};
