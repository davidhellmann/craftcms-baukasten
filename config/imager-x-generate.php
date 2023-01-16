<?php

$transforms = [
    'auto',
    'autoAvif',
];

return [
    'volumes' => [
        'images' => $transforms,
        'templateImages' => $transforms,
        'users' => $transforms,
    ],
];
