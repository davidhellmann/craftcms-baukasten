<?php
// Vars
$comp = '/../../templates/_components/';
$page = '/../../templates/';

// Globals
$globals = [
    'translate.global.days.monday' => 'Montag',
    'translate.global.days.tuesday' => 'Dienstag',
    'translate.global.days.wednesday' => 'Mittwoch',
    'translate.global.days.thursday' => 'Donnerstag',
    'translate.global.days.friday' => 'Freitag',
    'translate.global.days.saturday' => 'Samstag',
    'translate.global.days.sunday' => 'Sonntag',
];

// Merge
return array_merge(
    $globals,
    include __DIR__ . $comp . 'code/translate.de.component.code.php',
    include __DIR__ . $comp . 'link/translate.de.component.link.php',
    include __DIR__ . $comp . 'link/translate.de.component.linkIcon.php'
);

