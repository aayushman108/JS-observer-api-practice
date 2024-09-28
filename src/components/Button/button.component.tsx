import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import styles from "./button.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  preIcon?: React.ReactNode;
  postIcon?: React.ReactNode;
  isLoading?: boolean;
} //onClick, disabled, type, className, style

const renderButton = (
  {
    children,
    text,
    preIcon,
    postIcon,
    isLoading,
    className,
    ...props
  }: React.PropsWithChildren<IProps>,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      className={`${styles.custom_button} ${className && styles[className]}`}
      {...props}
    >
      {preIcon && <span>{preIcon}</span>}
      <span>{text || children}</span>
      {postIcon && <span>{postIcon}</span>}
      {isLoading && <span>Loading...</span>}
    </button>
  );
};

export const Button = forwardRef(renderButton);

Button.displayName = "Button";
