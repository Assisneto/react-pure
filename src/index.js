import React, { Component, Fragment } from "react";
import Button from "./components/Button";
import { render } from "react-dom";
import "./style.scss";
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
