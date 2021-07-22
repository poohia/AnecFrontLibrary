import React, { useMemo } from "react";

type LabelInfoProps = JSX.IntrinsicElements["p"] & {
  animate?: boolean;
  like?: "title" | "subtitle";
};

const LabelInfo = ({
  children,
  className = "",
  animate = false,
  like = "title",
  ...rest
}: LabelInfoProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--game-label-info";

    if (animate) {
      value += " animate__animated animate__backInUp";
    }
    value += ` anec--game-label-info-${like}`;

    return `${value} ${className}`;
  }, [className, animate, like]);

  if (like === "title") {
    return (
      <h2 className={classNameValue} {...rest}>
        {children}
      </h2>
    );
  }
  return (
    <p className={classNameValue} {...rest}>
      {children}
    </p>
  );
};

export default LabelInfo;
