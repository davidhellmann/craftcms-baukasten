const pkg =  require('./package');

module.exports = {
    defaults: {
        twig: true,
        scss: true,
        js: false,
        vue: false,
        config: false,
    },
    fileHeader: {
        authors: pkg.authors,
        projectName: pkg.projectName
    },
    files: {
        twig: {
            name: '_template',
            postfix: '',
            extension: 'twig',
            description: 'ferdi should create a Template File'
        },
        scss: {
            name: '_style',
            postfix: '',
            extension: 'scss',
            description: 'ferdi should create Stylesheet File'
        },
        js: {
            name: '_script',
            postfix: '',
            extension: 'js',
            description: 'ferdi should create JavaScript File'
        },
        vue: {
            name: '_component',
            postfix: '',
            extension: 'vue',
            description: 'ferdi should create Vue File'
        },
        config: {
            name: 'config',
            postfix: '',
            extension: 'php',
            description: 'ferdi should create Config File'
        },
    },
    paths: {
        templateBase: 'scripts/ferdi/',
        modulePath: '___src/templates/',
        pathOptions: {
            // the first character of each key works as an alias for the path so you could use `-a` as an alias for atomic
            atoms: '_atoms/',
            molecules: '_molecules/',
            organisms: '_organisms/',
        }
    }
};
