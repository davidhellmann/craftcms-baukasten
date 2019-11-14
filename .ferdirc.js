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
      name: '_template-basic',
      postfix: '',
      extension: 'twig',
    },
    scss: {
      name: '_style',
      postfix: '',
      extension: 'scss',
    },
    basicScss: {
      name: '_style-basic',
      postfix: '',
      extension: 'scss',
    },
    basicJs: {
      name: '_script-basic',
      postfix: '',
      extension: 'js',
    },
    basicVue: {
      name: '_component-basic',
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
