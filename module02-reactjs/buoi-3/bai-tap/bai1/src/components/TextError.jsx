import React, { Component } from 'react';

export default class TextError extends Component {
  constructor(props) {
    super(props);
    this.children = this.props.children;
  }
  render() {
    return <p style={{ color: 'red' }}>{this.children}</p>;
  }
}
