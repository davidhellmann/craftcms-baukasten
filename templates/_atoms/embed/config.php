<?php
// Describe your component
$componentMeta = [
    'title' => 'embed',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/embed/',
    'description' => 'embed Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'embed',
    'status' => '',
    'description' => 'embed Description goes here…',
    'cn' => 'a-embed',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'code' => '<iframe width="560" height="315" src="https://www.youtube.com/embed/gYZICbPAXWk?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>',
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'embed' => array_merge($defaultVariant, []),
        /*
        'embed--variantName' => array_merge($defaultVariant, [
            'title' => 'embed Intro',
            'description' => 'embed Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
