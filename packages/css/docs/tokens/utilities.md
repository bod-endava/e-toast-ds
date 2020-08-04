## Mixins

### make-flex
`make-flex($dir:row, $justify:flex-start, $align:flex-start)`

Sets `display: flex`, `flex-direction: $dir`, `justify-content: $justify`, `align-items: $align`
___
### add-flex-list-subclass
`add-flex-list-subclass($dir:column, $justify:flex-start, $align:flex-start)`

Calls `make-flex($dir, $justify, $align)` for child list element
___
### add-flex-container-subclass
`add-flex-container-subclass($dir:row, $justify:flex-start, $align:center)`

Calls `make-flex($dir, $justify, $align)` for child list element
___
### status-mixin
`status-mixin($text,$background,$border)`

Sets `color: $text`, `background-color: $background`, `border-color: $border`
___
### status
`status($group)`

Calls `status-mixin` on the given group
___
### synthetic-outline-border
`synthetic-outline-border ($width, $top, $right, $bottom, $left)`

Sets `border-width: $width * 4`, `border-style: double`, `background-clip: padding-box`,
`padding-top: width * 3`, `padding-right: width * 3`, `padding-left: width * 3`, `padding-bottom: width * 3 `
___

## Functions

### is-map
`is-map($var)`

Returns whether or not `$var` is a map
___
### create-group
`create-group($text,$background: "none",$border: "none")`

Returns `text: $text`, `background: $background`, `"border": $border`