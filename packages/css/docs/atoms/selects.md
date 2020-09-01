# Select

## Overview

Represents a menu of options where the user can select a single option. This component depends on importing the behaviors js file inside the css package like so:

```javascript
import "@e-toast/css/behaviors.js"
```

The javascript file will allow detection of current and dynamically added selects to add the extra styles and functionality. Without it, you would need to manually customize the selects.

As a word of caution: the "eds-select" class hides any select inside of the component. The behaviors.js injects logic that dynamically injects a div that behaves like a select with the options of the first select that is a child of the element with the "eds-select" class. The class can be applied to any element but a div is suggested. Any other element may break the functionality

## Usage
```html
<div class="eds-select">
    <select>
        <option hidden>Choose one</option>
        <option>First</option>
        <option>Second</option>
        <option>Third</option>
    </select>
</div>
```

## Variants

Disabled

```html
<div class="eds-select" disabled>
    <select>
        <option>First</option>
        <option>Second</option>
    </select>
</div>
```

```html
<div class="eds-select">
    <select disabled>
        <option>First</option>
        <option>Second</option>
    </select>
</div>
```

## Local Tokens

| token | default value | description |
| ----- | ------------- | ----------- |
| $border-color | theme_colors.$secondary-dark | Color used for the select border | 
| $background | theme_colors.$background | Color used for the background of the select and the list of items |
| $height | 30px | height of the select |
| $width | 185px | width of the select |
| $select-radius | 30px | Radius for the select corners |
| $select-padding | 6px 10px | Padding used in the select |
| $list-radius | 8px | Radius for the list's borders |
| $list-margin-top | 6px | Space between list and select | 
| $item-padding | 8px 10px | Padding for each individual item |
| $item-hover-text-color | theme_colors.$background | text color of an item when the mouse is over it |
| $item-hover-background | theme_colors.$primary | background color of an item when the mouse is over it |
| $disabled-border-color | theme_colors.$disabled | Border color of the select when it is disabled |
| $disabled-text-color | theme_colors.$disabled | Text color of the select when it is disabled |
| $font-color | theme_colors.$secondary-dark | Text color for both the select and the items in the list |
| $font-name | theme_fonts.$select-font | Font used in the select and item list |
| $font-weight | theme_fonts.$select-weight | Font weight used in the select and item list |
| $font-size | theme_fonts.$select-size | Font size used in the select and item list |
| $line-height | theme_fonts.$select-line-height | Line height used in the select and item list |
| $spacing | theme_fonts.$select-spacing | Letter spacing used in the select and item list |


## Theme Tokens

| token | default value | description |
| ----- | ------------- | ----------- |
| $background | globals.colors.$white | White color |
| $primary | globals.colors.$orange | Orange color |
| $disabled | globals.colors.$disable | Disable color |
| $secondary-dark | globals.colors.$lightgray-dark | Dark shade of lightgray |
| $select-font | globals.fonts.$font-name | Font used alll over etoast |
| $select-weight | globals.fonts.$regular | Regular font weight |
| $select-size | globals.fonts.$px-button | Font size used in select text |
| $select-line-height | 18px | Line height of select |
| $select-spacing | 0.16px | Letter spacing |

## Global Tokens

| token | default value | description |
| ----- | ------------- | ----------- |
| $white | #fff | White color |
| $orange | #DE411B | Orange color |
| $disable | #D9D9D9 | Disabled color |
| $lightgray-dark | #1c272b | Dark shade of lightgray color |
| $font-name | Roboto | Default font used all around etoast |
| $regular | 400 | Regular or Default font weight |
| $px-button | 16px | Font size for buttons |