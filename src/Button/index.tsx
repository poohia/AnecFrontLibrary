import React, { useMemo } from "react";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  preset?: "primary" | "secondary";
  icon?: string;
  fluid?: boolean;
  animate?: boolean;
};

const Button = ({
  children,
  fluid,
  className = "",
  icon,
  preset = "primary",
  animate,
  ...rest
}: ButtonProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--btn waves-effect btn";
    if (fluid) {
      value += " fluid";
    }
    if (animate) {
      value += " animate__animated animate__rubberBand";
    }
    value += ` anec--btn-${preset}`;
    return `${value} ${className}`;
  }, [className, fluid, preset, animate]);
  return (
    <button className={classNameValue} {...rest}>
      {icon && <i className="material-icons right">{icon}</i>}
      {children}
    </button>
  );
};

export default Button;
