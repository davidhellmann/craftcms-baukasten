<?php
// Describe your component
$componentMeta = [
    'title' => 'appWrapper',
    'status' => 'none',
    'visible' => true,
    'type' => 'organism',
    'path' => '_organisms/appWrapper/',
    'description' => 'appWrapper Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'appWrapper',
    'status' => '',
    'description' => 'appWrapper Description goes here…',
    'cn' => 'o-appWrapper',
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
        'appWrapper' => array_merge($defaultVariant, []),
        /*
        'appWrapper--variantName' => array_merge($defaultVariant, [
            'title' => 'appWrapper Intro',
            'description' => 'appWrapper Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
