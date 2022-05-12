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
    'craftEnv' => App::env('CRAFT_ENVIRONMENT') ?: 'dev',
    'localDevPerformance' => (bool)App::env('LOCAL_DEV_PERFORMANCE') ?: null,
    'dominantColor' => '#e8e8e8',
];
