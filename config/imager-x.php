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
        'optimizers' => null,
        'mockImage' => getenv('MOCK_IMAGE') ?: null,
    ],
];
