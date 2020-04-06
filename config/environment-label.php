<?php
/**
 * SEOmatic plugin for Craft CMS 3.x
 *
 * A turnkey SEO implementation for Craft CMS that is comprehensive, powerful,
 * and flexible
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2017 nystudio107
 */
/**
 * @author    nystudio107
 * @package   Seomatic
 * @since     3.0.0
 */
/**
 * SEOmatic config.php
 *
 * This file exists only as a template for the SEOmatic settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'seomatic.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */
return [
    '*' => [
        'showLabel' => true,
        'labelText' => 'Environment: ' . CRAFT_ENVIRONMENT ,
        'prefixText' => null,
        'suffixText' => null,
        'labelColor' => '#E52D34',
        'textColor' => '#ffffff',
    ],

    // Live (production) environment
    'live' => [
        'labelColor' => '#23892C',
    ],

    // Stage (pre-production) environment
    'stage' => [
        'labelColor' => '#F1D302',
    ],

    // Local (development) environment
    'local' => [
        'labelColor' => '#E52D34',
    ],
];
