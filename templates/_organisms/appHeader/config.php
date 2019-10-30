<?php
// Describe your component
$componentMeta = [
    'title' => 'appHeader',
    'status' => 'none',
    'visible' => true,
    'type' => 'organism',
    'path' => '_organisms/appHeader/',
    'description' => 'appHeader Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'appHeader',
    'status' => '',
    'description' => 'appHeader Description goes here…',
    'cn' => 'o-appHeader',
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
        'appHeader' => array_merge($defaultVariant, []),
        /*
        'appHeader--variantName' => array_merge($defaultVariant, [
            'title' => 'appHeader Intro',
            'description' => 'appHeader Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
