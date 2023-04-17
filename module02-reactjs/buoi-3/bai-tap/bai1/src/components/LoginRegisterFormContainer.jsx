import React, { Component } from 'react';

export default class LogInRegisterFormContainer extends Component {
  constructor(props) {
    super(props);
    this.children = this.props.children;
  }
  render() {
    return (
      <div className='form'>
        <div className='form-toggle' />
        {this.children}
      </div>
    );
  }
}
