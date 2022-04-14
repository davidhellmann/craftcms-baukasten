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

return [
    'auto' => [
        'transforms' => $defaultTransforms,
    ],
    'autoWebp' => [
        'transforms' => $defaultTransforms,
        'defaults' => [
            'format' => 'webp'
        ],
    ]
];
