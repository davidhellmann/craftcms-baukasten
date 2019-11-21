<?php
// Describe your component
$componentMeta = [
    'title' => 'navMain',
    'status' => 'none',
    'visible' => true,
    'type' => 'molecule',
    'path' => '_molecules/navMain/',
    'description' => 'navMain Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'navMain',
    'status' => '',
    'description' => 'navMain Description goes here…',
    'cn' => 'm-navMain',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'items' => \craft\elements\Entry::find()->where([
        'sectionId' => 3,
    ])->all(),
];

return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'navMain' => array_merge($defaultVariant, []),
        /*
        'navMain--variantName' => array_merge($defaultVariant, [
            'title' => 'navMain Intro',
            'description' => 'navMain Description goes here…',
            'modifiers' => [],
'variant' => 'basic',
        ]),
        */
    ]
];
