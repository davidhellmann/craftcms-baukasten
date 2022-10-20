<?php
/**
 * Vite plugin for Craft CMS 3.x
 *
 * Allows the use of the Vite.js next generation frontend tooling with Craft CMS
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2021 nystudio107
 */

/**
 * Vite config.php
 *
 * This file exists only as a template for the Vite settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'vite.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

use craft\helpers\App;

$isDev = App::env('CRAFT_ENVIRONMENT') === 'dev';
$isProd = App::env('CRAFT_ENVIRONMENT') === 'production';


return [
    'useDevServer' => $isDev,
    'manifestPath' => '@webroot/dist/manifest.json',
    'devServerPublic' => App::env('VITE_DEV_SERVER_PUBLIC') . ':3100',
    'serverPublic' => App::env('SITE_URL') . '/dist/',
    'errorEntry' => 'src/js/app.ts',
    'cacheKeySuffix' => '',
    'devServerInternal' => App::env('VITE_DEV_SERVER_INTERNAL'),
    'checkDevServer' => false,
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true,
    'criticalPath' => '@webroot/dist/criticalcss',
    'criticalSuffix' =>'_critical.min.css',
];
