import React, { Component, Fragment } from "react";
import propTypes from "prop-types";
import { render } from "react-dom";
class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}
Button.defaultProps = {
  children: "Save"
};
Button.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.string
};
class App extends Component {
  handleClick() {
    alert("Button");
  }
  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <Button onClick={() => alert("save")} />
        <Button onClick={this.handleClick}>Click</Button>
      </Fragment>
    );
  }
}
render(<App />, document.getElementById("App"));
