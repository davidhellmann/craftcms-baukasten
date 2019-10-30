<?php
// Describe your component
$componentMeta = [
    'title' => 'checkbox',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/checkbox/',
    'description' => 'checkbox Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Checkbox default',
    'status' => '',
    'description' => 'checkbox Description goes here…',
    'cn' => 'a-checkbox',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'name' => 'sample',
    'disabled' => null,
    'checked' => null,
    'label' => 'Sample checkbox',
    'id' => 'sample',
    'value' => null
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'checkbox' => array_merge($defaultVariant, []),
        'checkbox--disabled' => array_merge($defaultVariant, [
            'title' => 'Checkbox disabled',
            'disabled' => true,
            'modifiers' => ['styleDisabled'],
        ]),
    ]
];
