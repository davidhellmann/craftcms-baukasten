<?php
// Describe your component
$componentMeta = [
    'title' => 'imageCover',
    'status' => 'none',
    'visible' => true,
    'type' => 'organism',
    'path' => '_organisms/imageCover/',
    'description' => 'imageCover Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'imageCover',
    'status' => '',
    'description' => 'imageCover Description goes here…',
    'cn' => 'o-imageCover',
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
        'imageCover' => array_merge($defaultVariant, []),
        /*
        'imageCover--variantName' => array_merge($defaultVariant, [
            'title' => 'imageCover Intro',
            'description' => 'imageCover Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
