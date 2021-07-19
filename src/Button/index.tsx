import React from "react";

const Button = ({ children, ...rest }: any) => (
  <>
    <a className="waves-effect waves-light btn primary">
      <i className="material-icons right">cloud</i>
      {children}
    </a>
  </>
);

export default Button;
