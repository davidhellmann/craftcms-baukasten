<?php
// Describe your component
$componentMeta = [
    'title' => 'imageSingle',
    'status' => 'none',
    'visible' => true,
    'type' => 'organism',
    'path' => '_organisms/imageSingle/',
    'description' => 'imageSingle Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Image Single Landscape',
    'status' => '',
    'description' => 'imageSingle Description goes here…',
    'cn' => 'o-imageSingle',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'image' => \craft\elements\Asset::find()->one(),
    'ratio' => 'landscape'
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'imageSingle' => array_merge($defaultVariant, []),
        'imageSingle--landscape-caption' => array_merge($defaultVariant, [
            'title' => 'Image Single Landscape with caption',
            'ratio' => 'landscape',
            'caption' => true
        ]),
        'imageSingle--portrait' => array_merge($defaultVariant, [
            'title' => 'Image Single Portrait',
            'ratio' => 'portrait'
        ]),
        'imageSingle--square' => array_merge($defaultVariant, [
            'title' => 'Image Single Square',
            'ratio' => 'square'
        ]),
        'imageSingle--auto' => array_merge($defaultVariant, [
            'title' => 'Image Single Auto',
            'ratio' => 'auto'
        ]),
    ]
];
