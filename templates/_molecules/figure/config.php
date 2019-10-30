<?php
// Describe your component
$componentMeta = [
    'title' => 'Figure',
    'status' => 'none',
    'visible' => true,
    'type' => 'molecule',
    'path' => '_molecules/figure/',
    'description' => 'figure Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Figure',
    'status' => '',
    'description' => 'figure Description goes here…',
    'cn' => 'm-figure',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'image' => \craft\elements\Asset::find()->one(),
    'caption' => true,
    'captionHeadline' => 'Caption Headline:',
    'captionText' => 'This is a caption.',
    'captionSource' => 'David Hellmann',
    'captionSourceUrl' => 'https://davidhellmann.com',
    'objectFit' => null
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'figure' => array_merge($defaultVariant, []),
        'figure--noCaption' => array_merge($defaultVariant, [
            'title' => 'figure without caption',
            'caption' => false
        ]),
    ]
];
