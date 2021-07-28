import React, { useMemo } from "react";

import { Choice } from "../";

type SwitchBtnProps<T = any> = JSX.IntrinsicElements["div"] & {
  onChange: (choice: Choice<T>) => void;
  value?: Choice;
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
      <button
        className={`anec--btn waves-effect btn anec--btn-success ${
          (!value || value.value !== button1.value) && "unselected"
        }`}
        onClick={() => onChange(button1)}
        type="button"
        disabled={disabled}
      >
        <i className="material-icons left">{button1.icon || "thumb_up"}</i>
        {button1.label}
      </button>
      <button
        className={`anec--btn waves-effect btn anec--btn-danger ${
          (!value || value.value !== button2.value) && "unselected"
        }`}
        onClick={() => onChange(button2)}
        type="button"
        disabled={disabled}
      >
        <i className="material-icons right">{button2.icon || "thumb_down"}</i>
        {button2.label}
      </button>
    </div>
  );
};

export default SwitchBtn;
