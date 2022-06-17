<?php

$defaultTransforms = [
    ['width' => 100],
    ['width' => 200],
    ['width' => 300],
    ['width' => 400],
    ['width' => 500],
    ['width' => 600],
    ['width' => 700],
    ['width' => 800],
    ['width' => 1200],
    ['width' => 1600],
    ['width' => 2400],
];

$defaultTransformsAutoWidth = [
    ['height' => 100],
    ['height' => 200],
    ['height' => 300],
    ['height' => 400],
    ['height' => 500],
    ['height' => 600],
    ['height' => 700],
    ['height' => 800],
    ['height' => 1200],
    ['height' => 1600],
    ['height' => 2400],
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
    'autoWidth' => [
        'transforms' => $defaultTransformsAutoWidth,
    ],
    'autoWidthWebp' => [
        'transforms' => $defaultTransformsAutoWidth,
        'defaults' => [
            'format' => 'webp'
        ],
    ]
];
