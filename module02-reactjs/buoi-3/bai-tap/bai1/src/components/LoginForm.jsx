import React, { Component } from 'react';
import TextError from './TextError';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      usernameError: null,
      passwordError: null,
    };
  }

  componentDidMount() {
    console.log('form 1 DID MOUNT');
  }

  onSubmitHandler = e => {
    e.preventDefault();

    const { username, password } = this.state;

    if (!username) {
      this.setState({ usernameError: 'Username không được để trống ' });
    }
    if (!password) {
      this.setState({ passwordError: 'Mật khẩu không được để trống' });
    }
    if (username) {
      this.setState({ usernameError: null });
    }
    if (password) {
      this.setState({ passwordError: null });
    }

    if (!username || !password) {
      return;
    }

    console.log('Username: ' + username + ',Password: ' + password);
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { usernameError, passwordError } = this.state;
    return (
      <div className='form-panel one'>
        <div className='form-header'>
          <h1>Account Login</h1>
        </div>
        <div className='form-content'>
          <form onSubmit={this.onSubmitHandler}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                name='username'
                onChange={this.onChangeHandler}
              />
              {usernameError && <TextError>{usernameError}</TextError>}
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                onChange={this.onChangeHandler}
              />
              {passwordError && <TextError>{passwordError}</TextError>}
            </div>
            <div className='form-group'>
              <label className='form-remember'>
                <input type='checkbox' />
                Remember Me{' '}
              </label>
              <a className='form-recovery' href='#'>
                Forgot Password?
              </a>
            </div>
            <div className='form-group'>
              <button type='submit'>Log In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
