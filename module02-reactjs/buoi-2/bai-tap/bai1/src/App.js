import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myName: 'Lê Nguyễn Duy Phương',
      isShowName: false,
    };
  }

  displayName = () => {
    this.setState(prevState => {
      return { ...prevState, isShowName: !prevState.isShowName };
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>
          <span style={{ fontWeight: 'bold' }}>Tên tôi là: </span>
          {this.state.isShowName && this.state.myName}
        </p>
        <button type='button' onClick={this.displayName}>
          Show Name
        </button>
      </div>
    );
  }
}
export default App;
