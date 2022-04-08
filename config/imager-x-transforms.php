<?php

$defaultTransforms = [
    ['width' => 100],
    ['width' => 200],
    ['width' => 400],
    ['width' => 800],
    ['width' => 1600],
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
    'dominantColor' => [
        'transforms' => [
            ['width' => 30],
        ],
    ],
];
