import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import Loader from ".";

export default {
  title: "Components/Loader",
  component: Loader,
} as Meta;

export const LoaderComponent = () => <Loader>Loading...</Loader>;
