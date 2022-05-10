# Pagination

## Overview
Not all sites can have all their information on a single page. Websites may need to use multiple pages for easier navigation, better user experience, buyers journey, persona, etc. Some common cases for use pagination are:

- E-commerce
- Product images
- Product descriptions

## Usage

```interactive
<div>
    <nav class="eds-pagination" role="navigation">
        <ul>
            <a href="#"><li>Prev</li></a>
            <a href="#"><li>1</li></a>
            <a href="#"><li>2</li></a>
            <a href="#" class="eds-pagination--is-active"><li>3</li></a>
            <a href="#"><li>4</li></a>
            <a href="#" class="eds-pagination--is-disabled"><li>5</li></a>
            <a href="#"><li>Next</li></a>
        </ul>
    </nav>
</div>
```

## Example
![Pagination Example](../images/pagination.png "Pagination Example")

## Local Tokens

| token                    | default value                       | description               |
| ------------------------ | ----------------------------------- | ------------------------- |
| $main-color              | theme.colors.$primary-darkest       | Primary color             |
| $disabled                | theme.colors.$disabled              | Disabled color            |
| $disabled-font-color     | theme.colors.$disabled              | Disabled color            |
| $active-font-color       | theme.colors.$primary-dark          | Text color                |
| $active-background-color | theme.colors.$disabled-light        | Text color background     |
| $disabled-font-color     | theme.colors.$disabled              | Text color while disabled |
| $font-family             | theme.fonts.$pagination-font        | Text font family          |
| $font-weight             | theme.fonts.$pagination-weight      | Text font weight          |
| $font-size               | theme.fonts.$pagination-size        | Text font size            |
| $line-height             | theme.fonts.$pagination-line-height | Text line height          |
| $spacing                 | theme.fonts.$pagination-spacing     | Text letter spacing       |


## Theme Tokens
| token              | default value           | description             |
| ------------------ | ----------------------- | ----------------------- |
| $white             | global.colors.$white    | White color             |
| $cta               | global.colors.$blue     | CTA color               |
| $dark-contrast-cta | global.colors.$cta-dark | Dark contrast CTA color |
| $disable           | global.colors.$disable  | Disabled contrast color |


## Global Tokens
| token        | default value | description             |
| ------------ | ------------- | ----------------------- |
| $white       | #fff          | White color             |
| $blue        | #379BD7       | White color             |
| $cta-dark    | #0C2A3C       | Dark Blue color         |
| $disable     | #D9D9D9       | Disabled color          |
| $pill-radius | 24px          | Border radius           |
| $font-name   | Roboto        | Font family             |
| $regular     | 400           | Font weight             |
| $px-button   | 16px          | Button font size        |
| $lh-button   | 15px          | Button text line height |

