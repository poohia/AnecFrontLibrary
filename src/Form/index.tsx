import React from "react";

import Field from "./Field";
import Input from "../Input";
import Button from "../Button";
import Checkbox from "../Checkbox";

type FormProps = React.HtmlHTMLAttributes<HTMLFormElement>;

const Form = ({ children, ...rest }: FormProps) => (
  <form className="annec--form" {...rest}>
    <div className="row">{children}</div>
  </form>
);

Form.Input = Input;
Form.Submit = Button;
Form.Field = Field;
Form.Checkbox = Checkbox;
export default Form;
