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

/* Create Vue Components Tree */
$vueComponentList = [];
$vueComponents = new RecursiveDirectoryIterator($dir . "vue-components");
foreach (new RecursiveIteratorIterator($vueComponents) as $file) {
    if ($file->getExtension() === 'twig') {
        $vueComponentList[pathinfo($file)['filename']] = [
            'title' => pathinfo($file)['filename'],
            'url' => 'vue-components/' . pathinfo($file)['filename'],
        ];
    }
}

// Sort Array
ksort($vueComponentList);

return [
    'pageTitle' => 'Pattern Library',
    'path' => '/hidden/patternlib/',
    'navigation' => [
        'components' => [
            'title' => 'Components',
            'childs' => $componentList,
        ],
        'vue-components' => [
            'title' => 'Vue Components',
            'childs' => $vueComponentList,
        ],
    ],
];
