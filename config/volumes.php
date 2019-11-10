<?php
return [

    // All environments
    '*' => [
        'images' => [
            'url' => '@assetsUrl/images/',
            'path' => '@webroot/assets/images/',
        ],
        'files' => [
            'path' => '@assetsUrl/files/',
            'url' => '@webroot/assets/files/',
        ],
    ],

    // Live (production) environment
    'live'  => [
    ],

    // Staging (pre-production) environment
    'staging'  => [
    ],

    // Local (development) environment
    'local'  => [
    ],
];
