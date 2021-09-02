<?php
// Vars
$page = '/../../templates/';
$lang = 'en';

// Global Translations
$globalTranslations = [
    'translate.global.days.monday' => 'Monday',
    'translate.global.days.tuesday' => 'Tuesday',
    'translate.global.days.wednesday' => 'Wednesday',
    'translate.global.days.thursday' => 'Thursday',
    'translate.global.days.friday' => 'Friday',
    'translate.global.days.saturday' => 'Saturday',
    'translate.global.days.sunday' => 'Sunday',
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
