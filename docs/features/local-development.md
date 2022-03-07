---
sidebar_position: 1
title: Local Development
---

Local development with Shopify Themes is pretty unique, and probably unlike anything you've previously encountered. In fact, with Kubi using Themekit you're still deploying and viewing pages from Shopify servers, so technically it's not *really* local development. However, Kubi has development features that make it unique from other Shopify development tools.

## Git setup
A big part of Kubi is the intergration of Git and making sure regular commits and version control is maintained. When first running `kubimini.sh`, Kubi will check the status of Git within the project and it's branches. If there is no development branch then Kubi will create it, commit changes and push to the branch. Once pushed the branch will be checked out ready for development to being. If the project already has a development branch then all changes will be commited automatically.

### Git auto commiting
When activaly working on a project it can be easy to forget to commit changes to Git, by reguarly commiting it helps in the rollbacks and retrival of work that may become comprised. To help with this Kubi will make an auto commit to Github every two hours. However, once the team function is created then this two hourly commit will be changed to a more regular interval.

## Watching and deploying project changes
When running Kubi all development changes will be watched and an appropiate task executed depending on the change before deploying to the desired environment. When ready to intercept changes Kubi will give a message identifing what theme is being watched, for example `Kubix Development: Watching for file changes to theme 38976618547`.

## JavaScript dynamic importing

With `Webpack` you can use ES6/ES2015's standard, which allows you to require your modules with the `import` syntax, arrow and async/awit functions.

### Import example
```js
import { contains } from 'lodash';
import Foo from './modules/foo';
import './modules/bar';
```

You can also include your modules [dynamically](https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234) which gives you the ability to load modules when required rather than static importing where the modules are loaded all at the same time on runtime.

```js
import(/* webpackChunkName: "foo-image" */ "assets/images/foo.jpg");
import(/* webpackPrefetch: true */ /* webpackChunkName: "bar-module" */ "modules/bar");
```

