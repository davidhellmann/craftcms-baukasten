<?php
/**
 * Patternlib
 */

$dir = __DIR__ . "/../templates/hidden/patternlib/components";
$components = new RecursiveDirectoryIterator($dir);

$componentList = [];

foreach (new RecursiveIteratorIterator($components) as $file) {
    if ($file->getExtension() === 'twig') {
        $componentList[pathinfo($file)['filename']] = [
            'title' => pathinfo($file)['filename'],
            'url' => 'components/' . pathinfo($file)['filename'],
        ];
    }
}


// Sort Array
ksort($componentList);

return [
    'pageTitle' => 'Pattern Library',
    'path' => '/hidden/patternlib/',
    'navigation' => [
        'components' => [
            'title' => 'Components',
            'childs' => $componentList,
        ],
    ],
];
