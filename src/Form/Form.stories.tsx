import React from "react";

import { Meta } from "@storybook/react";

import "../index.css";
import Form from ".";

export default {
  title: "Components/Form",
  component: Form,
} as Meta;

export const FormComponent = () => (
  <Form>
    <Form.Input label="Label" type="text" id="label" required />
    <Form.Field>
      <Form.Checkbox label="Checkbox" />
      <Form.Checkbox label="Checkbox" />
      <Form.Checkbox
        label="Checkbox"
        withInput
        onChange={(value) => console.log(value)}
        inputPlaceholder="Placeholder"
      />
    </Form.Field>
    <div className="col s3 offset-s1" style={{ marginTop: "25px" }}>
      <Form.Submit fluid type="submit" icon="cloud">
        Submit
      </Form.Submit>
    </div>
  </Form>
);
