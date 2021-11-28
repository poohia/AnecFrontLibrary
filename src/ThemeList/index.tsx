import React, { useMemo } from "react";
import themeImg from "./bavarder.png";

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
        <div
          key={theme}
          className="anec--theme-list-theme animate__animated animate__flipInY"
        >
          <span>
            {theme}&nbsp;
            <img src={themeImg} alt="theme icon" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ThemeList;
