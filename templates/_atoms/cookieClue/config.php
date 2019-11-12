<?php
// Describe your component
$componentMeta = [
    'title' => 'cookieClue',
    'status' => 'wip',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/cookieClue/',
    'description' => 'cookieClue Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'cookieClue',
    'status' => '',
    'description' => 'cookieClue Description goes here…',
    'cn' => 'a-cookieClue',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'variant' => 'basic',
    'foo' => null,
];

return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'cookieClue' => array_merge($defaultVariant, []),
        /*
        'cookieClue--variantName' => array_merge($defaultVariant, [
            'title' => 'cookieClue Intro',
            'description' => 'cookieClue Description goes here…',
            'modifiers' => [],
'variant' => 'basic',
        ]),
        */
    ]
];
