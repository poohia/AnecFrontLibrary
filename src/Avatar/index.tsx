import React, { useMemo } from "react";
import {
  Hacker,
  Woman,
  Man,
  Kitty,
  Cat,
  RainbowFlag,
  LgbtIcon,
  Dinosaur,
  Administrator,
} from "./icons";

export type AvatarType =
  | "administrator"
  | "hacker"
  | "woman"
  | "man"
  | "kitty"
  | "cat"
  | "rainbowFlag"
  | "lgbtIcon"
  | "dinosaur";
type AvatarProps = JSX.IntrinsicElements["div"] & {
  type: AvatarType;
  preset?: "default" | "card";
  animate?: boolean;
  onClick?: (title: AvatarType) => void;
};

const Avatar = ({
  type,
  preset = "default",
  className = "",
  animate,
  onClick,
  ...rest
}: AvatarProps) => {
  const classNameValue = useMemo(() => {
    let value = "anec--avatar";
    value += ` anec--avatar-${preset}`;
    if (animate) {
      value += " animate__animated animate__backInUp";
    }
    return `${value} ${className}`;
  }, [className, preset, animate]);
  const CurrAvatar = useMemo(() => {
    switch (type) {
      case "administrator":
        return Administrator;
      case "dinosaur":
        return Dinosaur;
      case "lgbtIcon":
        return LgbtIcon;
      case "rainbowFlag":
        return RainbowFlag;
      case "cat":
        return Cat;
      case "kitty":
        return Kitty;
      case "man":
        return Man;
      case "woman":
        return Woman;
      case "hacker":
      default:
        return Hacker;
    }
  }, [type]);

  return (
    <div
      className={classNameValue}
      onClick={() => onClick && onClick(type)}
      {...rest}
    >
      <CurrAvatar />
      {preset === "card" && <p>{type}</p>}
    </div>
  );
};

export default Avatar;
