import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log('props', this.props); // undefined
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('In ShouldComponentUpdate');
    if (nextState.count !== this.state.count) {
      return true;
    }
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          type='button'
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}
