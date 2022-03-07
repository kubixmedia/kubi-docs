---
sidebar_position: 4
---

# Asset Minification

## Optimized Dependency Bundling

Kubi's `--staging` and `--prod` environments compiles the theme so that it is fully optimised. These optimisations include:

* Optimised JS via [UglifyJS](https://github.com/terinjokes/gulp-uglify), [dynamic importing](https://webpack.js.org/guides/code-splitting/#dynamic-imports) and [bundle splitting](https://webpack.js.org/guides/code-splitting/)
* Optimised CSS using [cleanCSS](https://github.com/scniro/gulp-clean-css)
* Optimised images with [Imagemin](https://github.com/sindresorhus/gulp-imagemin) and Imagemin submodules
* Icons optimised with [svg-min](https://github.com/ben-eb/gulp-svgmin)

:::tip
See [Liquid Snippets](/docs/useful-snippets/liquid#developer-mode) to work with Developer Mode optimisations.
:::

:::info
Shopify now automatically minifies any JavaScript and Stylesheet files. Whilst their minification process does a great job, always minify your JavaScript files when moving to production, when doing this, Webpack will strip out a ton of unneccessary code to further optimise the build.
:::