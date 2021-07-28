import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import AvatarList from ".";

export default {
  title: "Game/AvatarList",
  component: AvatarList,
} as Meta;

export const LabelInfoComponent = () => (
  <AvatarList
    users={[
      {
        avatar: "dinosaur",
        score: 10,
        userID: "12374sdf2zefz",
        username: "User name",
        connected: true,
      },
      {
        avatar: "administrator",
        score: 9,
        userID: "sdf574q7f",
        username: "Administrator",
        vote: "true",
        connected: false,
      },
      {
        avatar: "cat",
        score: 5,
        userID: "sdf574q7fqsdfezaf",
        username: "User 2",
        vote: "false",
        connected: true,
      },
    ]}
  />
);
