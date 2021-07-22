// Button.stories.ts | Button.stories.tsx
import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import Button from ".";

export default {
  title: "Default/Button",
  component: Button,
} as Meta;

export const ButtonComponent = () => (
  <>
    <Button>Button</Button>
    <br />
    <br />
    <Button preset="secondary">Button secondary</Button>
    <br />
    <br />
    <Button icon="send">Button secondary</Button>
    <br />
    <br />
    <Button preset="secondary" icon="send">
      Button secondary
    </Button>
    <br />
    <br />
    <Button icon="send" animate>
      Button secondary
    </Button>
  </>
);
