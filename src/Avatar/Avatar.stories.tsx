import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import Avatar from ".";

export default {
  title: "Game/Avatar",
  component: Avatar,
} as Meta;

export const AvatarComponent = () => (
  <>
    <Avatar type="hacker" />
    <Avatar type="woman" />
    <Avatar type="man" />
    <Avatar type="kitty" />
    <Avatar type="cat" />
    <Avatar type="rainbowFlag" />
    <Avatar type="lgbtIcon" />
    <Avatar type="dinosaur" />
    <Avatar type="administrator" preset="card" />
  </>
);
