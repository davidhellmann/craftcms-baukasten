<?php
// Describe your component
$componentMeta = [
    'title' => 'DefinitionList',
    'status' => 'none',
    'visible' => true,
    'type' => 'molecule',
    'path' => '_molecules/definitionList/',
    'description' => 'definitionList Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'DefinitionList',
    'status' => '',
    'description' => 'definitionList Description goes here…',
    'cn' => 'm-definitionList',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'items' => [
        array(
            'term' => 'Foo bar',
            'description' => 'Lorem ipsum dolor sit amet, quas appetere qui te, vocibus verterem sed ne, usu ne similique temporibus! Ex vix dicat discere partiendo, at ignota corpora mei, posse percipitur mea ut. At doming commodo deseruisse sit, eu diceret fabulas eligendi vix, sea nostrum scriptorem ad! Quo cu eius tollit instructior.'
        ),
        array(
            'term' => 'Foo bar',
            'description' => 'Lorem ipsum dolor sit amet, quas appetere qui te, vocibus verterem sed ne, usu ne similique temporibus! Ex vix dicat discere partiendo, at ignota corpora mei, posse percipitur mea ut. At doming commodo deseruisse sit, eu diceret fabulas eligendi vix, sea nostrum scriptorem ad! Quo cu eius tollit instructior.'
        ),
    ],
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'definitionList' => array_merge($defaultVariant, []),
        /*
        'definitionList--variantName' => array_merge($defaultVariant, [
            'title' => 'definitionList Intro',
            'description' => 'definitionList Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
