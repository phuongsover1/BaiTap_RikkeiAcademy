import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log('props', this.props); // undefined
  }

  incrementHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementHandler = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count === 10) {
      alert('Count reached maximum limit');
    } else if (this.state.count === -10) alert('Count reached minimum limit');
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button type='button' onClick={this.incrementHandler}>
          Increase
        </button>
        {'  '}
        <button type='button' onClick={this.decrementHandler}>
          Decrease
        </button>
      </div>
    );
  }
}
