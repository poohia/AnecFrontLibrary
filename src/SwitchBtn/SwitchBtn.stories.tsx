import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import SwitchBtn from ".";

export default {
  title: "Game/SwitchBtn",
  component: SwitchBtn,
} as Meta;

export const LabelInfoComponent = () => (
  <SwitchBtn
    onChange={(choice) => console.log(choice)}
    button1={{ label: "like", value: "like" }}
    button2={{ label: "dislik", value: "dislike" }}
  />
);
