const pkg = require('./package');

module.exports = {
  defaults: {
    config: false,
    pcss: true,
    twig: true,
    js: false,
    vue: false,
  },
  fileHeader: {
    author: pkg.author,
    projectName: pkg.name,
  },
  files: {
    twig: {
      name: '',
      postfix: '',
      extension: 'twig',
      path: 'src/templates/_components/'
    },
    pcss: {
      name: '',
      postfix: '',
      extension: 'pcss',
      path: 'src/templates/_components/'
    },
    js: {
      name: '',
      postfix: '',
      extension: 'js',
      path: 'src/templates/_components/'
    },
    vue: {
      name: '',
      postfix: '',
      extension: 'vue',
      path: 'src/templates/_components/'
    },
    config: {
      name: 'config',
      postfix: '',
      extension: 'php',
      path: 'src/templates/_components/'
    },
  },
  paths: {
    templateBase: 'src/ferdi/',
    modulePath: './',
    pathOptions: {
      // the first character of each key works as an alias for the path so you could use `-a` as an alias for atomic
      // components: 'components/',
    },
  },
};
