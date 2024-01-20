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
    'types' => ['blockImage', 'blockImages', 'blockVideoYoutube'],
];

$groupMisc = [
    'label' => 'Misc',
    'types' => ['blockSpacer', 'blockDivider'],
];

$blockTabSettings = [
    'blockSection' => [
        'tabs' => [
            [
                'label' => 'Settings',
                'fields' => ['sectionBackgroundColor', 'spaceBetweenBlocks', 'sectionPaddingVertical'],
            ]
        ]
    ],
    'blockQuote' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['quote', 'source', 'sourceSubline', 'sourceUrl'],
            ]
        ]
    ],
    'blockImage' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['image', 'imageRatio', 'showImageCaption', 'imageWidth'],
            ]
        ]
    ],
    'blockImages' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['images', 'imageRatio', 'showImageCaption', 'variant'],
            ]
        ]
    ],
    'blockTextFloatingImage' => [
        'tabs' => [
            [
                'label' => 'Text : Image',
                'fields' => ['text', 'image', 'imageRatio', 'showImageCaption', 'imagePosition'],
            ]
        ]
    ],
    'blockVideoYoutube' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['videoId','autoplay', 'loop', 'videoWidth'],
            ]
        ]
    ],
    'blockCode' => [
        'tabs' => [
            [
                'label' => 'Content',
                'fields' => ['snippetName', 'snippet', 'snippetCollapsed'],
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
