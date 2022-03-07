---
sidebar_position: 2
title: SCSS/CSS Snippets
---

## Responsive Typography Mixin
```scss
/// Remove the unit of a length
/// @param {Number} $number - Number to remove unit from
/// @return {Number} - Unitless number
@function strip-unit($number) {
  @if type-of($number) == 'number' and not unitless($number) {
    @return $number / ($number * 0 + 1);
  }
  @return $number;
}
```

```scss

/// Dynamically adjusted font size based on screen width.
/// @param {Number} $min-vw - Minimum Vertical Width to stop the adjustment
/// @param {Number} $max-vw - Maximum Vertical Width to start the adjustment
/// @param {Number} $min-font-size - Minimum font-size when minimum VW is reached
/// @param {Number} $max-font-size - Maximum font-size when maximum VW is reached
@mixin fluid-type($min-vw, $max-vw, $min-font-size, $max-font-size) {
  $unit1: unit($min-vw);
  $unit2: unit($max-vw);
  $unit3: unit($min-font-size);
  $unit4: unit($max-font-size);

  @if $unit1 == $unit2 and $unit1 == $unit3 and $unit1 == $unit4 {
    font-size: $min-font-size;
    line-height: ($min-font-size + 10px);

    @media screen and (min-width: $min-vw) {
      font-size: calc(#{$min-font-size} + #{strip-unit($max-font-size - $min-font-size)} * ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)}));
      line-height: calc(#{$min-font-size + 10} + #{strip-unit($max-font-size - $min-font-size)} * ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)}));
    }

    @media screen and (min-width: $max-vw) {
      font-size: $max-font-size;
      line-height: ($max-font-size + 10px);
    }
  }
}

/// Usage
/// @include fluid-type(350px, 768px, 18px, 26px);
```

## Responsive Square Mixin

:::info
With the introduction of the `aspect-ratio` CSS property, this mixin is becoming less relevant.
Be sure to check the latest usage data on [Can I Use](https://caniuse.com/?search=aspect-ratio).

For more information on `aspect-ratio`, see this [CSS Tricks article](https://css-tricks.com/almanac/properties/a/aspect-ratio/).
:::

```scss
///  Creates a responsive aspect ratio container
///  Accepts:
///  - $width: {integer} Width of item
///  - $height: {integer} Height of item
///  - $element: {string} (Optional) Inner element selector: ie. '.content'. Accepts: '.class', '#id' 'tag';
///  Usage:
///   .selector {
///     @include aspect-ratio(16, 9, '.inner_container');
///     @include aspect-ratio(1, 1, 'a');
///     @include aspect-ratio(2, 1, '#ProductImage');
///   }

@mixin aspect-ratio($width, $height, $element: '.content') {
  position: relative;
  &:before {
    display: block;
    content: " ";
    width: 100%;
    padding-top: ($height / $width) * 100%;
  }

  > #{$element} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
```

## Media Query Mixin
This is my go-to mixin for every project, it makes media queries a breeze to work with.

```scss title="_variables.scss"

// Media query variables
$phone: "screen and (max-width: 640px)";
$tablet: "screen and (min-width: 641px) and (max-width: 999px)";
$tablet-and-up: "screen and (min-width: 641px)";
$pocket: "screen and (max-width: 999px)";
$lap: "screen and (min-width: 1000px) and (max-width: 1279px)";
$lap-and-up: "screen and (min-width: 1000px)";
$desk: "screen and (min-width: 1280px)";
$widescreen: "screen and (min-width: 1440px)";
```

```scss title="_mixins.scss"
/// Usage:
/// @include mq($phone) { ... }

@mixin mq($alias) {
  @if $alias == "phone" or $alias == $phone {
    @media #{$phone} {
      @content;
    }
  } @else if $alias == "tablet" or $alias == $tablet {
    @media #{$tablet} {
      @content;
    }
  } @else if $alias == "tablet-and-up" or $alias == $tablet-and-up {
    @media #{$tablet-and-up} {
      @content;
    }
  } @else if $alias == "pocket" or $alias == $pocket {
    @media #{$pocket} {
      @content;
    }
  } @else if $alias == "lap" or $alias == $lap {
    @media #{$lap} {
      @content;
    }
  } @else if $alias == "lap-and-up" or $alias == $lap-and-up {
    @media #{$lap-and-up} {
      @content;
    }
  } @else if $alias == "desk" or $alias == $desk {
    @media #{$desk} {
      @content;
    }
  } @else if $alias == "widescreen" or $alias == $widescreen {
    @media #{$widescreen} {
      @content;
    }
  } @else if $alias == "hover" or $alias == $hover {
    @media (-moz-touch-enabled: 0), (hover: hover) {
      @content;
    }
  }
}
```