# davidhellmann/craftcms-baukasten Change Log.
## 4.0.7 - 2022.09.02

### added
- Quick field plugin
- Closure plugin

### Updated
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

### Changed
- Changed the logic how colors are defined. tailwind.settings.colors.js 
- Going back to use custom Alt Text Field because of missing translation support for the build in one


## 4.0.6 - 2022.07.26

### Updated
- imagerX plugin
- formie plugin
- image resizer plugin
- craftcms 4.2
- vite plugin
- image resizer

### Added
- palette plugin

## 4.0.5 - 2022.07.09

### Updated
- npm packages
- tailwindcss 3.1
- craftcms 4.1.3
- formie plugin
- supertable plugin
- image component
- imagerX plugin

### Added
- Full Page Slider (Wip)

## 4.0.4 - 2022.06.02

### Added
- Image Resizer Plugin

### Updated
- dumper plugin
- imagerX plugin
- formie plugin
- seomatic plugin
- navigation plugin
- vite: remove `console.log()` / `console.debug()` on build task
- npm packages
- upgrade cypress to v10 (WIP)
- remove backgrounds for lazy images after they loaded.

### Changed
- Use `craft up` to run migrations & apply Project Config changes


## 4.0.3 - 2022.05.24

### Updated
- composer packages / plugins

### Added
- Overflow Nav Slider Comp

## 4.0.2 - 2022.05.17

### Added
- Elements Panel Plugin

### Removed
- Blitz Recommendations Plugin because it's integrated in Blitz itself now. 

### Updated
- composer packages

## 4.0.1 - 2022.05.13

### Added
- `"prefer-stable"` to composer.json

### Changed
- switch from (local, stage, live) to (dev, staging, production) terming

### Updated
- composer packages

## 4.0.0 - 2022.05.12
### Added
* CraftCMS 4
* Added a new template structure `templates`
  * Cleaner Boilerplate `templates/_boilerplate`
  * Cleaner Layouts `templates/_layouts`
* Added a simple Patternlib `templates/hidden/patternlib` & `config/patternlib.php`
* Added Vite Config from [nystudio107](https://nystudio107.com/) `buildchain/vite.config.js`
* Added partialized Tailwind Config `buildchain/tailwindcss` & `buildchain/tailwind.config.js`
* Added CSS Vars / Theming for Tailwind Colors
* Added TailwindCSS Screen Debug Plugin
* Added a Set of components `templates/_components/**/*`
* Added a Set of sprig components `templates/_components-sprig/**/*`

### Fixed
* Fixed Intersection Observer Script
* Fixed Image Component Logic

### Removed
* Removed webpack
* Removed TailwindCSS Config Viewer



## 1.0.0 - 2021.09.02
### Added
* Added a new template structure `templates`
  * Cleaner Boilerplate `templates/_boilerplate`
  * Cleaner Layouts `templates/_layouts`
* Added a simple Patternlib `templates/hidden/patternlib` & `config/patternlib.php`
* Added Vite Config from [nystudio107](https://nystudio107.com/) `buildchain/vite.config.js`
* Added partialized Tailwind Config `buildchain/tailwindcss` & `buildchain/tailwind.config.js`
* Added Tailwind Config Viewer `_tailwind`

### Changed
* -

### Removed
* Removed webpack


---
End of file :) [davidhellmann.com](https://davidhellmann.com/)