For better JavaScropt optimisation `Webpack` allows for [code spliting](https://webpack.js.org/guides/code-splitting/) into between bundles into separate chunks. This reduces the amount of duplicate code included in each bundle and further improves page load performance. When a spilt occurs the files will have the suffix appended to them such as `bar.bundle.js`.

## YML/YAML schema
Technically, YAML is a superset of JSON but has a couple of big advantages over JSON, including the ability to self reference, support for complex datatypes, embedded block literals, comments, and more. YAML is also more human readable and quicker for development as there is no need for curly brackets, squard brackets (except for inline collections), quote and commas.

Kubi utilises these features of YAML and allows for all JSON files such as `src/theme/config/settings_schema.json` can be written in YAML `src/theme/config/settings_schema.yml` and will be converted back into JSON so Shopify can read it. As well as files section schema's can also be rewritten into YAML.

### Example of section yaml schema

```yaml
{% schema %}
name: "Article"
settings:
  type: checkbox
  id: show_share_buttons
  label: "Show share buttons"
  default: true
{% endschema %}
```

The section schema still needs to be wrapped within the liquid tags but instead of JSON, YAML can be used. Like with files once you save it, Kubi will convert the YAML into a Shopify readable JSON format.

:::info
Kubi will only accept valid JSON for conversion. If there is an error within the JSON code, Kubi will throw an error. Keep in mind that Shopify doesn't validate JSON 100% but more beautifies it. Due to this many themes that published to stores have invalid JSON.
:::

## Sprites
Within the `src/images` folder there is a subdirectory of `spritesheets` this directory creates two different types of sprites `png` and `svg`. When adding images to the svg folder within spritesheets, this will create a new `icons.liquid` snippet that will hold all svg images within symbol formats. To call each symbol the include `svg-sprite.liquid` will need to be added via `{%- render 'svg-sprite' -%}`. This liquid snippet is created automatically when running `kubimini.sh`.

### SVG sprite snippet

```liquid title="snippets/svg-sprite.liquid"
{% comment %}
  Accepts:
   icon:   {String} Icon file name
   class:  {String} Icon class(es) (optional)
   id:     {String} Icon ID (optional)
   w:      {String} Icon Width (optional)
   h:      {String} Icon Height (optional)
   title:  {String} Icon title for aria label (Optional) (If unset, hidden should be true)
   desc:   {String} Icon description for aria descripion (Optional) (If unset, hidden should be true)
   hidden: {Bool}   Applies aria-hidden attribute. Default is false.
​
   Usage:
   In your liquid template file, copy the following line:
   {%- render 'svg-sprite', icon: 'arrow-up', class: 'icon icon--arrow', w: '100', h: '30', title: 'Go up', desc: 'Scroll to top' -%}
​
   At the bottom of theme.liquid, include the following line:
   {%- render 'icons' -%}
​
{%- endcomment -%}
​
{%- unless hidden -%}
  {%- assign hidden = false %}
{%- endunless -%}
​
{%- if w -%}
    {%- assign width = w | prepend: 'width="' | append: 'px"' -%}
{%- endif -%}
{%- if h -%}
    {%- assign height = h | prepend: 'height="' | append: 'px"' -%}
{%- endif -%}
{%- if hidden -%}
    {%- assign aria = 'aria-hidden="true"' -%}
{%- else -%}
    {%- assign ariaDesc = icon | downcase | append: '-svgTitle' -%}
    {%- assign ariaTitle = icon | downcase | append: '-svgDesc' -%}
    {%- assign aria = ariaTitle | prepend: 'aria-labelledby="' | append: ' ' | append: ariaDesc | append: '"' -%}
{%- endif -%}
{%- if class -%}
    {%- assign classes = class | prepend: 'sprite-icon ' -%}
{%- else -%}
    {%- assign classes = 'sprite-icon' -%}
{%- endif -%}
<svg {% if id %}id="{{ id }}" {% endif %}class="{{ classes }}" {{ width }} {{ height }} {{ aria }} {% unless hidden %} role="img"{% endunless %}>
    {%- if title -%}
        <title {% unless hidden %}id="{{- icon | downcase -}}-svgTitle"{% endunless %}>{{ title | escape }}</title>
    {%- endif -%}
    {%- if hidden != true and desc -%}
        <desc id="{{- icon | downcase -}}-svgDesc">{{ desc | escape }}</desc>
    {%- endif -%}
    <use xlink:href="{{ icon | prepend: '#icon-' }}"></use>
</svg>
```

To return a symbol several arguments need to be passed, with some depending on the user's needs.

```
icon:   {String} Icon file name
class:  {String} Icon class(es) (optional)
id:     {String} Icon ID (optional)
w:      {String} Icon Width (optional)
h:      {String} Icon Height (optional)
title:  {String} Icon title for aria label (Optional) (If unset, hidden should be true)
desc:   {String} Icon description for aria descripion (Optional) (If unset, hidden should be true)
hidden: {Bool}   Applies aria-hidden attribute. Default is false.
```

If an icon needs to be accessible the `title` and description `desc` arguments need to be added for example `{%- render 'svg-sprite', icon: 'arrow-up', class: 'sprite-icon--arrow', w: '100', h: '30', title: 'Go up', desc: 'Scroll to top' -%}`. However, if it is an icon such as a tick for a checkbox then accessibilty isn't needed. In this case the **hidden** argument will need to be used `{%- render 'svg-sprite', icon: 'tick', class: 'sprite-icon--tick', w: '100', h: '30', hidden: true -%}`. By default the class of `sprite-icon` will be added to each SVG symbol.

The PNG version of this works very similar but but instead creates the sprites as a normal image with the file type `.png`. Along with the image a `.css`.

## Theme backup and restore
Another feature of Kubi is to keep the project backed up and to be easily recovered if necessary due to an error. When starting Kubi a backup of the `src/theme` directory will be taken and compressed to save storage. However, the backup task can be run at any point with the command `yarn start backup`. By default five backups will be taken and once five has been reached the oldest backup will be overwritten with the latest.

The amount of backups Kubi will take can be modified within `gulp.config.yml` as well as the order in which backups are overwritten when the maxiumn amount is reached.

Kubi doesn't just backup but also restores the backups. When running the command `yarn start rollback` Kubi will revert the `src/theme` folder to the previous backup taken. This will be handy if a file is accidentally deleted or a bug that will take too long to fix.