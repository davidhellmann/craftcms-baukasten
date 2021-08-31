<?php
/**
 * Patternlib
 */


$components = new DirectoryIterator(__DIR__ . "/../templates/dev/patternlib/components");

$compList = [];
foreach ($components as $comp) {
    if ($comp->isDot()) continue;

    $compList[pathinfo($comp)['filename']] = [
            'title' => pathinfo($comp)['filename'],
            'url' => 'components/' . pathinfo($comp)['filename'],
        ];
}

// Sort Array
ksort($compList);

return [
    'pageTitle' => 'Pattern Library',
    'path' => '/dev/patternlib/',
    'navigation' => [
        'components' => [
            'title' => 'Components',
            'childs' => $compList,
        ],
    ],
];
