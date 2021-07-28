import React, { useMemo } from "react";

type TitleProps = JSX.IntrinsicElements["h1"] & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  subtitle?: string;
};

const Title = ({
  children,
  id,
  as = "h1",
  className = "",
  subtitle,
  ...rest
}: TitleProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--title";
    return `${value} ${className}`;
  }, [className]);
  switch (as) {
    case "h1":
      return (
        <>
          <h1 className={classNameValue} {...rest}>
            {children}
          </h1>
          {subtitle && <p className="anec--title-subtitle">{subtitle}</p>}
        </>
      );
    case "h2":
      return (
        <>
          {" "}
          <h2 className={classNameValue} {...rest}>
            {children}
          </h2>
          {subtitle && <p className="anec--title-subtitle">{subtitle}</p>}
        </>
      );
    case "h3":
      return (
        <h3 className={classNameValue} {...rest}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={classNameValue} {...rest}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={classNameValue} {...rest}>
          {children}
        </h5>
      );
    case "h6":
    default:
      return (
        <h6 className={classNameValue} {...rest}>
          {children}
        </h6>
      );
  }
};

export default Title;
