import React, { useState } from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import SwitchBtn from ".";

export default {
  title: "Game/SwitchBtn",
  component: SwitchBtn,
} as Meta;

export const LabelInfoComponent = () => {
  const [value, setValue] = useState("like");
  return (
    <SwitchBtn
      onChange={(choice) => setValue(String(choice.value))}
      button1={{ label: "Véridique", value: "like" }}
      button2={{ label: "Fausse", value: "dislike" }}
      value={value}
    />
  );
};
