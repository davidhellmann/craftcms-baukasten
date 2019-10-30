<?php
// Describe your component
$componentMeta = [
    'title' => 'icon',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/icon/',
    'description' => 'icon Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'SVG Icon 24',
    'status' => '',
    'description' => 'icon Description goes here…',
    'cn' => 'a-icon',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'icon' => 'social/instagram',
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'icon--24' => array_merge($defaultVariant, []),
        'icon--32' => array_merge($defaultVariant, [
            'title' => 'SVG Icon 32',
            'modifiers' => ['32'],
        ]),
        'icon--48' => array_merge($defaultVariant, [
            'title' => 'SVG Icon 48',
            'modifiers' => ['48'],
        ]),
        'icon--64' => array_merge($defaultVariant, [
            'title' => 'SVG Icon 64',
            'modifiers' => ['64'],
        ]),
        'icon--96' => array_merge($defaultVariant, [
            'title' => 'SVG Icon 96',
            'modifiers' => ['96'],
        ]),
    ]
];
