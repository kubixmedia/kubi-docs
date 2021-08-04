---
sidebar_position: 2
title: Styles with Liquid
---

Styling Shopify themes has always been inherently more complex than a typical web project thanks to the common need to combine styling languages with Liquid. The complexity only grows worse when using compiled styling languages like Sass, since including Liquid in Sass results in invalid syntax.

To make the syntax valid and to process liquid within SCSS, Shopify using an outdated version of SCSS and is unable to utilise features wthat make development handy and powerful, such `@imports`. However, Kubi works in a diffierent way and allows for liqiud to be added directly to a `.scss` file format. When adding liquid syntax such as `color: {{ settings.link-color }};` Kubi will automatically commant out the liquid and will allow the code to be processed, thus allowing us to use the most updated version of SCSS and all it's features. Once processed the commented out liquid will then be re-added and the stylesheet will be converted to a `css.liquid` file.

Occassionally in order to write liquid tags in SCSS we need to use the SCSS built in method for escaping strings `#{'the_liquid_tag'}`. For example, in order to use a variable from the store settings the code would look something like this:

```scss
body {
  background: #{'{{ setting.bg_color }}'};
}
```

If we now try and run the task an compilation error will be generated. The reason for this is the string interpolation works for the first step of the gulp task, compiling the SCSS, but breaks during the second step, running the autoprefixer. The output of the compiled SCSS still needs to be escaped. To do this we add a set of double quotes around the liquid tag like this:

```scss
body {
  background: #{'"{{ settings.hl_color }}"'};
}
```

## Example SCSS file with liquid interpolated

```scss
a{
  color: #{'{{ settings.link-color }}'};
}

//  Reuasble liquid:
$myVar: #{'{{ settings.font-family }}'};

h1{
  font-family: $myVar;
}

//  Using a sass variable from the current file:
$var1: #fff;
$var2: #{'{% if settings.colour %}{{ settings.colour }}{% else %}'}$var1#{'{% endif %}'};


//  Liquid if statement:
body {
 /* {% if settings.background-image %} */
  background: url(#{'{{ settings.background-image | asset_url }}'}) center no-repeat;
 /* {% else %} */
  background: whitesmoke;
 /* {% endif %} */
}
```

When using Liquid outside a SCSS statement we would need to write `/* {{ settings.custom-css }} */` then our compiled liquid would be inside the comments making it useless. We need liquid to create the ending and opening comments when its compiled, however if we wrote `/* {{ settings.custom-css | prepend: '*/' | append: '/*' }} */` the string `' | append: '` is still seen as being outside the comments. We need to escape them untill liquid can create them so we add an extra character and then remove it.

```scss
/* {{ settings.custom-css | prepend: '*\/' | append: '\/*' | remove: '\' }} */

/* {% if settings.custom-css %}{{ settings.custom-css | prepend: '*\/' | append: '\/*' | remove: '\' }}{% endif %} */
```
