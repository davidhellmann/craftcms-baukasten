<?php
// Describe your component
$componentMeta = [
    'title' => 'Headline',
    'status' => 'done',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/headline/',
    'description' => 'This area the global / default Headline styles.'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Headline H1',
    'status' => '',
    'description' => 'This is a H1 Headline.',
    'cn' => 'a-headline',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'text' => 'The quick brown fox jumps over the lazy dog.',
    'size' => 'h1'
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'headline' => array_merge($defaultVariant, []),
        'headline--h2' => array_merge($defaultVariant, [
            'title' => 'Headline H2',
            'description' => 'This is a H2 Headline.',
            'size' => 'h2',
        ]),
        'headline--h3' => array_merge($defaultVariant, [
            'title' => 'Headline H3',
            'description' => 'This is a H3 Headline.',
            'size' => 'h3',
        ]),
        'headline--h4' => array_merge($defaultVariant, [
            'title' => 'Headline H4',
            'description' => 'This is a H4 Headline.',
            'size' => 'h4',
        ]),
        'headline--h5' => array_merge($defaultVariant, [
            'title' => 'Headline H5',
            'description' => 'This is a H5 Headline.',
            'size' => 'h5',
        ]),
        'headline--h6' => array_merge($defaultVariant, [
            'title' => 'Headline H6',
            'description' => 'This is a H6 Headline.',
            'size' => 'h6',
        ]),
    ]
];
