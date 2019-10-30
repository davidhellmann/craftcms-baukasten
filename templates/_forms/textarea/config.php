<?php
// Describe your component
$componentMeta = [
    'title' => 'textarea',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/textarea/',
    'description' => 'textarea Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Textarea default',
    'status' => '',
    'description' => 'textarea Description goes here…',
    'cn' => 'a-textarea',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'name' => 'sample',
    'maxlength' => null,
    'autofocus' => null,
    'readonly' => null,
    'required' => true,
    'disabled' => null,
    'info' => 'Please write in a correct email address.',
    'label' => 'Sample label',
    'id' => null,
    'placeholder' => null
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'textarea--default' => array_merge($defaultVariant, []),
        'textarea--disabled' => array_merge($defaultVariant, [
            'title' => 'Textarea disabled',
            'disabled' =>  true,
            'modifiers' => ['styleDisabled'],
        ]),
    ]
];
