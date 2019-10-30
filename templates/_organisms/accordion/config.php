<?php
// Describe your component
$componentMeta = [
    'title' => 'accordion',
    'status' => 'none',
    'visible' => true,
    'type' => 'embed',
    'path' => '_embeds/accordion/',
    'description' => 'accordion Description goes here…'
];

$defaultItem = array(
    'accordionTrigger' => 'This is a trigger',
    'accordionContent' => '<p>Lorem ipsum dolor sit amet, quas appetere qui te, vel ne enim putent tractatos, ullum inani et duo. Per placerat ocurreret te, eos diceret accumsan in? Qui no viderer vivendum facilisi, pro illud possim legimus at. Illum sonet numquam id vis. Ei accumsan nominati eos?</p><p>Lorem ipsum dolor sit amet, quas appetere qui te, vel ne enim putent tractatos, ullum inani et duo. Per placerat ocurreret te, eos diceret accumsan in? Qui no viderer vivendum facilisi, pro illud possim legimus at. Illum sonet numquam id vis. Ei accumsan nominati eos?</p>',
);

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'accordion',
    'status' => '',
    'description' => 'accordion Description goes here…',
    'cn' => 'o-accordion',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'items' => [
        $defaultItem,
        $defaultItem,
        $defaultItem,
        $defaultItem,
        $defaultItem,
        $defaultItem,
    ],
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'accordion' => array_merge($defaultVariant, []),
        /*
        'accordion--variantName' => array_merge($defaultVariant, [
            'title' => 'accordion Intro',
            'description' => 'accordion Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
