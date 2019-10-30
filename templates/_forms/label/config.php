<?php
// Describe your component
$componentMeta = [
    'title' => 'label',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/label/',
    'description' => 'label Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'label',
    'status' => '',
    'description' => 'label Description goes here…',
    'cn' => 'a-label',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'element' => 'label',
    'text' => 'This is a label.',
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'label' => array_merge($defaultVariant, []),
        /*
        'label--variantName' => array_merge($defaultVariant, [
            'title' => 'label Intro',
            'description' => 'label Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
