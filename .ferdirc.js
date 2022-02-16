const pkg = require('./package');

module.exports = {
  defaults: {
    config: false,
    css: true,
    twig: true,
    js: false,
    ts: false,
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
      // path: 'templates/_components/',
    },
    css: {
      name: '',
      postfix: '',
      extension: 'css',
      // path: 'templates/_components/',
    },
    js: {
      name: '',
      postfix: '',
      extension: 'js',
      // path: 'templates/_components/',
    },
    ts: {
      name: '',
      postfix: '',
      extension: 'ts',
      // path: 'templates/_components/',
    },
    vue: {
      name: '',
      postfix: '',
      extension: 'vue',
      // path: 'templates/_components/',
    },
    config: {
      name: 'config',
      postfix: '',
      extension: 'php',
      // path: 'templates/_components/',
    },
  },
  paths: {
    templateBase: './src/ferdi/',
    modulePath: './templates/',
    pathOptions: {
      // the first character of each key works as an alias for the path so you could use `-a` as an alias for atomic
      components: '_components/',
    },
  },
};
