const pkg = require('./package');

module.exports = {
  defaults: {
    config: true,
    pcss: true,
    twig: true,
    js: true,
    vue: true,
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
      path: 'src/templates/components/'
    },
    pcss: {
      name: '',
      postfix: '',
      extension: 'pcss',
      path: 'src/css/06-components/'
    },
    js: {
      name: '',
      postfix: '',
      extension: 'js',
      path: 'src/js/components/'
    },
    vue: {
      name: '',
      postfix: '',
      extension: 'vue',
      path: 'src/vue/components/'
    },
    config: {
      name: 'config',
      postfix: '',
      extension: 'php',
      path: 'src/templates/components/'
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
