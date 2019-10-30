<?php
// Describe your component
$componentMeta = [
    'title' => 'Caption',
    'status' => 'none',
    'visible' => true,
    'type' => 'molecule',
    'path' => '_molecules/caption/',
    'description' => 'caption Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Caption',
    'status' => '',
    'description' => 'caption Description goes here…',
    'cn' => 'm-caption',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'element' => 'figcaption',
    'headline' => 'Caption headline:',
    'text' => 'This is a caption maybe for an image.',
    'source' => 'David Hellmann',
    'sourceUrl' => 'https://davidhellmann.com'
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'caption' => array_merge($defaultVariant, []),
        'caption--noHeadline' => array_merge($defaultVariant, [
            'title' => 'Caption without headline',
            'headline' => null
        ]),
        'caption--noSource' => array_merge($defaultVariant, [
            'title' => 'Caption without source',
            'source' => null,
            'sourceUrl' => null
        ]),
    ],
];
