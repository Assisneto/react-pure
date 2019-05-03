import React from "react";
import propTypes from "prop-types";

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

Button.applydefaultProps = {
  children: "Save"
};
Button.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.number
};
export default Button;
