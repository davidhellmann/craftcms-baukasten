<?php

return [
    '*' => [
        'pluginName' => 'Formie',
        'defaultPage' => 'forms',
        'enableGatsbyCompatibility' => false,

        // Forms
        'defaultFormTemplate' => '',
        'defaultEmailTemplate' => '',
        'enableUnloadWarning' => true,
        'ajaxTimeout' => 10,

        // General Fields
        'defaultLabelPosition' => 'above-input',
        'defaultInstructionsPosition' => 'below-input',

        // Fields
        'defaultFileUploadVolume' => '',
        'defaultDateDisplayType' => '',
        'defaultDateValueOption' => '',
        'defaultDateTime' => '',

        // Submissions
        'maxIncompleteSubmissionAge' => 30,
        'enableCsrfValidationForGuests' => true,
        'useQueueForNotifications' => true,
        'useQueueForIntegrations' => true,

        // Sent Notifications
        'maxSentNotificationsAge' => 30,

        // Spam
        'saveSpam' => true,
        'spamLimit' => 1000,
        'spamEmailNotifications' => false,
        'spamBehaviour' => 'showSuccess',
        'spamKeywords' => '',
        'spamBehaviourMessage' => '',

        // Alerts
        'sendEmailAlerts' => false,
        'alertEmails' => [],
    ]
];
