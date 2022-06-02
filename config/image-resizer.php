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
        'enabled' => true,
        'imageWidth' => 3000,
        'imageHeight' => 0,
        'imageQuality' => 95,
        'skipLarger' => false,
        'nonDestructiveResize' => false
    ],

    'production' => [],

    'staging' => [],

    'dev' => [],
];
