import React, { useMemo } from "react";

type FieldProps = JSX.IntrinsicElements["div"];

const Field = ({ children, className = "", ...rest }: FieldProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--input-field col s12 m9 offset-m1";
    return `${value} ${className}`;
  }, [className]);
  return (
    <div className={classNameValue} {...rest}>
      {children}
    </div>
  );
};

export default Field;
