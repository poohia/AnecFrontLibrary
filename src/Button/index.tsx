import React, { useMemo } from "react";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  icon?: string;
  fluid?: boolean;
};

const Button = ({
  children,
  fluid,
  className = "",
  icon,
  ...rest
}: ButtonProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--btn waves-effect btn";
    if (fluid) {
      value += " fluid";
    }
    return `${value} ${className}`;
  }, [className, fluid]);
  return (
    <button className={classNameValue} {...rest}>
      {icon && <i className="material-icons right">{icon}</i>}
      {children}
    </button>
  );
};

export default Button;
