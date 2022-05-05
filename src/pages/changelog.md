---
sidebar_position: 10
---

# Changelog

## Kubi 2.9.1 05/05/2022

- Fixed: Downgraded BrowserSync to 2.23.6 due to [a bug preventing the UI from loading](https://github.com/BrowserSync/browser-sync/issues/1885).
- Fixed: Typo in `gulp.config.yml` that prevented config files being watched by Kubi.
- Feature: Added a `theme-check` GitHub Workflow Action.
  - This action will produce any `theme-check` lint errors that may exist within a theme. It will diff check your code to the code on the `main` branch so that errors from the original theme don't flood the screen. [Read more](https://github.com/Shopify/theme-check-action#about-this-repo).
- Removed: The Cloudinary integration has been removed since it was unused.

## Kubi 2.8 16/07/2012

### Major Update

-   Kubi is now fully complatible with the new OS2.0 structure.

    -   **Important Notice:** Kubi now watches for JSON changes in the `/templates` folder. This is also where section settings are stored, in a similar fashion to `settings_data.json`. This directory is ignored by default in `config.yml`. It is **extremely** advised that you only disable this ignore when creating a new section `[template-name].json` file and **only** after first running `yarn download` else you risk overwriting the store's section settings.

-   Updated packages.

## Kubi 2.7.1 28/06/2021

-   Updated ThemeKit and other packages

    -   **Important notice**: We will no longer be using Private Apps to access stores via the Theme API. Instead, we will now use Shopify's [Theme Kit Access](https://apps.shopify.com/theme-kit-access) app that uses the same concept, it generates a unique API key for each developer, however it comes with a lot more security.

-   Updated `.eslintignore` and `.stylelintignore` files to start ignoring theme default assets.

## Kubi 2.7 12/02/2021

-   Updated ThemeKit and other packages.
-   Updated Webpack config and gulpfile to minify JavaScript properly on `staging` and `production` environments.
-   Replaces UglifyJS with Webpack Terser plugin to minify JavaScript more efficiently.
-   Updated Stylelint and ESLint rules.
-   Includes new `.theme-check.yml` file to work with the new [Theme Check](https://github.com/Shopify/theme-check) extension by Shopify.

## Kubi 2.6.1 19/09/2020

### Fixed

-   Fixed ThemeKit's placement of `allowLive: true` flag

## Kubi 2.6.0 19/09/2020

### Added

-   Added .stylelintrc file to help ensure consistency across our stylesheets.
    -   Added rule to enable BEM-style CSS rules.

### Updated

-   Updated all dependencies and devDependencies

-   Updated ThemeKit to the latest version

    -   ThemeKit added some improvements, one of which blocked the ability to unintentionally pushing to a live theme, [this update](https://github.com/Shopify/themekit/releases/tag/v1.1.1) fixes that.

### Fixed

-   Fixed issue where JSON files in the `/locales` folder weren't being processed.

## Kubi 2.5.9 24/03/2020

-   Updated all dependencies and devDependencies

## Kubi 2.5.8 13/03/2020

-   Fixed bug where SVG icons would merge in symbols instead of separate

## Kubi 2.5.7 05/03/2020

-   Removed format option for cleanCSS in `gulpfile.babel.js`
-   Fixed bug where SSL replacement produced a sed error of `bad flag in substitute command`
-   Moved Git commit and dev branch creation into main kubimini.sh file
-   Fixed SSL create function where there was a wrong path link
-   Change save_yaml function to have local vars

## Kubi 2.5.6 04/03/2020

-   Commented out the formatting option for styles in `gulp.config.yml` due to CSS minification breaking

## Kubi 2.5.5

-   Added self signed SSL certificate support to BrowserSync
-   Kubi will now automatically create an SSL for you and add it to BrowserSync

## Kubi 2.5.4

-   Created helper JS module with a console catch error prevention included
-   Added Shopify global objects to helpers JS module
-   Fixed Shopify include to render errors for svg sprite snippet
-   Kubi answers will be saved to a YML config file
-   Updated Kubi variables to be the same as the parsed YML ones from the kubi config
-   Can skip questions if Kubi config file exists
-   Updated README to show cool badges

## Kubi 2.5.3

-   Fixed missing semicolons with scss file creation
-   Fixed git auto committing bug when development branch doesn't exist

## Kubi 2.5.2 19/02/2020

-   Changed references from shopify-kubi to kubi
-   Fixed bug in Kubi where it stills asks for API key
-   Fixed syntax error within functions.sh and setup.sh
-   Removed search for download command in package.json due to grep no longer finding it and causing an error
-   Removed function to replace `{%- include 'icons' -%}` to `{%- render 'icons' -%}` due to grep error
-   Added fix for error with cloudinarylazyresponsive.js if file has already been moved and no longer in config folder
-   Add condintional logics to stop Kubi trying to create files that already exist
-   Added ability to create theme
-   Fixed bug where gulp was still referring to sprites instead of spritesheets

## Kubi 2.5.1 18/02/2020

-   Fixed bug with env displaying production
-   Fixed bug where first run of Kubi copies all the files into the dist.
-   Added new images/spritesheets directory
-   images/icons and images/sprites folders now images/spritesheets/svgs and images/spritesheets/non-svgs
-   Move kubi_config inside config directory and renamed to kubi
-   Changed `include` to latest Shopify standard `render` for svg-sprite snippet
-   Kubi will now look for `{%- include 'icons' -%}` and change it to `{%- render 'icons' -%}`
-   If `{%- render 'icons' -%}` doesn't exist Kubi will attempt to add it

## Kubi 2.5.0 17/02/2020

-   Seperated Kubi into multiple files, held within kubi_config
-   Removed API key within config
-   Styled Kubi commands and file
-   Converted main if statement for user commands to case switch
-   Add ability to run `--staging` along with `--prod` to run Gulp in production and staging mode
-   Removed need to add desired env to Gulp config
-   Cleaned up files
-   Optimised Kubi scripts
-   Created task to copy all theme files to dist on run

## Kubi 2.2.6 21/01/2020

-   Fixed issue where calc() was causing a reference error within Gulp

## Kubi 2.2.5 20/01/2020

-   Replace minifycss with cleanCSS
-   Added cleanCSS options to gulp.config for user configuration
-   Removed echos in place for cat &lt; when creating data
-   Replaced long winded ifs with regex

## Kubi 2.2.4 13/01/2020

-   Updated intial kubi prompt
-   Changed help commands to just show yarn
-   Move svg-sprite populate into if statement, checking to see if file exists
-   Replaced Moment with DayJS
-   Remove unused node modules
-   Added Cypress for e2e testing (<https://www.cypress.io/>)

## Kubi 2.2.3 09/01/2020

-   Added more wait commands to kubimini
-   Checked if vendors folder exists

## Kubi 2.2.2 03/01/2020

-   Added an install command to the shortcut function within README.md

## Kubi 2.2.1 02/01/2020

-   Updated README.md with command to remove upstream within the Kubi bash function

## Kubi 2.2.0 19/12/2019

-   Updated README.md with new merge command

## Kubi 2.1.9 17/12/2019

-   Fixed issue where svg-sprite was being ecaped wrongly by kubimini
-   Changed single quote to double quotes for correct syntax
-   Added feature where Kubi checks if `{%- include 'icons' -%}` has been added to theme.liquid. If not and there is an icons folder then Kubi will add the include above `</body>`
-   Added Bulma CSS framework to package.json dependencies
-   Added the cloudinarylazyresponsive.js

## Kubi 2.1.8 12/12/2019

-   Fixed bash error within kubimini.sh

## Kubi 2.1.7 11/12/2019

-   Added the global objects of `window.theme` and `Shopify` to the Kubi generated JS file
-   Created `console.info` messages to give store info in the console for when the environment is in dev mode

## Kubi 2.1.6 06/12/2019

-   Added lastRun() to Gulp tasks which can speed up execution times by skipping files that haven't changed since the last successful task completion
-   Added a reload delay to BrowserSync where in some cases BrowserSync reloaded before the upload had finished

## Kubi 2.1.5 02/12/2019

-   Added Typescript support to Webpack

## Kubi 2.1.4 28/11/2019

-   Removed the option of deleting the fill from SVG symbols
-   Added a case function to check if npm download script exists in package.json

## Kubi 2.1.3 22/11/2019

-   Added force to troubleshoot audit fix
-   Fixed wrong file path for bourbon import
-   Added comments to scss file
-   Change theme download in kubimini to use package.json download instead of assuming themekit is installed globally
-   Added default package.json description if none entered
-   Added bash wait to stop tasks running before node_modules have finished installing

## Kubi 2.1.2 21/11/2019

-   Added Codacy badge to README.md
-   Fixed issue where backup folder would merge original folder with parent backups folder
-   Fixed issue with svg-sprite isn't being created correctly

## Kubi 2.1.1 20/11/2019

-   Fixed syntax error bug with kubimini script
-   Fixed indentation error in Gulp Config
-   Added allowEmpty to sprite task
-   Change troubshoot command from npm i to npm install
-   Added Quick tip, your issue maybe a Git merge conflict. To troubleshoot command
-   Fixed invalid dest() error
-   Added allowEmpty to icons task
-   Fixed issue where snippt svg-sprite.liquid only had `</svg>` in file

## Kubi 2.1.0 19/11/2019

-   Added ability to create image sprites
-   Checks if images folder exisits

## Kubi 2.0.8 18/11/2019

-   Fixed bug where terminal would crash saying babel shopify/web wasn't defined
-   Fixed Gulp bug where allowEmpty wasn't defined
-   Removed error catcher from Gulp functions.js
-   Added allowEmpty to styles task

## Kubi 2.0.7 12/11/2019

-   Added @shopify/theme-sections to package.json
-   Added @shopify/theme-sections as sections to webpack.ProvidePlugin settings
-   Added allowEmpty option to fontface, critical and vendors gulp tasks
-   Kubi will check if the icon and favicon folders exist. If they don't create them
-   Kubi will create and add an svg-sprite liquid snippet for use with svg symbols

## Kubi 2.0.6 08/11/2019

-   Removed airbnb JS presets to use only Shopify's presets
-   Kubi now searches for src/sass and renames it to src/styles

## Kubi 2.0.5 05/11/2019

-   Changed sass folder to styles
-   Added function for Kubi to create a new README.md for project
-   Changed rename of gulp.example to copy and rename, keeping original example file