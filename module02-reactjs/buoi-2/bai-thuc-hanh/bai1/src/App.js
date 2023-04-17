import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold' }}>{this.state.counter}</p>
        <button
          type='button'
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default App;
