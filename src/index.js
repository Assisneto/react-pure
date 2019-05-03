import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './components/Button';
import './style.scss';

class App extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <Fragment>
        <h1>Hello World</h1>
        <h2>{count}</h2>
        <Button onClick={this.handleClick}>somar</Button>
      </Fragment>
    );
  }
}
render(<App />, document.getElementById('App'));
