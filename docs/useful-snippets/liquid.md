---
sidebar_position: 1
title: Liquid Snippets
---

Renders a Liquid-powered SVG snippet that utilises Kubi's SVG optimisation.

## Usage
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
