<?php

return [
    'auto' => [
        'transforms' => [
            ['width' => 1600],
            ['width' => 800],
            ['width' => 400],
            ['width' => 200],
        ],
    ],
    'square' => [
        'transforms' => [
            ['width' => 1600],
            ['width' => 800],
            ['width' => 400],
            ['width' => 200],
        ],
        'defaults' => [
            'ratio' => 1/1,
        ],
    ],
    'landscape' => [
        'transforms' => [
            ['width' => 1600],
            ['width' => 800],
            ['width' => 400],
            ['width' => 200],
        ],
        'defaults' => [
            'ratio' => 3/2,
        ],
    ],
    'portrait' => [
        'transforms' => [
            ['width' => 1600],
            ['width' => 800],
            ['width' => 400],
            ['width' => 200],
        ],
        'defaults' => [
            'ratio' => 2/3,
        ],
    ],
    'cover' => [
        'transforms' => [
            ['width' => 2400],
            ['width' => 1600],
            ['width' => 800],
            ['width' => 400],
            ['width' => 200],
        ],
    ],
];
