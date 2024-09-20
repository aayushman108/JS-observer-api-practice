import React, { CSSProperties, ForwardedRef, forwardRef } from "react";

interface IProps {
  style?: CSSProperties;
  type?: "submit" | "reset" | "button";
}

const renderButton = (
  { children, type = "submit", ...props }: React.PropsWithChildren<IProps>,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button ref={ref} type={type} {...props}>
      {children}
    </button>
  );
};

export const Button = forwardRef(renderButton);

Button.displayName = "Button";
