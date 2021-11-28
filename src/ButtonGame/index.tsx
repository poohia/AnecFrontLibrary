import React, { useMemo } from "react";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  preset?:
    | "default"
    | "whiteyellow"
    | "whiteviolet"
    | "whiteclearviolet"
    | "black"
    | "blue"
    | "success"
    | "danger"
    | "yellow"
    | "maron"
    | "orange"
    | "pink"
    | "violet";
  icon?: string;
  fluid?: boolean;
  animate?: boolean;
};

const ButtonGame = ({
  children,
  fluid,
  className = "",
  icon,
  preset = "success",
  animate,
  ...rest
}: ButtonProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--btn-game rounded";
    if (fluid) {
      value += " fluid";
    }
    if (animate) {
      value += " animate animate__animated animate__rubberBand";
    }
    value += ` ${preset}`;
    return `${value} ${className}`;
  }, [className, fluid, preset, animate]);
  return (
    <button className={classNameValue} {...rest}>
      {icon && <i className="material-icons right">{icon}</i>}
      {children}
    </button>
  );
};

export default ButtonGame;
