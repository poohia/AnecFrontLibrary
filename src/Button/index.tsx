import React from "react";

const Button = ({ children, ...rest }: any) => (
  <button style={{ backgroundColor: "orange", color: "white" }} {...rest}>
    {children}
  </button>
);

export default Button;
