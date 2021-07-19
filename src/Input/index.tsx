import React, { useMemo } from "react";
import Field from "../Form/Field";

type InputProps = JSX.IntrinsicElements["input"] & {
  label: string;
  type?: string;
  required?: boolean;
};

const Input = ({
  children,
  id,
  className = "",
  label,
  required,
  ...rest
}: InputProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--input-field col s12 m9 offset-m1";
    if (required) {
      value += " required";
    }
    return `${value} ${className}`;
  }, [className, required]);
  return (
    <Field className={classNameValue}>
      <label htmlFor={id ? id : undefined}>{label}</label>
      <input id={id} {...rest} />
    </Field>
  );
};

export default Input;
