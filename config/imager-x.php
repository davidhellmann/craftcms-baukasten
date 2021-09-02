<?php
/**
 * Imager X plugin for Craft CMS
 *
 * Ninja powered image transforms.
 *
 * @link      https://www.spacecat.ninja
 * @copyright Copyright (c) 2020 André Elvan
 */

return [
    '*' => [
        'transformer' => 'craft',
        'imagerSystemPath' => '@webroot/assets/imager/',
        'imagerUrl' => '/assets/imager/',
        'cacheDuration' => 31536000, // 1 Year
        'cacheDurationRemoteFiles' => 31536000, // 1 Year
        'cacheDurationExternalStorage' => 31536000, // 1 Year
        'jpegQuality' => 90,
        'pngCompressionLevel' => 0,
        'customEncoders' => [
            'webp' => [
                'path' => '/usr/bin/cwebp',
                'options' => [
                    'quality' => 90,
                    'effort' => 4,
                ],
                'paramsString' => '-q {quality} -m {effort} {src} -o {dest}'
            ],
        ],
        'optimizers' => [
            'jpegoptim',
            'jpegtran',
            'mozjpeg',
            'optipng',
            'gifsicle',
        ],
        'fallbackImage' => getenv('FALLBACK_IMAGE') ?: null,
        'hideClearCachesForUserGroups' => [],
    ],
    // Live Env
    'live' => [
    ],

    // Stage Env
    'stage' => [
        'optimizers' => null
    ],

    // Local Env
    'local' => [
        'customEncoders' => [
            'webp' => [
                'path' => '/usr/local/bin/cwebp',
                'options' => [
                    'quality' => 90,
                    'effort' => 4,
                ],
                'paramsString' => '-q {quality} -m {effort} {src} -o {dest}'
            ],
        ],
        'optimizers' => null,
        'mockImage' => getenv('MOCK_IMAGE') ?: null,
    ],
];
