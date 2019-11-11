<?php
// Describe your component
$componentMeta = [
    'title' => 'youtube',
    'status' => 'wip',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/youtube/',
    'description' => 'youtube Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'youtube',
    'status' => '',
    'description' => 'youtube Description goes here…',
    'cn' => 'a-youtube',
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
        'youtube' => array_merge($defaultVariant, []),
        /*
        'youtube--variantName' => array_merge($defaultVariant, [
            'title' => 'youtube Intro',
            'description' => 'youtube Description goes here…',
            'modifiers' => [],
'variant' => 'basic',
        ]),
        */
    ]
];
