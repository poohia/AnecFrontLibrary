// Button.stories.ts | Button.stories.tsx
import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import Title from ".";

export default {
  title: "Default/Title",
  component: Title,
} as Meta;

export const ButtonComponent = () => (
  <Title subtitle="Lorem Ipsum">Title</Title>
);
