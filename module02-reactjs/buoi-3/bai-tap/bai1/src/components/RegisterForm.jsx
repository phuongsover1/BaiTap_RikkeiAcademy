import React, { Component } from 'react';
import TextError from './TextError';

export default class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      cpassword: '',
      email: '',
      usernameError: null,
      passwordError: null,
      cPasswordError: null,
      emailError: null,
    };
  }
  componentDidMount() {
    console.log('Form 2 DID MOUNT');
  }
  onSubmitHandler = e => {
    e.preventDefault();
    console.log('submit');

    const { username, password, cpassword: cpassword, email } = this.state;

    if (!username) {
      this.setState({ usernameError: 'Username không được để trống ' });
    }
    if (!password) {
      this.setState({ passwordError: 'Mật khẩu không được để trống' });
    }

    if (!cpassword) {
      this.setState({
        cPasswordError: 'Vui lòng nhập lại mật khẩu giống như trên ',
      });
    }
    if (!email) {
      this.setState({ emailError: 'Email không được để trống' });
    }

    if (username && username.trim().length < 3) {
      this.setState({ usernameError: 'Username phải chứa ít nhất 3 kí tự' });
    } else {
      this.setState({ usernameError: null });
    }
    if (password && password.trim().length < 3) {
      this.setState({ passwordError: 'Password phải chứa ít nhất 3 kí tự' });
    } else {
      this.setState({ passwordError: null });
    }

    if (cpassword && cpassword !== password) {
      this.setState({
        cPasswordError: 'Mật khẩu đã nhập không trùng với mật khẩu ở trên',
      });
    } else {
      this.setState({ cPasswordError: null });
    }
    if (email && email.trim().includes('@')) {
      this.setState({ emailError: 'Email đã nhập không đúng định dạng' });
    } else {
      this.setState({ emailError: null });
    }

    if (!username || !password || !cpassword || !email) {
      return;
    }

    console.log(
      'Username: ' +
        username +
        ',Password: ' +
        password +
        ',cPassword: ' +
        cpassword +
        ',Email: ' +
        email
    );
  };

  onChangeHandler = e => {
    console.log('changeHandler');
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { usernameError, passwordError, cPasswordError, emailError } =
      this.state;
    return (
      <div className='form-panel two'>
        <div className='form-header'>
          <h1>Register Account</h1>
        </div>
        <div className='form-content'>
          <form
            id='1'
            onSubmit={e => {
              e.preventDefault();
              console.log('onsubmit');
            }}
          >
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
              <label htmlFor='cpassword'>Confirm Password</label>
              <input
                type='password'
                id='cpassword'
                name='cpassword'
                onChange={this.onChangeHandler}
              />
              {cPasswordError & <TextError>{cPasswordError}</TextError>}
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                id='email'
                name='email'
                onChange={this.onChangeHandler}
              />
              {emailError && <TextError>{emailError}</TextError>}
            </div>
            <div className='form-group'>
              <button type='submit'>register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
