<?php
// Describe your component
$componentMeta = [
    'title' => 'slider',
    'status' => 'none',
    'visible' => true,
    'type' => 'organism',
    'path' => '_organisms/slider/',
    'description' => 'slider Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Image Slider Landscape Sized',
    'status' => '',
    'description' => 'slider Description goes here…',
    'cn' => 'o-slider',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => true,
    'waypoint' => null,
    'waypointAni' => null,
    'images' => \craft\elements\Asset::find()->limit(12)->all(),
    'caption' => false,
    'ratio' => 'landscape',
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'slider' => array_merge($defaultVariant, []),
        'slider--landscape-caption' => array_merge($defaultVariant, [
            'title' => 'Image Slider Landscape Sized with Caption',
            'caption' => true
        ]),
        'slider--square' => array_merge($defaultVariant, [
            'title' => 'Image Slider Square Sized',
            'ratio' => 'square'
        ]),
        'slider--portrait' => array_merge($defaultVariant, [
            'title' => 'Image Slider Portrait Sized',
            'ratio' => 'portrait'
        ]),
        'slider--auto' => array_merge($defaultVariant, [
            'title' => 'Image Slider Auto Sized',
            'ratio' => 'auto'
        ]),
    ]
];
