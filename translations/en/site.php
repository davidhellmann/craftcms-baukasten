<?php
// Vars
$comp = '/../../templates/_components/';
$page = '/../../templates/';

// Globals
$globals = [];

// Merge
return array_merge(
    $globals,
    include __DIR__ . $comp . 'code/translate.en.component.code.php',
    include __DIR__ . $comp . 'link/translate.en.component.link.php',
    include __DIR__ . $comp . 'link/translate.en.component.linkIcon.php'
);

