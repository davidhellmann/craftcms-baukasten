<?php
// Describe your component
$componentMeta = [
    'title' => 'radio',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/radio/',
    'description' => 'radio Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Radio',
    'status' => '',
    'description' => 'radio Description goes here…',
    'cn' => 'a-radio',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'name' => 'Sample',
    'label' => 'Sample radio button',
    'disabled' => null,
    'checked' => true,
    'id' => null,
    'value' => null,
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'radio--default' => array_merge($defaultVariant, []),
        'radio--disabled' => array_merge($defaultVariant, [
            'title' => 'Radio disabled',
            'disabled' => true,
            'modifiers' => ['styleDisabled'],
        ]),
    ]
];
