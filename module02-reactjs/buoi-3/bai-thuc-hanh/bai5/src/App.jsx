import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }

  setNumber = () => {
    this.setState({ data: this.state.data + 1 });
  };
  render() {
    return (
      <div>
        <button type='button ' onClick={this.setNumber}>
          INCREMENT
        </button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}

class Content extends Component {
  componentWillMount() {
    console.log('Component WILL MOUNT!');
  }

  componentDidMount() {
    console.log('Component DID MOUNT!');
  }

  componentWillReceiveProps() {
    console.log('Component WILL RECEIVE PROPS');
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentWillUpdate(newProps, newState) {
    console.log('Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE');
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!');
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
