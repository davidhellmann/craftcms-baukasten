<?php
$translateComponentCode = include __DIR__ . '/../../templates/_components/code/translate.en.component.code.php';
$translateComponentLink = include __DIR__ . '/../../templates/_components/link/translate.en.component.link.php';
$translateComponentLinkIcon = include __DIR__ . '/../../templates/_components/link/translate.en.component.linkIcon.php';

$defaults = [];

return array_merge(
    $defaults,
    $translateComponentCode,
    $translateComponentLink,
    $translateComponentLinkIcon
);

