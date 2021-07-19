// Button.stories.ts | Button.stories.tsx
import React from "react";

import { Meta } from "@storybook/react";

import "../styles/modules/button.css";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Primary = () => <Button primary>Button</Button>;
