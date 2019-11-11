const pkg = require('./package');

module.exports = {
  defaults: {
    config: true,
    scss: true,
    twig: true,
    basicJs: false,
    basicScss: true,
    basicTwig: true,
    basicVue: false,
  },
  fileHeader: {
    author: pkg.author,
    projectName: pkg.name,
  },
  files: {
    twig: {
      name: '_template',
      postfix: '',
      extension: 'twig',
    },
    basicTwig: {
      name: 'variant-basic/_template',
      postfix: '',
      extension: 'twig',
    },
    scss: {
      name: '_style',
      postfix: '',
      extension: 'scss',
    },
    basicScss: {
      name: 'variant-basic/_style',
      postfix: '',
      extension: 'scss',
    },
    basicJs: {
      name: 'variant-basic/_script',
      postfix: '',
      extension: 'js',
    },
    basicVue: {
      name: 'variant-basic/_component',
      postfix: '',
      extension: 'vue',
    },
    config: {
      name: 'config',
      postfix: '',
      extension: 'php',
    },
  },
  paths: {
    templateBase: 'src/ferdi/',
    modulePath: 'src/templates/',
    pathOptions: {
      // the first character of each key works as an alias for the path so you could use `-a` as an alias for atomic
      atoms: '_atoms/',
      molecules: '_molecules/',
      organisms: '_organisms/',
    },
  },
};
