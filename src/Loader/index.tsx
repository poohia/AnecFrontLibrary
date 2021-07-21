import React, { useMemo } from "react";

type LoaderProps = JSX.IntrinsicElements["div"] & {
  show?: boolean;
};

const Loader = ({
  children,
  className = "",
  show = true,
  ...rest
}: LoaderProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--loader";
    if (!show) {
      value += " anec--loader-hide";
    }
    return `${value} ${className}`;
  }, [className, show]);
  if (!show) return <></>;
  return (
    <div className={classNameValue} {...rest}>
      <div>{children}</div>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
};

export default Loader;
