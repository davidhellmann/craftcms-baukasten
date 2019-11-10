<?php
// Describe your component
$componentMeta = [
    'title' => 'spinner',
    'status' => 'wip',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/spinner/',
    'description' => 'spinner Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'spinner',
    'status' => '',
    'description' => 'spinner Description goes here…',
    'cn' => 'a-spinner',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
];

return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'spinner' => array_merge($defaultVariant, []),
        /*
        'spinner--variantName' => array_merge($defaultVariant, [
            'title' => 'spinner Intro',
            'description' => 'spinner Description goes here…',
            'modifiers' => [],
'variant' => 'basic',
        ]),
        */
    ]
];
