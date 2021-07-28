import React, { useMemo } from "react";

type ThemeListProps = JSX.IntrinsicElements["div"] & {
  themes: string[];
};

const ThemeList = ({
  children,
  id,
  className = "",
  themes,
  ...rest
}: ThemeListProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--theme-list";
    return `${value} ${className}`;
  }, [className]);
  return (
    <div className={classNameValue} {...rest}>
      {themes.map((theme) => (
        <div key={theme} className="animate__animated animate__flipInY">
          {theme}
        </div>
      ))}
    </div>
  );
};

export default ThemeList;
