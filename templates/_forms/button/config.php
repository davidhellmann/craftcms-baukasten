<?php
// Describe your component
$componentMeta = [
    'title' => 'button',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/button/',
    'description' => 'Button Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Button default',
    'status' => '',
    'description' => 'button Description goes here…',
    'cn' => 'a-button',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'text' => "Click me",
    'icon' => null,
    'for' => null,
    'type' => null,
    'disabled' => null
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'button' => array_merge($defaultVariant, []),
        'button--disabled' => array_merge($defaultVariant, [
            'title' => 'Button disabled',
            'disabled' => true,
            'modifiers' => ['styleDisabled'],
        ]),
        'button--primary' => array_merge($defaultVariant, [
            'title' => 'Button primary',
            'modifiers' => ['stylePrimary'],
        ]),
        'button--secondary' => array_merge($defaultVariant, [
            'title' => 'Button secondary',
            'modifiers' => ['styleSecondary'],
        ]),
        'button--withIcon' => array_merge($defaultVariant, [
            'title' => 'Button with icon',
            'icon' => 'iconArrowRight',
        ]),
        'button--inline' => array_merge($defaultVariant, [
            'title' => 'Button inline',
            'modifiers' => ['styleInline'],
        ]),
    ]
];
