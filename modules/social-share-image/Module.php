<?php

namespace modules\socialshareimage;

use Craft;
use craft\base\Event;
use craft\elements\Entry;
use craft\events\ElementEvent;
use craft\helpers\Queue;
use craft\services\Elements;
use modules\socialshareimage\GenerateSocialCard;
use yii\base\Module as BaseModule;

/**
 * social-share-image module
 *
 * @method static Module getInstance()
 */
class Module extends BaseModule
{
    public function init(): void
    {
        Craft::setAlias('@modules/socialshareimage', __DIR__);

        // Set the controllerNamespace based on whether this is a console or web request
        if (Craft::$app->request->isConsoleRequest) {
            $this->controllerNamespace = 'modules\\socialshareimage\\console\\controllers';
        } else {
            $this->controllerNamespace = 'modules\\socialshareimage\\controllers';
        }

        parent::init();

        // Defer most setup tasks until Craft is fully initialized
        Craft::$app->onInit(function() {
            $this->attachEventHandlers();
            // ...
        });
    }

    private function attachEventHandlers(): void
    {
        // Register event handlers here ...
        // (see https://craftcms.com/docs/4.x/extend/events.html to get started)

        Event::on(
            Elements::class,
            Elements::EVENT_AFTER_SAVE_ELEMENT,
            static function (ElementEvent $event) {
                $element = $event->element;
                if (
                    $element instanceof Entry // is entry
                    // is in 'userPostedJobs' section
                    && !$element->getIsRevision() // is not revision
                    && !$element->getIsDraft() // is not draft
                    && $element->status === 'live'
                )   {
                    Queue::push(new GenerateSocialCard([
                        'elementId' => $element->id,
                        'elementSlug' => $element->slug,
                        'elementSection' => $element->section->handle,
                        'elementSite' => $element->site->handle,
                    ]));
                }
            }
        );
    }
}
