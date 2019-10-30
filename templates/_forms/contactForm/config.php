<?php
// Describe your component
$componentMeta = [
    'title' => 'contactForm',
    'status' => 'none',
    'visible' => true,
    'type' => 'organism',
    'path' => '_organisms/contactForm/',
    'description' => 'contactForm Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'contactForm',
    'status' => '',
    'description' => 'contactForm Description goes here…',
    'cn' => 'o-contactForm',
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
        'contactForm' => array_merge($defaultVariant, []),
        /*
        'contactForm--variantName' => array_merge($defaultVariant, [
            'title' => 'contactForm Intro',
            'description' => 'contactForm Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
