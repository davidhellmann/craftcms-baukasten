<?php
return [

    // All environments
    '*' => [
        'images' => [
            'url' => '@assetsUrl/images/',
            'path' => '@webroot/assets/images/',
        ],
        'files' => [
            'url' => '@assetsUrl/files/',
            'path' => '@webroot/assets/files/',
        ],
        'templateImages' => [
            'url' => '@assetsUrl/templateImages/',
            'path' => '@webroot/assets/templateImages/',
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
