<?php
// Describe your component
$componentMeta = [
    'title' => 'appContent',
    'status' => 'none',
    'visible' => true,
    'type' => 'organism',
    'path' => '_organisms/appContent/',
    'description' => 'appContent Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'appContent',
    'status' => '',
    'description' => 'appContent Description goes here…',
    'cn' => 'o-appContent',
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
        'appContent' => array_merge($defaultVariant, []),
        /*
        'appContent--variantName' => array_merge($defaultVariant, [
            'title' => 'appContent Intro',
            'description' => 'appContent Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
