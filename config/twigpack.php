<?php
/**
 * Twigpack plugin for Craft CMS 3.x
 *
 * Twigpack is the conduit between Twig and webpack, with manifest.json &
 * webpack-dev-server HMR support
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

return [
    '*' => [
        // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
        'useDevServer' => false,

        // The JavaScript entry from the manifest.json to inject on Twig error pages
        'errorEntry' => 'app.js',

        // Manifest file names
        'manifest' => [
            'legacy' => 'manifest-legacy.json',
            'modern' => 'manifest.json',
        ],

        // Public server config
        'server' => [
            'manifestPath' => '@webroot/dist/',
            'publicPath' => '/',
        ],

        // webpack-dev-server config
        'devServer' => [
            'manifestPath' => getenv('TWIGPACK_DEV_SERVER_MANIFEST_PATH'),
            'publicPath' => getenv('TWIGPACK_DEV_SERVER_PUBLIC_PATH'),
        ],

        // Local files config
        'localFiles' => [
            'basePath' => '@webroot/',
            'criticalPrefix' => 'dist/criticalcss/',
            'criticalSuffix' => '_critical.min.css',
        ],
    ],
    // Live Env
    'live' => [
    ],

    // Stage Env
    'stage' => [
    ],

    // Local Env
    'local' => [
        // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
        'useDevServer' => true
    ],
];
