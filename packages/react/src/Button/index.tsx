import React from 'react';
import getClassName from 'getclassname';
import { Icons, Sizes } from "../sharedTypes"

export type ButtonVariants = "primary" | "outline" | "cta" | "text" | "icon"

export interface ButtonProps {
  label?: string;
  disabled?: boolean;
  icon?: Icons;
  size?: Sizes;
  variant?: ButtonVariants;
  children?: React.ReactNode;
  buttonProps?: React.ComponentPropsWithoutRef<"button">;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type ButtonRef = HTMLButtonElement;

const Button = React.forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const { 
    label,
    children,
    variant="primary",
    icon=undefined,
    size=undefined,
    disabled=false,
    buttonProps={},
    onClick=(_: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{}
  } = props;

  const cl = getClassName({
    base: `eds-${variant}-button`,
    [`eds-button-${size}`]: Boolean(size),
    [`icon-${icon}`]: Boolean(icon),
  })

  return <button ref={ref} className={cl} disabled={disabled} onClick={onClick} {...buttonProps} >
    {label || children}
  </button>
})

export default Button