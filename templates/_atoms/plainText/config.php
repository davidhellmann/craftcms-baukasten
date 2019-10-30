<?php
// Describe your component
$componentMeta = [
    'title' => 'plainText',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/plainText/',
    'description' => 'plainText Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'plainText',
    'status' => '',
    'description' => 'plainText Description goes here…',
    'cn' => 'a-plainText',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'text' => 'Lorem ipsum dolor sit amet, quas appetere qui te, vel ne enim putent tractatos, ullum inani et duo. Per placerat ocurreret te, eos diceret accumsan in? Qui no viderer vivendum facilisi, pro illud possim legimus at. Illum sonet numquam id vis. Ei accumsan nominati eos? Nam suas admodum ancillae ne? Nullam noster scribentur per cu, te duis consetetur adipiscing pri? Mollis deseruisse te mei. Cu euismod singulis suavitate eam. Ex eos purto similique, an eum fabellas adolescens! Dolor signiferumque cum id. Dicunt cetero detracto mea ei? Ex dico dolor vis, splendide vituperatoribus cu usu, ei mea posse sonet labores! Ad duo veritus intellegam, alterum appellantur vix et. Vis dissentiet repudiandae eu, decore integre principes per ei. Id vim stet mentitum repudiandae, pri mentitum qualisque ea, ex usu augue viderer suscipit. Ea vel mucius graecis, mentitum perfecto eu duo, duo eu ipsum urbanitas. Eruditi recteque abhorreant ius et, omnes dolore debitis vel ei? An inani copiosae nec, audiam sanctus nostrum est ea? Assum iuvaret mea id.

An populo iriure interesset sit! Eum quas zril nostrum ei. Est no esse illum, falli doming vix no? No pri causae petentium! Id vocibus volutpat deterruisset usu, vocibus verterem sed ne, usu ne similique temporibus! Ex vix dicat discere partiendo, at ignota corpora mei, posse percipitur mea ut. At doming commodo deseruisse sit, eu diceret fabulas eligendi vix, sea nostrum scriptorem ad! Quo cu eius tollit instructior.',
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'plainText' => array_merge($defaultVariant, []),
        /*
        'plainText--variantName' => array_merge($defaultVariant, [
            'title' => 'plainText Intro',
            'description' => 'plainText Description goes here…',
            'modifiers' => ['variant'],
        ]),
        */
    ]
];
