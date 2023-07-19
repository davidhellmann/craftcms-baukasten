<?php

$defaultTransforms = [
    ['width' => 200],
    ['width' => 600],
    ['width' => 1000],
    ['width' => 1400],
    ['width' => 1800],
];

$defaultTransformsAutoWidth = [
    ['width' => 200],
    ['width' => 600],
    ['width' => 1000],
    ['width' => 1400],
    ['width' => 1800],
];

return [
    'auto' => [
        'transforms' => $defaultTransforms,
    ],
    'autoAvif' => [
        'transforms' => $defaultTransforms,
        'defaults' => [
            'format' => 'avif'
        ],
    ],
    'autoWidth' => [
        'transforms' => $defaultTransformsAutoWidth,
    ],
    'autoWidthAvif' => [
        'transforms' => $defaultTransformsAutoWidth,
        'defaults' => [
            'format' => 'avif'
        ],
    ]
];
