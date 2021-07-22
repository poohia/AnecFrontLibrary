import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import LabelInfo from ".";

export default {
  title: "Game/LabelInfo",
  component: LabelInfo,
} as Meta;

export const LabelInfoComponent = () => (
  <>
    <LabelInfo animate>Label Info Title</LabelInfo>
    <LabelInfo animate like="subtitle">
      Label Info Title
    </LabelInfo>
  </>
);
