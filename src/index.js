import React, { Component, Fragment } from "react";
import propTypes from "prop-types";
import { render } from "react-dom";
class Button extends Component {
  static defaultProps = {
    children: "Save"
  };
  static propTypes = {
    onClick: propTypes.func.isRequired,
    children: propTypes.string
  };
  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

class App extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <Button onClick={this.handleClick}>{this.state.count}</Button>
      </Fragment>
    );
  }
}
render(<App />, document.getElementById("App"));
