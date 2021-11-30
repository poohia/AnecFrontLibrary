import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import Modal from ".";

export default {
  title: "Game/Modal",
  component: Modal,
} as Meta;

export const LabelInfoComponent = () => (
  <Modal key="test" headerTxt="Header Modal">
    <p>Label Info Title</p>
  </Modal>
);
