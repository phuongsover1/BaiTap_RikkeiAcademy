import { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default App;
