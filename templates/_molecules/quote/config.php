<?php
// Describe your component
$componentMeta = [
    'title' => 'Quote',
    'status' => 'none',
    'visible' => true,
    'type' => 'molecule',
    'path' => '_molecules/quote/',
    'description' => 'quote Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Quote',
    'status' => '',
    'description' => 'quote Description goes here…',
    'cn' => 'm-quote',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'quote' => 'Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.',
    'source' => 'Georg C. Lichtenberg',
    'sourceUrl' => 'https://www.brainyquote.com/authors/georg_c_lichtenberg'
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'quote' => array_merge($defaultVariant, []),
        'quote--noSource' => array_merge($defaultVariant, [
            'title' => 'Quote without source',
            'source' => null
        ]),
    ]
];
