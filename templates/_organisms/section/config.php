<?php
// Describe your component
$componentMeta = [
    'title' => 'section',
    'status' => 'none',
    'visible' => true,
    'type' => 'organism',
    'path' => '_organisms/section/',
    'description' => 'section Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'section',
    'status' => '',
    'description' => 'section Description goes here…',
    'cn' => 'o-section',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'foo' => null,
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'section' => array_merge($defaultVariant, []),
        /*
        'section--variantName' => array_merge($defaultVariant, [
            'title' => 'section Intro',
            'description' => 'section Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
