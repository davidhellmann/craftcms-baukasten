<?php
// Describe your component
$componentMeta = [
    'title' => 'imageGrid',
    'status' => 'none',
    'visible' => true,
    'type' => 'organism',
    'path' => '_organisms/imageGrid/',
    'description' => 'imageGrid Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Image Grid Two Columns',
    'status' => '',
    'description' => 'imageGrid Description goes here…',
    'cn' => 'o-imageGrid',
    'modifiers' => ['c-2'],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'images' => \craft\elements\Asset::find()->limit(2)->all(),
    'ratio' => 'portrait'
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'imageGrid' => array_merge($defaultVariant, []),
        'imageGrid--c-2-landscape' => array_merge($defaultVariant, [
            'title' => 'Image Grid Two Columns Landscape',
            'ratio' => 'landscape'
        ]),
        'imageGrid--c-2-square' => array_merge($defaultVariant, [
            'title' => 'Image Grid Two Columns Square',
            'ratio' => 'square'
        ]),
        'imageGrid--c-2-auto' => array_merge($defaultVariant, [
            'title' => 'Image Grid Two Columns Auto',
            'ratio' => 'auto'
        ]),
        'imageGrid--c-2-portrait-caption' => array_merge($defaultVariant, [
            'title' => 'Image Grid Two Columns Portrait with Caption',
            'ratio' => 'portrait',
            'caption' => true
        ]),
        'imageGrid--c-3' => array_merge($defaultVariant, [
            'title' => 'Image Grid Three Columns',
            'images' => \craft\elements\Asset::find()->limit(3)->all(),
            'modifiers' => ['c-3'],
        ]),
        'imageGrid--c-4' => array_merge($defaultVariant, [
            'title' => 'Image Grid Four Columns',
            'images' => \craft\elements\Asset::find()->limit(4)->all(),
            'modifiers' => ['c-4'],
        ]),
        'imageGrid--single' => array_merge($defaultVariant, [
            'title' => 'Image Grid One Column',
            'modifiers' => [],
            'images' => \craft\elements\Asset::find()->limit(1)->all(),
        ]),
    ]
];
