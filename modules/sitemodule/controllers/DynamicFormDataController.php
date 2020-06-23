<?php
/**
 * @link https://fredmansky.at/
 * @copyright Copyright (c) Fredmansky
 */

namespace modules\sitemodule\controllers;

use Craft;

use craft\errors\ElementNotFoundException;
use craft\web\Controller;
use craft\web\Response;
use Solspace\Freeform\Freeform;
use \yii\base\InvalidArgumentException;

class DynamicFormDataController extends Controller
{
    public function actionCsrf(array $variables = []): Response
    {
        $data['csrf'] = Craft::$app->getRequest()->getCsrfToken();

        return $this->asJson($data);
    }

    public function actionFreeformData(array $variables = []): Response
    {
        $request = Craft::$app->getRequest();
        $formHandleOrId = $request->getQueryParam('form');

        if(!$formHandleOrId) {
            throw new InvalidArgumentException('No form parameter given.');
        }

        $freeform = Freeform::getInstance();

        $formModel = $freeform->forms->getFormByHandleOrId($formHandleOrId);

        if(!$formModel) {
            throw new ElementNotFoundException('No form found for ' . $formHandleOrId . '.');
        }

        $csrf['name'] = Craft::$app->config->general->csrfTokenName;
        $csrf['value'] = Craft::$app->getRequest()->getCsrfToken();

        $data['csrf'] = $csrf;

        $form = $formModel->getForm();

        $data['hash'] = $form->getHash();
        $data['honeypot'] = $freeform->honeypot->getHoneypot($form);

        return $this->asJson($data);
    }
}
