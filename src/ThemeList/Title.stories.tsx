// Button.stories.ts | Button.stories.tsx
import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import ThemeList from ".";

export default {
  title: "Game/ThemeList",
  component: ThemeList,
} as Meta;

const themes = [
  "Travail",
  "Famille",
  "Soirée",
  "Transports",
  "Enfance - Adolescence",
];

export const TitleComponent = () => <ThemeList themes={themes} />;
