import React, { useMemo } from "react";

import { Choice } from "../";

type SwitchBtnProps<T = any> = JSX.IntrinsicElements["div"] & {
  onChange: (choice: Choice<T>) => void;
  value?: Choice["value"];
  button1: Choice;
  button2: Choice;
  disabled?: boolean;
};

const SwitchBtn = ({
  children,
  id,
  className = "",
  value,
  onChange,
  button1,
  button2,
  disabled,
  ...rest
}: SwitchBtnProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--switch-btn";
    return `${value} ${className}`;
  }, [className]);

  return (
    <div className={classNameValue} {...rest}>
      <div
        className={`anec--switch-btn-button anec--switch-btn-button-success ${
          !value || value !== button1.value ? "unselected" : ""
        }`}
        onClick={() => onChange(button1)}
      >
        <i className="material-icons">{button1.icon || "thumb_up"}</i>
        {button1.label}
      </div>
      <div
        className={`anec--switch-btn-button anec--switch-btn-button-danger ${
          !value || value !== button2.value ? "unselected" : ""
        }`}
        onClick={() => onChange(button2)}
      >
        <i className="material-icons">{button2.icon || "thumb_down"}</i>
        {button2.label}
      </div>
    </div>
  );
};

export default SwitchBtn;
