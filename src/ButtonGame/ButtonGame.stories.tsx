// Button.stories.ts | Button.stories.tsx
import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import Button from ".";

export default {
  title: "Game/Button",
  component: Button,
} as Meta;

export const ButtonComponent = () => (
  <>
    <Button>Button</Button>
    <br />
    <br />
    <Button preset="blue">Button secondary</Button>
    <br />
    <br />
    <Button icon="getcard" fluid>
      Button secondary
    </Button>
    <br />
    <br />
    <Button preset="pink" icon="send">
      Button secondary
    </Button>
    <br />
    <br />
    <Button icon="send" preset="orange" animate>
      Button secondary
    </Button>
    <br />
    <br />
    <Button icon="send" preset="violet" disabled>
      Button secondary
    </Button>
  </>
);
