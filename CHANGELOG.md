# davidhellmann/craftcms-baukasten Change Log.
## 4.0.12 - WIP

### added
- 

### updated
- (cms): CraftCMS (4.4.16.1)
- (plugin): Hyper (1.1.10)

### fixed
- 

### removed
- plugin: palette
- plugin: redactor
- plugin: quickfield


## 4.0.11 - 2023.07.19

### added
- CKEditor 3.0.0

### updated
- (cms): CraftCMS (4.4.16.1)
- ckeditor config
- refactor waypoints script by chatgpt
- refactor lazy script by chatgpt
- refactor modernImageFormatFallback script by chatgpt
- rename hidden/iso.twig > hidden/waypoints.twig
- (plugin): Super Table (3.0.8.1)
- (plugin): SEOmatic (4.0.30)
- (plugin): CK Editor (3.4.0)
- (plugin): ImagerX (4.2.1)
- (plugin): Formie (2.0.33)
- (plugin): Blitz (4.5.0)
- (plugin): SuperTable (3.0.9)
- (plugin): Navigation (2.0.19)
- (plugin): Palette (3.2.2)
- (plugin): Hyper (1.1.9)
- (plugin): Image Resizer (3.0.6)
- (plugin): Vite (4.0.6)
- (plugin): Sprig (2.6.2)
- (plugin): Quick Field (2.0.4)
- (plugin): MatrixMate (2.1.3)
- Composer Packages

### fixed
- mutex config part

### removed
- 


## 4.0.10 - 2023.03.21 

### added
- tailwindcss-theme-it plugins for multi theme support
- avif support instead of webp
- plugin: Hyper 1.1.2

### updated
- cms: CraftCMS (4.4.5)
- plugin: superTable (3.0.7) 
- plugin: sprig (2.5.1)
- plugin: blitz (4.4.3)
- plugin: imagerX (4.1.11)
- plugin: sherlock (4.3.0)
- plugin: seomatic (4.0.22)
- plugin: formie (2.0.23.1)
- plugin: palette (3.1.1)
- plugin: redactor (3.0.4)
- plugin: navigation (2.0.17)
- plugin: vite (4.0.5)
- plugin: control panel css (2.6.0)
- npm packages (a lot!)

### fixed
- 

### removed
- ddev files
- plugin: Typed Link Field (because using Hyper now)

## 4.0.9 - 2022.12.07

### added
- heroicons (tailwindcss icon set)
- container-full as tailwind component

### updated
- Icon component
- CraftCMS 4.3.4
- Formie plugin
- Seomatic plugin
- ImagerX Plugin
- CP Clear Cache plugin
- Image Resizer plugin
- SuperTable plugin
- Navigation plugin
- Sherlock plugin
- Quick Field plugin
- Matrix Mate plugin
- Typed Link Field plugin

### fixed
- fix accordion safari styles

## 4.0.8 - 2022.10.20

### added
- ddev as default

### updated
- CraftCMS 4.2.8
- formie plugin
- MatrixMate plugin
- fix vite config
- vite plugin
- supertable plugin
- imagerX plugin
- seomatic plugin
- image resizer plugin
- palette plugin
- blitz plugin
- sprig plugin
- navigation plugin
- npm packages

## 4.0.7 - 2022.09.02

### added
- Quick field plugin
- Closure plugin

### updated
- SuperTable plugin
- craftcms 4.2.3
- npm packages
- MatrixMate plugin
- Formie plugin
- EmptyCoalesce plugin
- Palette plugin
- Typed Link Field plugin
- Formie plugin
- navigation plugin
- Tailwind Fluid Type Plugin (V2 Alpha)
- general.php 
- update sherlock plugin

### changed
- changed the logic how colors are defined. tailwind.settings.colors.js 
- Going back to use custom Alt Text Field because of missing translation support for the build in one


## 4.0.6 - 2022.07.26

### updated
- imagerX plugin
- formie plugin
- image resizer plugin
- craftcms 4.2
- vite plugin
- image resizer

### added
- palette plugin

## 4.0.5 - 2022.07.09

### updated
- npm packages
- tailwindcss 3.1
- craftcms 4.1.3
- formie plugin
- supertable plugin
- image component
- imagerX plugin

### added
- Full Page Slider (Wip)

## 4.0.4 - 2022.06.02

### added
- Image Resizer Plugin

### updated
- dumper plugin
- imagerX plugin
- formie plugin
- seomatic plugin
- navigation plugin
- vite: remove `console.log()` / `console.debug()` on build task
- npm packages
- upgrade cypress to v10 (WIP)
- remove backgrounds for lazy images after they loaded.

### changed
- Use `craft up` to run migrations & apply Project Config changes


## 4.0.3 - 2022.05.24

### updated
- composer packages / plugins

### added
- Overflow Nav Slider Comp

## 4.0.2 - 2022.05.17

### added
- Elements Panel Plugin

### removed
- Blitz Recommendations Plugin because it's integrated in Blitz itself now. 

### updated
- composer packages

## 4.0.1 - 2022.05.13

### added
- `"prefer-stable"` to composer.json

### changed
- switch from (local, stage, live) to (dev, staging, production) terming

### updated
- composer packages

## 4.0.0 - 2022.05.12
### added
* CraftCMS 4
* added a new template structure `templates`
  * Cleaner Boilerplate `templates/_boilerplate`
  * Cleaner Layouts `templates/_layouts`
* added a simple Patternlib `templates/hidden/patternlib` & `config/patternlib.php`
* added Vite Config from [nystudio107](https://nystudio107.com/) `buildchain/vite.config.js`
* added partialized Tailwind Config `buildchain/tailwindcss` & `buildchain/tailwind.config.js`
* added CSS Vars / Theming for Tailwind Colors
* added TailwindCSS Screen Debug Plugin
* added a Set of components `templates/_components/**/*`
* added a Set of sprig components `templates/_components-sprig/**/*`

### fixed
* fixed Intersection Observer Script
* fixed Image Component Logic

### removed
* removed webpack
* removed TailwindCSS Config Viewer



## 1.0.0 - 2021.09.02
### added
* added a new template structure `templates`
  * Cleaner Boilerplate `templates/_boilerplate`
  * Cleaner Layouts `templates/_layouts`
* added a simple Patternlib `templates/hidden/patternlib` & `config/patternlib.php`
* added Vite Config from [nystudio107](https://nystudio107.com/) `buildchain/vite.config.js`
* added partialized Tailwind Config `buildchain/tailwindcss` & `buildchain/tailwind.config.js`
* added Tailwind Config Viewer `_tailwind`

### changed
* -

### removed
* removed webpack


---
End of file :) [davidhellmann.com](https://davidhellmann.com/)
