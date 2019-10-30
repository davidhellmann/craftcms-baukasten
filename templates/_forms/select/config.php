<?php
// Describe your component
$componentMeta = [
    'title' => 'select',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/select/',
    'description' => 'select Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Select',
    'status' => '',
    'description' => 'select Description goes here…',
    'cn' => 'a-select',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'array' => ['foo', 'bar'],
    'label' => 'Sample',
    'info' => 'Please select…'
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'select' => array_merge($defaultVariant, []),
        'select--disabled' => array_merge($defaultVariant, [
            'title' => 'Select disabled',
            'disabled' => true
        ]),
        'select--firstOption' => array_merge($defaultVariant, [
            'title' => 'Input custom first option',
            'firstOption' => [
                'text' => 'Please select',
                'value' => ''
            ]
        ]),
    ]
];
