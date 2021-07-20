import React, { useMemo } from "react";

type TitleProps = JSX.IntrinsicElements["h1"] & {
  subtitle?: string;
};

const Title = ({
  children,
  id,
  className = "",
  subtitle,
  ...rest
}: TitleProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--title";
    return `${value} ${className}`;
  }, [className]);
  return (
    <>
      <h1 className={classNameValue} {...rest}>
        {children}
      </h1>
      {subtitle && <p className="anec--title-subtitle">{subtitle}</p>}
    </>
  );
};

export default Title;
