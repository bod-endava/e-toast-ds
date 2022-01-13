## Labeled Input

```interactive
<div class="eds-outline-input__container">
    <div class="eds-outline-input__label">
        <label class="eds-outline-input__label__text">
            This is an input
        </label>
    </div>
    <input class="eds-outline-input" >
</div>
```

## Labeled Input Error

```interactive
<div class="eds-outline-input__container">
    <div class="eds-outline-input__label">
        <label class="eds-outline-input__label__text">
            This is an input
        <div class="eds-outline-input__label__error-alert">
            There is something wrong
        </div>
        </label>
        
    </div>
    <input class="eds-outline-input eds-outline-input--error ">
</div>
```

## Local Tokens
 
| token | default value | description |
| -------------------------- | --------------------- | ------------ |
| $idle-font-color           | theme.colors.$secondary-dark | font color for the content when idle |
| $idle-background-color     | theme.colors.$background | background of the input when idle |
| $idle-border-color         | theme.colors.$secondary-mid | border of the input when idle |
| $active-font-color         | theme.colors.$secondary-dark | font color for the content when active |
| $active-background-color   | theme.colors.$background | background of the input when active |
| $active-border-color       | theme.colors.$primary | border of the input when active |
| $focus-font-color          | theme.colors.$secondary-dark | font color for the content when focused |
| $focus-background-color    | theme.colors.$background | background color of the input when focused|
| $focus-border-color        | theme.colors.$primary | border color of the input when focused |
| $disabled-font-color       | theme.colors.$disabled | font color for the content when disabled |
| $disabled-background-color | theme.colors.$background | background color of the input when disabled  |
| $disabled-border-color     | theme.colors.$disabled | border color of the input when disabled |
| $label-font-color          | theme.colors.$secondary-dark | font color for the label when idle |
| $label-error-font-color    | theme.colors.$danger | font color for the label when in error state |
| $placeholder-font-color    | theme.colors.$secondary-mid | font color for the placeholder |
| $error-border-color        | theme.colors.$danger | border color of the input when in error state |
| $success-border-color      | theme.colors.$success | border color of the input when in success state |
| $border-radius             | theme.shape.$input-radius | border radius for the input |
| $border-width              | 1px | width of the input border |
| $height                    | 30px | height of the input |
| $padding-top               | 6px | top padding of the input |
| $padding-right             | 10px | right padding of the input |
| $padding-bottom            | 6px | bottom padding of the input |
| $padding-left              | 10px | left padding of the input |
| $font-name                 | theme.fonts.$input-font | input font |
| $font-weight               | theme.fonts.$input-weight | input font weight |
| $font-size                 | theme.fonts.$input-size | input font size |
| $line-height               | theme.fonts.$input-line-height | input line height |
| $spacing                   | theme.fonts.$input-spacing | input letter spacing |
| $label-font-size           | theme.fonts.$label-size | font size for the label |
| $label-font-name           | theme.fonts.$input-font | font used in the label |