<?php
// Describe your component
$componentMeta = [
    'title' => 'code',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => 'atoms/code',
    'description' => 'code Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'code',
    'status' => '',
    'description' => 'code Description goes here…',
    'cn' => 'a-code',
    'modifiers' => [],
    'customClasses' => ['js-code'],
    'data' => [],
    'waypoint' => null,
    'waypointAni' => null,
    'text' => 'code lorem ipsum dolor sit amet…',
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
        'code' => array_merge($defaultVariant, []),
        /*
        'code--variantName' => array_merge($defaultVariant, [
            'title' => 'code Intro',
            'description' => 'code Description goes here…',
            'modifiers' => [],
'variant' => 'basic',
        ]),
        */
    ]
];
