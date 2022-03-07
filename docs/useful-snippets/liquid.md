---
sidebar_position: 1
title: Liquid Snippets
---

## SVG Sprites
Renders a Liquid-powered SVG snippet that utilises Kubi's SVG optimisation.

### Usage
In your liquid template file, copy the following line:
```liquid
{%- render 'svg-sprite', icon: 'arrow-up', class: 'icon icon--arrow', w: 100, h: 30, title: 'Go up', desc: 'Scroll to top' -%}
```

At the bottom of theme.liquid, include the following line:

```liquid
{%- render 'icons' -%}
```

### Parameters
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

### Snippet
```liquid
{%- liquid
  unless hidden
    assign hidden = false
  endunless

  if w
    assign width = w | prepend: 'width="' | append: 'px"'
  endif
  if h
    assign height = h | prepend: 'height="' | append: 'px"'
  endif
  if hidden
    assign aria = 'aria-hidden="true"'
  else
    assign ariaDesc = icon | downcase | append: '-svgTitle'
    assign ariaTitle = icon | downcase | append: '-svgDesc'
    assign aria = ariaTitle | prepend: 'aria-labelledby="' | append: ' ' | append: ariaDesc | append: '"'
  endif
  if class
    assign classes = class | prepend: 'sprite-icon '
  else
    assign classes = 'sprite-icon'
  endif
-%}
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

## Developer Mode
Useful for when working with both development and live themes, this will automatically reflect the `kubix.css/js` minification state.

Enable the option on development themes, leave disabled on live/production themes
### `settings_schema.json`
```json
{
  "name": "Developer Mode",
  "settings": [
    {
      "type": "paragraph",
      "content": "Enable the site to use a development environment. Some settings will be changed in this mode and tracking will not be available! ** Do not activate on a live site, unless completely sure **"
    },
    {
      "type": "checkbox",
      "id": "devmode",
      "label": "Enable Developer Mode"
    }
  ]
}
```

### Liquid code
```liquid
{%- liquid
  if settings.devmode
    assign kubixStyles = 'kubix.css'
    assign kubixScripts = 'kubix.js'
  else
    assign kubixStyles = 'kubix.min.css'
    assign kubixScripts = 'kubix.min.js'
  endif
-%}

{{ kubixStyles | asset_url | stylesheet_tag }}
{{ kubixScripts | asset_url | script_tag }}
```

## Placeholder SVGs

```liquid
{% comment %} Collection Images {% endcomment %}
{% capture collectionPlaceholder %}{% cycle 'collection-1', 'collection-2', 'collection-3', 'collection-4', 'collection-5', 'collection-6' %}{% endcapture %}
{{ collectionPlaceholder | placeholder_svg_tag }}

{% comment %} Product Images {% endcomment %}
{% capture productPlaceholder %}{% cycle 'product-1', 'product-2', 'product-3', 'product-4', 'product-5', 'product-6' %}{% endcapture %}
{{ productPlaceholder | placeholder_svg_tag }}

{% comment %} Lifestyle Images {% endcomment %}
{% capture lifestylePlaceholder %}{% cycle 'lifestyle-1', 'lifestyle-2' %}{% endcapture %}
{{ lifestylePlaceholder | placeholder_svg_tag }}


{% comment %} Others {% endcomment %}
{{ 'image' | placeholder_svg_tag }}
```