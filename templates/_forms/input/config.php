<?php
// Describe your component
$componentMeta = [
    'title' => 'input',
    'status' => 'none',
    'visible' => true,
    'type' => 'atom',
    'path' => '_atoms/input/',
    'description' => 'input Description goes here…'
];

// That's your default Variant. When you need just a single
// Variant you can describe it all here.
$defaultVariant = [
    'title' => 'Input default',
    'status' => '',
    'description' => 'input Description goes here…',
    'cn' => 'a-input',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'type' => 'email',
    'name' => 'sample',
    'value' => null,
    'min' => null,
    'max' => null,
    'minlength' => null,
    'maxlength' => null,
    'readonly' => null,
    'pattern' => null,
    'required' => true,
    'disabled' => null,
    'step' => null,
    'info' => 'Please write in a correct email address.',
    'label' => 'Sample label',
    'id' => 'example',
    'placeholder' => null
];

// When you need more as one variant this part is your friend.
// You can add endless variants.
return [
    'meta' => array_merge($componentMeta, []),
    'variants' => [
        'input--default' => array_merge($defaultVariant, []),
        'input--disabled' => array_merge($defaultVariant, [
            'title' => 'Input disabled',
            'disabled' =>  true,
        ])
    ]
];
