<?php

namespace modules\socialshareimage;

use Craft;
use craft\helpers\App;
use craft\queue\BaseJob;
use Spatie\Browsershot\Browsershot;
use Spatie\Browsershot\Exceptions\CouldNotTakeBrowsershot;
use yii\base\Exception;

class GenerateSocialCard extends BaseJob
{

    public string $elementSite;
    public string $elementSection;
    public string $elementSlug;
    public int $elementId;


    /**
     * @throws Exception
     * @throws CouldNotTakeBrowsershot
     */
    public function execute($queue): void
    {
        Browsershot::url(getenv('SITE_URL') . '/ssig/' . $this->elementId)
            ->setNodeBinary(App::env('NODE_BINARY'))
            ->setNpmBinary(App::env('NPM_BINARY'))
            ->windowSize(1200, 675)
            ->waitUntilNetworkIdle()
            ->save(getcwd() . '/social-share-images/' . $this->elementSite . '_' . $this->elementSection . '_' . $this->elementSlug . '_' . $this->elementId . '.png');
    }

    protected function defaultDescription(): string
    {
        return Craft::t('app', 'Generate the social card');
    }
}
