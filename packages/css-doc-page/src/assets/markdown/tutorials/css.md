# Adding Your CSS Component

> Note: the word `{yourcomponent}` is a placeholder. Please override it with the name of your respective component:
***

Before start with the implementation of the an e-toast component, keep in mind the tokens architecture. In short, the tokens in e-toast are the inputs that allow the customization of a component. The project classify the tokens in three categories:

- Colors
- Fonts/Typography
- Shapes

1 - Add the tokens (colors, fonts, and shapes) of your component in the default theme inside the `packages/css/src/themes/default/{yourcomponent}/index.scss` file. The next snippet is a reference of the tokens you can definer for the component

```scss
@use "../constants/colors.scss" as theme_colors;
@use "../constants/fonts.scss" as theme_fonts;
@use "../constants/shapes.scss" as theme_fonts;

// Color tokens
// ----------------------------

// default
$default-font-color: theme_colors.$primary-darkest;

// active
$active-font-color: theme_colors.$primary-dark;
$active-background-color: theme_colors.$disabled-light;

// disable
$disabled-font-color: theme_colors.$disabled;

// Typography tokens
// ----------------------------

$font-family: theme_fonts.${yourcomponent}-font;
$font-size: theme_fonts.${yourcomponent}_size;
$font-weight: theme_fonts.${yourcomponent}-weight;
$letter-spacing: theme_fonts.${yourcomponent}-spacing;
$line-height: theme_fonts.${yourcomponent}-line-height;

// Shape tokens
// ----------------------------
$border-radius: theme_shapes.${yourcomponent}-border-radius;
```

2 - Add your component in the `packages/css/src/theme.config` file:

```
# Theme Config
# Use this file to change component themes

avatar          : default
button          : default
checkbox        : default
yourcomponent   : default
```

3 - Create the folder `packages/css/src/atoms/{yourcomponent}`.

4 - Create the file `packages/css/src/atoms/{yourcomponent}/_index.scss` and add your respective styles. Remember use the `eds-` prefeix to define the customizable styles.

5 - Import your tokens from the file created in the step 1. The next snippet group a template for steps 4 and 5:

```scss
@use "../../themes/%{yourcomponent}%/{yourcomponent}" as theme_tokens;
@use "../../utility/index" as utils;

.eds-{yourcomponent} {
    // Your styles here
}
```

6 - Includes the component path in the next file: `packages/css/src/etoast.scss`:

```scss
@use "utility" as utils;
@use "./globals/colors" as colors;
@use "./atoms/avatar/index" as avatar;
@use "./atoms/buttons/index" as button;
@use "./atoms/checkbox/index" as checkbox;
@use "./atoms/radio/index" as radio;
@use "./atoms/yourcomponent/index" as yourcomponent;
```

8 - Consolidate all the information relevant to the component in a markdown file with the next paht `packages/css/docs/atoms/{yourcomponent}.md`. This documentation will be used for the tostaditas project.

7 - Compile your changes running the command `npm run build:css` in a terminal located in the `e-toast-ds` path

Check this [PR#53](https://github.com/bod-endava/e-toast-ds/pull/53) as reference.
