# Form

<hr>

A log in form component that you can Configure as you wish according to the needs

#### Import

```js
import { Form } from '@e-toast/react';
//or
import Form from '@e-toast/react/lib/Form';
```

#### Usage

```jsx
// Show me how to use it!
```

#### Local Type Definitions

| Name |  Definition | Description |
| ---- | ----------- | ----------- |

#### Required props

| Name       | Type   | Description                 |
| ---------- | ------ | --------------------------- |
| `submitlabel` | `string` | Used as the text on the submit button. Required if children is not passed. Hascedence over children. |
| `children` | `node` | Used as the text on the submit button. Required if label is not passed. Label has precedence over this. |

#### Optional props

| Name         | Type       | Default    | Description               |
| ------------ | ---------- | ---------- | ------------------------- |
| `autocompleteEnabled` | `string` | `on` | Enable form to be filled with the browser saved options |
| `firstname`  | `string` | `firstname` | firstname input component id |
| `firstNameLabel` | `string` | `` | Used as the text to reference the firstname input field |
| `firstNamePlaceholder` | `string` | `` | placeholder text to be used on the firstname input field |
| `lastname`   | `string` | `lastname` | lastname input component id |
| `lastnameLabel` | `string` | `` | Used as the text to reference the lastname input field |
| `lastnamePlaceholder` | `string` | `` | placeholder text to be used on the lastname input field |
| `email`      | `string` | `email` | email input component id |
| `emailLabel` | `string` | `` | Used as the text to reference the email input field |
| `emailPlaceholder` | `string` | `` | placeholder text to be used on the email input field |
| `onSubmit`   | `function` | `() => {}` | Callback to run on clicking submit button |
| `submitProps` | `React.ComponentPropsWithoutRef<"button">` | `{ }` | props to be passed to the submit button of the form |
| `inputProps` | `React.ComponentPropsWithoutRef<"input">` | `{ }` | props to be passed to the input fields of the form |
| `spanProps`  | `React.ComponentPropsWithoutRef<"span">` | `{ }` | props to be passed to the span fields of the form |
| `formProps`  | `React.ComponentPropsWithoutRef<"form">` | `{ }` | props to be passed to the form |
