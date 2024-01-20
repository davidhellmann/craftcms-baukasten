export default {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  useTabs: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 240,
      },
    },
  ],
  plugins: [
    // './node_modules/prettier-plugin-twig-melody',
    'prettier-plugin-tailwindcss',
  ],
  tailwindConfig: './tailwind.config.js',
  twigPrintWidth: 120,
  twigSingleQuote: false,
  twigMultiTags: [
    'nav,endnav',
    'minify,endminify',
    'switch,case,default,endswitch',
    'ifchildren,endifchildren',
    'cache,endcache',
    'js,endjs',
  ],
};
