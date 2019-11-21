<?php
// Describe your component
$componentMeta = [
    'title' => 'gridOverlay',
    'status' => 'wip',
    'visible' => false,
    'type' => 'molecule',
    'path' => '_molecules/gridOverlay/',
    'description' => 'gridOverlay Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'gridOverlay',
    'status' => '',
    'description' => 'gridOverlay Description goes here…',
    'cn' => 'm-gridOverlay',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'cols' => null,
];

return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'gridOverlay' => array_merge($defaultVariant, []),
        /*
        'gridOverlay--variantName' => array_merge($defaultVariant, [
            'title' => 'gridOverlay Intro',
            'description' => 'gridOverlay Description goes here…',
            'modifiers' => [],
'variant' => 'basic',
        ]),
        */
    ]
];
