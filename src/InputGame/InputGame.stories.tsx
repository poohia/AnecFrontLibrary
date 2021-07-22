import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import InputGame from ".";

export default {
  title: "Game/InputGame",
  component: InputGame,
} as Meta;

export const LabelInfoComponent = () => (
  <>
    <InputGame value="Input Game" animate />
    <InputGame
      value="Input Game Loading"
      animate
      loading
      helperText="Helper Text"
    />
  </>
);
