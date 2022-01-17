# Checkbox

## Overview

The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.

## Usage
```
<input type="checkbox" id="vehicle1" class="eds-checkbox" name="vehicle1" value="Bike">
```

## Example
![Checkbox Example](../images/checkbox.png "Checkbox Example")


## Variants

Disabled checkbox

`<input type="checkbox" id="vehicle1" class="eds-checkbox" name="vehicle1" value="Bike" disabled>`

Checked checkbox

`<input type="checkbox" id="vehicle1" class="eds-checkbox" name="vehicle1" value="Bike" checked>`

## Local Tokens

| token            | default value                     | description                                        |
| ---------------- | --------------------------------- | -------------------------------------------------- |
| $main-color      | theme.colors.$base                | color of the checkbox once active                  |
| $border-radius   | theme.shape.$checkbox-radius      | Smooth corners radius                              |
| $disabled-color  | theme.colors.$disable             | color of the checkbox while disabled               |
| $size            | 22px                              | dimensions of the checkbox                         |
| $box-margin      | 4px                               | separation between the checkbox and other elements |
| $checkmark-color | theme.colors.$white               | color of the checkmark ✓ when active               |
| $font-name       | theme.fonts.$checkbox-font        | Font used by checkbox labels                       |
| $font-weight     | theme.fonts.$checkbox-weight      | Font weight used by checkbox labels                |
| $font-size       | theme.fonts.$checkbox-size        | Font size used by checkbox labels                  |
| $line-height     | theme.fonts.$checkbox-line-height | Line height used by checkbox labels                |
| $spacing         | theme.fonts.$checkbox-spacing     | Letter spacing used by checkbox labels             |

## Theme Tokens
| token                 | default value                      | description            |
| --------------------- | ---------------------------------- | ---------------------- |
| $base                 | global.colors.$orange              | Orange color           |
| $white                | global.colors.$white               | White color            |
| $dark-contrast        | global.colors.$orange-dark         | Dark contrast color    |
| $disable              | global.colors.$disable             | Disabled color         |
| $checkbox-font        | global.fonts.$font-name            | Label font family      |
| $checkbox-weight      | global.fonts.$regular              | Label font weight      |
| $checkbox-size        | global.fonts.$px-button            | Label font size        |
| $checkbox-line-height | 22px                               | Label line height      |
| $checkbox-spacing     | 0.16px                             | Label letter spacing   |
| $checkbox-radius      | global.shape.$round-radius         | Checkbox border radius |

## Global Tokens
| token         | default value | description        |
| ------------- | ------------- | ------------------ |
| $orange       | #DE411B       | Orange color       |
| $orange-dark  | #401308       | Dark Orange color  |
| $white        | #fff          | White color        |
| $disable      | #D9D9D9       | Disable color      |
| $font-name    | Roboto        | Font family        |
| $regular      | 400           | Font weight        |
| $px-button    | 16px          | Font size          |
| $round-radius | 4px           | Border radius      |