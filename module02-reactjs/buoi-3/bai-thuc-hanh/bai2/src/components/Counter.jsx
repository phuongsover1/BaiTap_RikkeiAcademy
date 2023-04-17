import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log('props', this.props); // undefined
  }

  static getDerivedStateFromProps(props, state) {
    console.log('static props', props);
    if (props.count !== state.count) {
      return { count: props.count };
    }
    // Return null to indicate no change to state.
    return null;
  }
  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
