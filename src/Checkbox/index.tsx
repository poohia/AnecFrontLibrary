import React, { useMemo, useState, useEffect } from "react";

type CheckboxProps = JSX.IntrinsicElements["input"] & {
  label?: string;
  withInput?: boolean;
  inputPlaceholder?: string;
  onChange?: (value: string) => void;
};

const Checkbox = ({
  children,
  className = "",
  label,
  withInput,
  inputPlaceholder,
  onChange,
  ...rest
}: CheckboxProps) => {
  const [value, setValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const classNameValue = useMemo(() => {
    let value = "anec--checkbox-field";

    if (withInput) {
      value += " with-input";
    }

    return `${value} ${className}`;
  }, [className, withInput]);

  useEffect(() => {
    if (value === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [value]);
  if (withInput) {
    return (
      <>
        <label className={classNameValue}>
          <input
            {...rest}
            type="checkbox"
            className="filled-in"
            disabled={disabled}
            onChange={() => {
              onChange && onChange(value);
            }}
          />
          <span>
            <input
              type="text"
              onChange={(e) => setValue(e.target.value)}
              placeholder={inputPlaceholder}
            />
          </span>
        </label>
      </>
    );
  }

  return (
    <>
      <label className={classNameValue}>
        <input {...rest} type="checkbox" className="filled-in" />
        <span>{label}</span>
      </label>
    </>
  );
};

export default Checkbox;
