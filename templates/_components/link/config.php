<?php
// Describe your component
$componentMeta = [
    'title' => 'link',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/link/',
    'description' => 'link Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Link primary',
    'status' => '',
    'description' => 'This is a primary link.',
    'cn' => 'a-link',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'url' => 'http://baukasten.io',
    'targetBlank' => null,
    'text' => 'This is a link',
    'icon' => null,
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'link' => array_merge($defaultVariant, []),
        'link--secondary' => array_merge($defaultVariant, [
            'title' => 'link secondary',
            'description' => 'This is a secondary link.',
            'modifiers' => ['styleSecondary'],
        ]),
        'link--inline' => array_merge($defaultVariant, [
            'title' => 'link inline',
            'description' => 'This is a inline link.',
            'modifiers' => ['inline'],
        ]),
    ]
];
