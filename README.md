![Image CraftCMS Baukasten](CraftCMS-Baukasten.png)

# CraftCMS Baukasten

## What's recommended
- Laravel Valet (https://laravel.com/docs/8.x/valet)
- PHP 7.4
- MySQL 8 / MariaDB
- optional: Redis `brew install redis`

## Configs
- Duplicate the `.env.example` file as `.env` and do your settings

## Database
Use the `seed_db.gz` as starting point. Create a new database with the settings from your `.env` file and import the `seed_db.gz` into it. The login credentials are: `superuser:superuser`

## Development
- optional: RUN redis server `redis-server --daemonize yes`
- RUN dev server `yarn dev` or `npm run dev`


## Whats inside?
### Some Basic Fields:
  - `Asset: Alt Text (Plain Text)`: Alt text per asset
  - `Asset: Caption (Plain Text)`: Caption per asset
  - `Asset: Source (Plain Text)`: Source per asset
  - `Asset: Source Url (URL)`: Source Url per asset
  - `Asset: Title (Plain Text)`: Title per asset
  - `Builder: Content (Matrix)`: Content Builder to create custom entry content
    - `Section`: Create blocks of content
    - `Text`: Create Rich Text Content
    - `Text : Floating Image`: Create rich text content with a floating image
    - `Quote`: Create Quotes
    - `Image`: Create a image
    - `Image Grid`: Create a image grid
    - `Image Grid Calculated`: Create a image grid with calculated sizes
    - `Image Gallery`: Create a image gallery
    - `Youtube Video`: Create a youtube embed
    - `Divider`: Create a divider
    - `Spacer`: Create a spacer
  - `Entry: Custom Title (Plain Text)`: Overwrite the normal title (more declarative)
  - `Entry: Image (Assets)`: The entry image is used for SEO images and if the entry is linked in a card where an image is shown. 
  - `Entry: SEO (SEO Settings)`: Custom SEO Settings on entry level
  - `Entry: Short Description (Plain Text)`: Used for SEO or also for linked entries somewhere
  - `Text Advanced (Redactor)`: Advanced Rich Text experience
  - `Text Basic (Redactor)`: Basic Rich Text experience


### Some plugins:
  - `Blitz Recommendations (free)`: Adds a utility that provides templating performance recommendations.
  - `CP Clear Cache (free)`: Less clickin’ to get clearin’
  - `CP Field Inspect (free)`: Inspect field handles and easily edit field and element source settings
  - `Control Panel CSS (free)`: Add custom CSS to your Control Panel. 
  - `Dumper (free)`: Bringing larapack/dd to Craft 3
  - `Elements Panel (free)`: Adds an Elements and an Eager-Loading panel to the debug toolbar.
  - `Empty Coalesce (free)`: Empty Coalesce adds the ??? operator to Twig that will return the first thing that is defined, not null, and not empty.
  - `Imager X (paid)`: Ninja powered image transforms.
  - `Minify (free)`: A simple plugin that allows you to minify blocks of HTML, CSS, and JS inline in Craft CMS templates.
  - `Navigation (paid)`: A Craft CMS plugin to create navigation menus for your site.
  - `Redactor (free)`: Edit rich text content in Craft CMS using Redactor by Imperavi.
  - `SEOmatic (paid)`: SEOmatic facilitates modern SEO best practices & implementation for Craft CMS 3. It is a turnkey SEO system that is comprehensive, powerful, and flexible.
  - `Sprig (free)`: A reactive Twig component framework for Craft.
  - `Super Table (free)`: Super-charge your Craft workflow with Super Table. Use it to group fields together or build complex Matrix-in-Matrix solutions.
  - `Typed link field (free)`: A Craft field type for selecting links
  - `Vite (free)`: Allows the use of the Vite.js next generation frontend tooling with Craft CMS
