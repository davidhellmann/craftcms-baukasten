<?php
/**
 * Imager X plugin for Craft CMS
 *
 * Ninja powered image transforms.
 *
 * @link      https://www.spacecat.ninja
 * @copyright Copyright (c) 2020 André Elvan
 */

use craft\helpers\App;

return [
    '*' => [
        'transformer' => 'craft',
        'imagerSystemPath' => '@webroot/transforms/imager/',
        'imagerUrl' => '/transforms/imager/',
        'filenamePattern' => '{basename}_{transformString}_{transformString|hash}.{extension}',
        'cacheDuration' => 31536000, // 1 Year
        'cacheDurationRemoteFiles' => 31536000, // 1 Year
        'cacheDurationExternalStorage' => 31536000, // 1 Year
        'jpegQuality' => 90,
        'avifQuality' => 90,
        'webpQuality' => 90,
        'pngCompressionLevel' => 0,
        'allowUpscale' => false,
        'optimizers' => [
            'jpegoptim',
            'jpegtran',
            'mozjpeg',
            'optipng',
            'gifsicle',
        ],
        'fallbackImage' => App::env('FALLBACK_IMAGE') ?: null,
        'hideClearCachesForUserGroups' => [],
    ],

    'production' => [
    ],

    'staging' => [
        'optimizers' => null
    ],

    'dev' => [
        'optimizers' => null,
        'mockImage' => App::env('MOCK_IMAGE') ?: null,
    ],
];
