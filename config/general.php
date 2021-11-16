<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

return [
    // Craft config settings from .env variables
    'aliases' => [
        '@assetsUrl' => App::env('ASSETS_URL'),
        '@web' => App::env('SITE_URL'),
        '@webroot' => App::env('WEB_ROOT_PATH'),
    ],
    'custom' => [
        'craftEnv' => App::env('ENVIRONMENT') ?: 'local',
        'localDevPerformance' => (bool)App::env('LOCAL_DEV_PERFORMANCE') ?: null,
        'dominantColor' => '#e8e8e8',
    ],
    'disabledPlugins' => App::env('ENVIRONMENT') === 'live'
        ? ['dumper', 'elements-panel', 'blitz-recommendations', 'cp-field-inspect']
        : [],
    'allowedFileExtensions' => ['jpg', 'png', 'jpeg', 'gif', 'svg', 'mp4', 'wov', 'mp3', 'wav', 'pdf', 'zip', 'csv', 'rar'],
    'allowUpdates' => (bool)App::env('ALLOW_UPDATES'),
    'allowAdminChanges' => (bool)App::env('ALLOW_ADMIN_CHANGES'),
    'backupOnUpdate' => (bool)App::env('BACKUP_ON_UPDATE'),
    'devMode' => (bool)App::env('DEV_MODE'),
    'enableTemplateCaching' => (bool)App::env('ENABLE_TEMPLATE_CACHING'),
    'isSystemLive' => (bool)App::env('IS_SYSTEM_LIVE'),
    'resourceBasePath' => App::env('WEB_ROOT_PATH') . '/cpresources',
    'runQueueAutomatically' => (bool)App::env('RUN_QUEUE_AUTOMATICALLY'),
    'securityKey' => App::env('SECURITY_KEY'),
    'testToEmailAddress' => App::env('TEST_MAIL') ?: null,
    'enableGraphqlCaching' => (bool)App::env('ENABLE_GQL_CACHING'),
    // Craft config settings from constants
    'maxRevisions' => 5,
    'cacheDuration' => false,
    'defaultSearchTermOptions' => [
        'subLeft' => true,
        'subRight' => true,
    ],
    'defaultWeekStartDay' => 1,
    'defaultTokenDuration' => 'P2W',
    'enableCsrfProtection' => true,
    'errorTemplatePrefix' => 'errors/',
    'limitAutoSlugsToAscii' => true,
    'convertFilenamesToAscii' => true,
    'generateTransformsBeforePageLoad' => true,
    'maxCachedCloudImageSize' => 3000,
    'maxUploadFileSize' => '100M',
    'omitScriptNameInUrls' => true,
    'useEmailAsUsername' => false,
    'usePathInfo' => true,
    'useProjectConfigFile' => true,
];
