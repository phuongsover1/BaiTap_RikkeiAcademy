import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isShowModal: false,
    };
  }

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };
  render() {
    return (
      <div className='App'>
        <button type='button' onClick={this.showModal}>
          Open Modal
        </button>
        {this.state.isShowModal && (
          <div>
            <div className='backdrop'></div>
            <div className='modal'>
              <div className='modal-dialog'>
                <div className='modal-content'>Xin Chao Moi Nguoi</div>
                <div className='modal-footer'>
                  <button type='button' onClick={this.closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
