<?php
// Describe your component
$componentMeta = [
    'title' => 'spacer',
    'status' => 'wip',
    'visible' => true,
    'type' => 'c',
    'path' => 'src/templates/_components/spacer/',
    'description' => 'spacer Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'spacer',
    'status' => '',
    'description' => 'spacer Description goes here…',
    'cn' => 'c-spacer',
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
        'spacer' => array_merge($defaultVariant, []),
        /*
        'spacer--variantName' => array_merge($defaultVariant, [
            'title' => 'spacer Intro',
            'description' => 'spacer Description goes here…',
            'modifiers' => [],
'variant' => 'basic',
        ]),
        */
    ]
];
