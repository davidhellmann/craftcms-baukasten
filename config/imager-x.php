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
    'transformer' => 'craft',
    'imagerSystemPath' => '@webroot/assets/imager/',
    'imagerUrl' => '/assets/imager/',
    'cacheEnabled' => true,
    'cacheRemoteFiles' => true,
    'cacheDuration' => 1209600,
    'cacheDurationRemoteFiles' => 1209600,
    'cacheDurationExternalStorage' => 1209600,
    'cacheDurationNonOptimized' => 300,
    'jpegQuality' => 90,
    'pngCompressionLevel' => 2,
    'webpQuality' => 90,
    'webpImagickOptions' => [],
    'useCwebp' => false,
    'cwebpPath' => '/usr/bin/cwebp',
    'cwebpOptions' => '',
    'interlace' => false,
    'allowUpscale' => true,
    'resizeFilter' => 'lanczos',
    'smartResizeEnabled' => false,
    'removeMetadata' => false,
    'preserveColorProfiles' => false,
    'bgColor' => '',
    'position' => '50% 50%',
    'letterbox' => ['color' => '#000', 'opacity' => 0],
    'useFilenamePattern' => true,
    'filenamePattern' => '{basename}_{transformString|hash}.{extension}',
    'shortHashLength' => 10,
    'hashFilename' => 'postfix', // deprecated
    'hashPath' => false,
    'addVolumeToPath' => true,
    'hashRemoteUrl' => false,
    'useRemoteUrlQueryString' => false,
    'instanceReuseEnabled' => false,
    'noop' => false,
    'suppressExceptions' => false,
    'convertToRGB' => false,
    'skipExecutableExistCheck' => false,
    'curlOptions' => [],
    'runJobsImmediatelyOnAjaxRequests' => true,
    'fillTransforms' => false,
    'fillAttribute' => 'width',
    'fillInterval' => '200',
    'fallbackImage' => getenv('FALLBACK_IMAGE') ?: null,
    'mockImage' => getenv('MOCK_IMAGE') ?: null,
    'clearKey' => '',

    'useForNativeTransforms' => false,
    'useForCpThumbs' => false,

    /*
    'imgixProfile' => 'default',
    'imgixApiKey' => '',
    'imgixEnableAutoPurging' => true,
    'imgixEnablePurgeElementAction' => true,
    'imgixConfig' => [
        'default' => [
            'domain' => 'imager.imgix.net',
            'useHttps' => true,
            'signKey' => 'XxXxXxXx',
            'sourceIsWebProxy' => false,
            'useCloudSourcePath' => true,
            'getExternalImageDimensions' => true,
            'defaultParams' => ['auto' => 'compress,format', 'q' => 90],
        ],
        'external' => [
            'domain' => 'imager-external.imgix.net',
            'useHttps' => true,
            'signKey' => 'XxXxXxXx',
            'sourceIsWebProxy' => true,
            'useCloudSourcePath' => true,
            'getExternalImageDimensions' => true,
            'defaultParams' => ['auto' => 'compress,format', 'q' => 90],
        ]
    ],
    'storageConfig' => [
        'aws' => [
            'accessKey' => '',
            'secretAccessKey' => '',
            'region' => '',
            'bucket' => '',
            'folder' => '',
            'requestHeaders' => array(),
            'storageType' => 'standard',
            'cloudfrontInvalidateEnabled' => false,
            'cloudfrontDistributionId' => '',
        ],
        'gcs' => [
            'keyFile' => '',
            'bucket' => '',
            'folder' => '',
        ],
    ]*/
];
