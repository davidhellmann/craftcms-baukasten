<?php

return [
    '*' => [
        'pluginName' => 'Formie',
        'defaultPage' => 'forms',
        'maxIncompleteSubmissionAge' => 0,

        // Spam
        'saveSpam' => false,
        'spamLimit' => 500,
        'spamBehaviour' => 'showSuccess',
        'spamKeywords' => '',
        'spamBehaviourMessage' => '',
    ]
];
