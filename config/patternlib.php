<?php
/**
 * Patternlib
 */

/* Component Root */
$dir = __DIR__ . "/../templates/hidden/patternlib/";

/* Create Components Tree */
$componentList = [];
$components = new RecursiveDirectoryIterator($dir . "components");
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
        ]
    ]
];
