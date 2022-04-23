<?php

$groupSection = [
    'label' => 'Sections',
    'types' => ['blockSection'],
];

$groupText = [
    'label' => 'Text',
    'types' => ['blockText', 'blockQuote', 'blockCode'],
];

$groupTextMedia = [
    'label' => 'Text + Media',
    'types' => ['blockTextFloatingImage'],
];

$groupMedia = [
    'label' => 'Media',
    'types' => ['blockImage', 'blockImageGrid', 'blockImageGridCalculated', 'blockImageGallery', 'blockImageSlider', 'blockVideoYoutube'],
];

$groupMisc = [
    'label' => 'Misc',
    'types' => ['blockSpacer', 'blockDivider'],
];

$blockTabSettings = [
    'blockSection' => [
        'tabs' => [
            [
                'label' => 'Background',
                'fields' => ['sectionBackgroundColor'],
            ],
            [
                'label' => 'Settings',
                'fields' => ['spaceBetweenBlocks', 'sectionPaddingVertical'],
            ]
        ]
    ],
    'blockQuote' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['quote'],
            ],
            [
                'label' => 'Quote Details',
                'fields' => ['source', 'sourceSubline', 'sourceUrl'],
            ]
        ]
    ],
    'blockImage' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['image'],
            ],
            [
                'label' => 'Settings',
                'fields' => ['imageTransform', 'showImageCaption', 'imageWidth'],
            ]
        ]
    ],
    'blockImageGrid' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['images'],
            ],
            [
                'label' => 'Settings',
                'fields' => ['imageTransform', 'imageColumns', 'showImageCaption'],
            ]
        ]
    ],
    'blockImageGridCalculated' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['images'],
            ],
            [
                'label' => 'Settings',
                'fields' => ['showImageCaption'],
            ]
        ]
    ],
    'blockImageSlider' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['images'],
            ],
            [
                'label' => 'Settings',
                'fields' => ['imageTransform'],
            ]
        ]
    ],
    'blockTextFloatingImage' => [
        'tabs' => [
            [
                'label' => 'Text',
                'fields' => ['text'],
            ],
            [
                'label' => 'Image',
                'fields' => ['image'],
            ],
            [
                'label' => 'Settings',
                'fields' => ['imageTransform', 'showImageCaption', 'imagePosition'],
            ]
        ]
    ],
    'blockVideoYoutube' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['videoId'],
            ],
            [
                'label' => 'Settings',
                'fields' => ['autoplay', 'loop', 'videoWidth'],
            ]
        ]
    ],
    'blockCode' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['snippetName', 'snippet'],
            ], [
                'label' => 'Settings',
                'fields' => ['snippetLanguage', 'snippetCollapsed'],
            ]
        ]
    ]
];

return [
    'fields' => [
        'builderContent' => [
            'groups' => [
                $groupSection,
                $groupText,
                $groupTextMedia,
                $groupMedia,
                $groupMisc
            ],
            'types' => $blockTabSettings
        ],
    ],
];
