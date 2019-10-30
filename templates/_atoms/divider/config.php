<?php
// Describe your component
$componentMeta = [
    'title' => 'divider',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/divider/',
    'description' => 'divider Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'divider',
    'status' => '',
    'description' => 'divider Description goes here…',
    'cn' => 'a-divider',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'text' => 'divider lorem ipsum dolor sit amet…',
    'open' => true,
    'textShow' => 'Expand Code Block',
    'textHide' => 'Collapse Code Block',
    'snippet' => '<div class="foo">Foo Bar</div>',
    'language' => 'html'
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'divider' => array_merge($defaultVariant, []),
        'divider--mv-medium' => array_merge($defaultVariant, [
            'title' => 'divider margin medium',
            'modifiers' => ['mv-medium'],
        ]),
        'divider--mv-large' => array_merge($defaultVariant, [
            'title' => 'divider margin large',
            'modifiers' => ['mv-large'],
        ]),
        'divider--mv-none' => array_merge($defaultVariant, [
            'title' => 'divider margin none',
            'modifiers' => ['mv-none'],
        ]),
    ]
];
