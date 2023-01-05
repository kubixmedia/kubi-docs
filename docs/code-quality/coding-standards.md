---
sidebar_position: 1
title: "Coding Standards"
---

At Kubix, we follow a specific set of guidelines to ensure our code is of the best possible quality and also ensure it's uniformity so developers can work with ease on new code.

## Code Quality Workflows

Kubi comes with some Github workflows for Theme Check, ESLint, and Stylelint.
When committing changes, none of these should produce any errors. If any errors are present, you must make an effort to fix them. For a lot of themes, "disallowed" code is unfortunately commonplace. For this, thematic `ignores` must be used. For example, if there are a lot of errors caused by Boost, then the Boost files that can't be fixed must be added to the appropriate ignore. In theme-check, this will be in the `theme-check.yml` file.

## Variable Naming Convention

### Liquid

Liquid uses snake_case-type variables. This more closely replicates Shopify's own convention. `product.selected_or_first_available.variant`

```liquid
{% # Do this %}


my_custom_variable
{% assign my_custom_variable = something %}

{% # Don't do this %}

myCustomVariable
my-custom-variable
mycustomvariable
MyCustomVariable
Mycustomvariable
```


### Javascript

Javascript uses camelCase-type variables.

```javascript
// Do this
myCustomVariable
const myCustomVariable = something

// Don't do this
my_custom_variable
mycustomvariable
MyCustomVariable
```

### CSS

CSS uses kebab-case-type variables.

```css
/* Do this */
--my-custom-variable

--my-custom-variable: 25px;

/* Don't do this */
--my_custom_variable
--MyCustomVariable
--myCustomVariable
--mycustomvariable
```

### SCSS

SCSS uses camelCase-type variables.

```css
// Do this
$myCustomVariable

$myCustomVariable: 'red';

// Don't do this
$my-custom-variable
$mycustomvariable
$MyCustomVariable
$my_custom_variable
```
