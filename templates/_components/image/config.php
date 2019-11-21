<?php
// Describe your component
$componentMeta = [
    'title' => 'image',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/image/',
    'description' => 'Default Image Formats.'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Image landscape',
    'status' => '',
    'description' => 'This is an image in landscape mode.',
    'cn' => 'a-image',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'ratio' => 'landscape',
    'dominantColor' => true,
    'objectFit' => null,
    'maxWidth' => null,
    'image' => \craft\elements\Asset::find()->one(),
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'image--landscape' => array_merge($defaultVariant, []),
        'image--portrait' => array_merge($defaultVariant, [
            'title' => 'Image portrait',
            'description' => 'This is an image in portrait mode.',
            'ratio' => 'portrait',
        ]),
        'image--square' => array_merge($defaultVariant, [
            'title' => 'Image square',
            'description' => 'This is an image in square mode.',
            'ratio' => 'square',
        ]),
    ]
];
