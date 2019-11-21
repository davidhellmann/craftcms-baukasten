<?php
// Describe your component
$componentMeta = [
    'title' => 'imageGallery',
    'status' => 'none',
    'visible' => true,
    'type' => 'organism',
    'path' => '_organisms/imageGallery/',
    'description' => 'imageGallery Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Image Gallery Square Sized Thumbs',
    'status' => '',
    'description' => 'imageGallery Description goes here…',
    'cn' => 'o-imageGallery',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => true,
    'waypoint' => null,
    'waypointAni' => null,
    'images' => \craft\elements\Asset::find()->limit(10)->all(),
    'ratio' => 'square'
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'imageGallery' => array_merge($defaultVariant, []),
        'imageGallery--landscape' => array_merge($defaultVariant, [
            'title' => 'Image Gallery Landscape Sized Thumbs',
            'ratio' => 'landscape'
        ]),
        'imageGallery--portrait' => array_merge($defaultVariant, [
            'title' => 'Image Gallery Portrait Sized Thumbs',
            'ratio' => 'portrait'
        ]),
        'imageGallery--auto' => array_merge($defaultVariant, [
            'title' => 'Image Gallery Auto Sized Thumbs',
            'ratio' => 'auto'
        ]),
    ]
];
