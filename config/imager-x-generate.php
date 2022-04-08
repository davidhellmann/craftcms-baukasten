<?php

$transforms = [
    'auto',
    'autoWebp',
];

return [
    'volumes' => [
        'images' => $transforms,
        'templateImages' => $transforms,
        'users' => $transforms,
    ],
];
