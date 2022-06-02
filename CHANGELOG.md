# davidhellmann/craftcms-baukasten Change Log.
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
