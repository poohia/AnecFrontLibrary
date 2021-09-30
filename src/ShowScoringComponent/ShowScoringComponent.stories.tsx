// Button.stories.ts | Button.stories.tsx
import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import ShowScoringComponent from ".";
import { User } from "../types";

export default {
  title: "Game/ShowScoringComponent",
  component: ShowScoringComponent,
} as Meta;

const usersOneWinner: Pick<User, "username" | "avatar" | "score">[] = [
  // {
  //   avatar: "dinosaur",
  //   score: 10,
  //   username: "User name",
  // },
  // {
  //   avatar: "administrator",
  //   score: 9,
  //   username: "Administrator",
  // },
  // {
  //   avatar: "man",
  //   score: 9,
  //   username: "Man",
  // },
  // {
  //   avatar: "cat",
  //   score: 5,
  //   username: "User 2",
  // },
  // {
  //   avatar: "hacker",
  //   score: 5,
  //   username: "Hacker",
  // },
  // {
  //   avatar: "kitty",
  //   score: 1,
  //   username: "Kitty",
  // },
  // {
  //   avatar: "rainbowFlag",
  //   score: 0,
  //   username: "RainbowFlag",
  // },
  { username: "Jordan 2", avatar: "administrator", score: 1 },
  { username: "eee", avatar: "man", score: 0 },
];

export const ShowScoringStorybookComponent = () => (
  <ShowScoringComponent users={usersOneWinner} />
);
