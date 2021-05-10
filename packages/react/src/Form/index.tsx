import React from 'react';

interface FormPropsWithoutRef {
  /**
   * enabled autocomplete form fields
   */
  autocompleteEnabled?: string;
  /**
   * firstname id field
   */
  firstname?: string;
  /**
   * firstname label as text
   */
  firstNameLabel?: string;
  /**
   * firstname placeholder
   */
  firstNamePlaceholder?: string;
  /**
   * lastname id field
   */
  lastname?: string;
  /**
   * lastname label as text
   */
  lastnameLabel?: string;
  /**
   * lastname placeholder as text
   */
  lastnamePlaceholder?: string;
  /**
   * email id field
   */
  email?: string;
  /**
   * email label as text
   */
  emailLabel?: string;
  /**
   * email placeholder as text
   */
  emailPlaceholder?: string;
  /**
   * submit message name
   */
  submitLabel?: string;
  /**
   * Optional callback to call on submit
   */
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  /**
   * Props to be passed down to the submit button
   */
  submitProps: React.ComponentPropsWithoutRef<"button">;
  /**
   * Props to be passed down to the inputs of the form
   */
  inputProps: React.ComponentPropsWithoutRef<"input">;
  /**
   * Props to be passed down to the span of the form
   */
  spanProps: React.ComponentPropsWithoutRef<"span">;
  /**
   * Props of the form to be applied
   */
  formProps: React.ComponentPropsWithoutRef<"form">;
  /**
   * React content. Required if label is not present
   */
  children?: React.ReactNode;
}

export type FormProps = FormPropsWithoutRef & {
  /**
   * Ref to the inner form component
   */
  ref?: React.ForwardedRef<HTMLFormElement>
}
export type FormInnerElement = HTMLFormElement;

const Form = React.forwardRef<FormInnerElement, FormPropsWithoutRef>(({
  autocompleteEnabled="on",
  firstname="firstname",
  firstNameLabel="firsname",
  firstNamePlaceholder,
  lastname="lastname",
  lastnameLabel="lastname",
  lastnamePlaceholder,
  email="email",
  emailLabel="email",
  emailPlaceholder,
  submitLabel="Submit",
  onSubmit=()=>{},
  submitProps={},
  inputProps={},
  spanProps={},
  formProps={},
  children
}, ref) => {

  return <form ref={ref} onSubmit={onSubmit} autoComplete={autocompleteEnabled} {...formProps}>
    <label htmlFor="firstname">
      <span {...spanProps}>{firstNameLabel}</span>
      <input type="text" name="firstname" id={firstname} placeholder={firstNamePlaceholder} {...inputProps}/>
    </label>
    <label htmlFor="lastname">
      <span {...spanProps}>{lastnameLabel}</span>
      <input type="text" name="lastname" id={lastname} placeholder={lastnamePlaceholder} {...inputProps}/>
    </label>
    <label htmlFor="email">
      <span {...spanProps}>{emailLabel}</span>
      <input type="email" name="email" id={email} placeholder={emailPlaceholder} {...inputProps}/>
    </label>
    <button type="submit" {...submitProps} >{submitLabel || children}</button>
  </form>
})

export default Form
