<?php
// Describe your component
$componentMeta = [
    'title' => 'vueComp',
    'status' => 'wip',
    'visible' => true,
    'type' => 'molecule',
    'path' => '_molecules/vueComp/',
    'description' => 'vueComp Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'vueComp',
    'status' => '',
    'description' => 'vueComp Description goes here…',
    'cn' => 'm-vueComp',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'foo' => null,
];

return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'vueComp' => array_merge($defaultVariant, []),
        /*
        'vueComp--variantName' => array_merge($defaultVariant, [
            'title' => 'vueComp Intro',
            'description' => 'vueComp Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
