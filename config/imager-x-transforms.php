<?php

$defaultTransforms = [
    ['width' => 200],
    ['width' => 400],
    ['width' => 800],
    ['width' => 1600],
];

$thumbnailTransforms = [
    ['width' => 100],
    ['width' => 200],
    ['width' => 400],
];

return [
    'auto' => [
        'transforms' => $defaultTransforms,
    ],
    'autoWebp' => [
        'transforms' => $defaultTransforms,
        'defaults' => [
            'format' => 'webp'
        ],
    ],
    'square' => [
        'transforms' => $defaultTransforms,
        'defaults' => [
            'ratio' => 1,
        ],
    ],
    'squareWebp' => [
        'transforms' => $defaultTransforms,
        'defaults' => [
            'ratio' => 1,
            'format' => 'webp'
        ],
    ],
    'landscape' => [
        'transforms' => $defaultTransforms,
        'defaults' => [
            'ratio' => 3 / 2,
        ],
    ],
    'landscapeWebp' => [
        'transforms' => $defaultTransforms,
        'defaults' => [
            'ratio' => 3 / 2,
            'format' => 'webp'
        ],
    ],
    'portrait' => [
        'transforms' => $defaultTransforms,
        'defaults' => [
            'ratio' => 2 / 3,
        ],
    ],
    'portraitWebp' => [
        'transforms' => $defaultTransforms,
        'defaults' => [
            'ratio' => 2 / 3,
            'format' => 'webp'
        ],
    ],
    'thumbnail' => [
        'transforms' => $thumbnailTransforms,
        'defaults' => [
            'ratio' => 1,
        ],
    ],
    'dominantColor' => [
        'transforms' => [
            ['width' => 30],
        ],
    ],
];
