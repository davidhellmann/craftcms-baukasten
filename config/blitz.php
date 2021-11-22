<?php
/**
 * Imager X plugin for Craft CMS
 *
 * Ninja powered image transforms.
 *
 * @link      https://www.spacecat.ninja
 * @copyright Copyright (c) 2020 André Elvan
 */

return [
    '*' => [
        // With this setting enabled, Blitz will begin caching pages according to the included/excluded URI patterns. Disable this setting to prevent Blitz from caching any new pages.
        'cachingEnabled' => true,

        // The URI patterns to include in caching. Set `siteId` to a blank string to indicate all sites.
        'includedUriPatterns' => [
            [
                'siteId' => '',
                'uriPattern' => '.*',
            ],
        ],

        // The URI patterns to exclude from caching (overrides any matching patterns to include). Set `siteId` to a blank string to indicate all sites.
        //'excludedUriPatterns' => [
        //    [
        //        'siteId' => '',
        //        'uriPattern' => 'pages/contact',
        //    ],
        //],
        // The storage type to use.
        'cacheStorageType' => 'putyourlightson\blitz\drivers\storage\FileStorage',

        // The storage settings.
        'cacheStorageSettings' => [
            'folderPath' => '@webroot/cache/blitz',
            'createGzipFiles' => true,
            'countCachedFiles' => true,
        ],

        // The warmer type to use.
        'cacheWarmerType' => 'putyourlightson\blitz\drivers\warmers\GuzzleWarmer',

        // The warmer settings.
        'cacheWarmerSettings' => ['concurrency' => 5],

        // Custom site URIs to warm when either a site or the entire cache is warmed.
        'customSiteUris' => [
            [
                'siteId' => '',
                'uri' => 'hidden/.*',
            ],
        ],
        // Whether the cache should automatically be cleared when elements are updated.
        'clearCacheAutomatically' => true,

        // Whether the cache should automatically be warmed after clearing.
        'warmCacheAutomatically' => true,

        // Whether pages containing query string parameters should be warmed.
        'warmPagesWithQueryStringParams' => true,

        // Whether the cache should automatically be refreshed after a global set is updated.
        'refreshCacheAutomaticallyForGlobals' => true,

        // Whether the cache should be refreshed when an element is saved but unchanged.
        'refreshCacheWhenElementSavedUnchanged' => false,

        // Whether the cache should be refreshed when an element is saved but not live.
        'refreshCacheWhenElementSavedNotLive' => false,

        // Whether URLs with query strings should cached and how.
        // - `0`: Do not cache URLs with query strings
        // - `1`: Cache URLs with query strings as unique pages
        // - `2`: Cache URLs with query strings as the same page
        'queryStringCaching' => 1,

        // The query string parameters to include when determining if and how a page should be cached (regular expressions may be used).
        'includedQueryStringParams' => ['.*'],
    ],

    // Live Env
    'live' => [],

    // Stage Env
    'stage' => [],

    // Local Env
    'local' => [
        'cachingEnabled' => false
    ],
];
