![Image CraftCMS Baukasten](CraftCMS-Baukasten.png)

# CraftCMS Baukasten
Heavily opinionated starter kit for CraftCMS Projects.

## What's recommended
- Laravel Valet (https://laravel.com/docs/8.x/valet)
- PHP 7.4
- MySQL 8 / MariaDB
- optional: Redis `brew install redis`


## Configs
- Duplicate the `.env.example` file as `.env` and do your settings


## Database
Use the `seed_db.gz` as starting point. Create a new database with the settings from your `.env` file and import the `seed_db.gz` into it. The login credentials are: `superuser:superuser`


## Before you start
Go to `./` and do this: `valet link craftcms-baukasten` to create a domain like `craftcms-baukasten.test` (Info: Use the domain you used also in the `.env file`)


## Development
- `redis-server --daemonize yes` it's totally optional
- `npm run dev` start local dev server
- `npm run upgrade-interactive` To get an interactive GUI to update NPM Packages
- `npm run twc` creates a `tailwind.app.css` file in `./src/css/`


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


### Some Sections:
- `Home (Single)`: This is the root of your webpage
- `News (Channel)`: A channel to create news
  - `Content Builder (Entry Type)`: Entry type for news with a content builder
- `Pages (Structure)`: A structure to create structured pages for your webpage
  - `Content Builder (Entry Type)`: Entry type for pages with a content builder
  - `Overview News (Entry Type)`: Entry type for the news overview page
- `Error Pages (Channel)`: To create maintainable error pages like 404


### Some Volumes:
- `Files`: Where files like pdf etc. lives
- `Images`: Where our content images lives
- `Template Images`: Where our template images lives
- `Users`: Where our user images lives


### Some plugins:
- `Blitz (paid)`: Blitz provides intelligent static page caching for creating lightning-fast sites with Craft.
- `Blitz Recommendations (free)`: Adds a utility that provides templating performance recommendations.
- `CP Clear Cache (free)`: Less clickin’ to get clearin’
- `CP Field Inspect (free)`: Inspect field handles and easily edit field and element source settings
- `Control Panel CSS (free)`: Add custom CSS to your Control Panel. 
- `Dumper (free)`: Bringing larapack/dd to Craft 3
- `Elements Panel (free)`: Adds an Elements and an Eager-Loading panel to the debug toolbar.
- `Empty Coalesce (free)`: Empty Coalesce adds the ??? operator to Twig that will return the first thing that is defined, not null, and not empty.
- `Formie (paid)`: Formie is a Craft CMS plugin for creating user-friendly forms that your content editors will love.
- `Imager X (paid)`: Ninja powered image transforms.
- `Minify (free)`: A simple plugin that allows you to minify blocks of HTML, CSS, and JS inline in Craft CMS templates.
- `Navigation (paid)`: A Craft CMS plugin to create navigation menus for your site.
- `Redactor (free)`: Edit rich text content in Craft CMS using Redactor by Imperavi.
- `SEOmatic (paid)`: SEOmatic facilitates modern SEO best practices & implementation for Craft CMS 3. It is a turnkey SEO system that is comprehensive, powerful, and flexible.
- `Sprig (free)`: A reactive Twig component framework for Craft.
- `Super Table (free)`: Super-charge your Craft workflow with Super Table. Use it to group fields together or build complex Matrix-in-Matrix solutions.
- `Typed link field (free)`: A Craft field type for selecting links
- `Vite (free)`: Allows the use of the Vite.js next generation frontend tooling with Craft CMS


### Why
I have developed several CraftCMS projects the last few years. For me, the setup and certain basics are what tend to take time away from me at the beginning of the project.

For this reason there is the "Baukasten" to get started faster in new projects. It's a collection of good practices I have learned and adopted from past projects and from other people. It's heavily opinionated, but feel free to fork and modify it for your own needs.

---

### Have to say thank you
- [nystudio107](https://github.com/nystudio107/)
- [craftcms](https://craftcms.com/)
- [webdevs](https://webdevs.xyz/)
- [putyourlightson](https://github.com/putyourlightson/)
- [verbb](https://github.com/verbb/)
