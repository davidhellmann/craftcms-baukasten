<?php
// Vars
$page = '/../../templates/';
$lang = 'de';

// Global Translations
$globalTranslations = [
    'translate.global.days.monday' => 'Montag',
    'translate.global.days.tuesday' => 'Dienstag',
    'translate.global.days.wednesday' => 'Mittwoch',
    'translate.global.days.thursday' => 'Donnerstag',
    'translate.global.days.friday' => 'Freitag',
    'translate.global.days.saturday' => 'Samstag',
    'translate.global.days.sunday' => 'Sonntag',
];

// Comp Translations
$compTranslations = [];

// Get all Files
$translationFiles = glob(__DIR__ . $page . "**/*/translate." . $lang . "*.php");

// Merge Files
foreach ($translationFiles as $translationFile) {
    $data = include $translationFile;
    if (!is_array($data)) {
        continue;
    }
    $compTranslations[] = $data;
}


// Return All Translations
return array_merge(...$compTranslations, ...[$globalTranslations]);
