<?php
// Describe your component
$componentMeta = [
    'title' => 'appFooter',
    'status' => 'none',
    'visible' => true,
    'type' => 'organism',
    'path' => '_organisms/appFooter/',
    'description' => 'appFooter Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'appFooter',
    'status' => '',
    'description' => 'appFooter Description goes here…',
    'cn' => 'o-appFooter',
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
        'appFooter' => array_merge($defaultVariant, []),
        /*
        'appFooter--variantName' => array_merge($defaultVariant, [
            'title' => 'appFooter Intro',
            'description' => 'appFooter Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
