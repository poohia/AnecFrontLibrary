// Button.stories.ts | Button.stories.tsx
import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import Title from ".";

export default {
  title: "Default/Title",
  component: Title,
} as Meta;

export const TitleComponent = () => (
  <>
    <Title subtitle="Lorem Ipsum">Title</Title>
    <Title as="h2" subtitle="Subtitle">
      Title
    </Title>
    <Title as="h3">Title</Title>
    <Title as="h4">Title</Title>
    <Title as="h5">Title</Title>
    <Title as="h6">Title</Title>
  </>
);
