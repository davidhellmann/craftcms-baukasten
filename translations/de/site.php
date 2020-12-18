<?php
$translateComponentCode = include __DIR__ . '/../../templates/_components/code/translate.de.component.code.php';
$translateComponentLink = include __DIR__ . '/../../templates/_components/link/translate.de.component.link.php';
$translateComponentLinkIcon = include __DIR__ . '/../../templates/_components/link/translate.de.component.linkIcon.php';

$defaults = [];

return array_merge(
    $defaults,
    $translateComponentCode,
    $translateComponentLink,
    $translateComponentLinkIcon
);

