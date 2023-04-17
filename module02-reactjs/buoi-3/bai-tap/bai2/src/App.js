import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.defaultInput = 'rgba(10, 180, 180, 1)';
    this.alertRedInput = '#8C1010';
    this.state = {
      username: '',
      password: '',
      usernameErrorMessage: '',
      passwordErrorMessage: '',
      usernameInputStyle: { borderColor: this.defaultInput },
      passwordInputStyle: { borderColor: this.alertRedInput },
    };
  }
  usernameValidation = usernameInputEvent => {
    const usernameInputValue = usernameInputEvent.target.value;
    this.setState({ username: usernameInputValue, usernameErrorMessage: '' });
    // var username = document.getElementById('username');
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInputValue)) {
      issueArr.push('No special characters!');
      this.setState({
        usernameErrorMessage: 'No special characters',
      });
    }
    if (issueArr.length > 0) {
      // username.setCustomValidity(issueArr);
      // username.style.borderColor = alertRedInput;
      this.setState({
        usernameInputStyle: { borderColor: this.alertRedInput },
      });
    } else {
      // username.setCustomValidity('');
      // username.style.borderColor = defaultInput;
      this.setState({
        usernameErrorMessage: '',
        usernameInputStyle: { borderColor: this.defaultInput },
      });
    }
    console.log('On username change');
  };

  passwordValidation = passwordInputEvent => {
    const passwordInputValue = passwordInputEvent.target.value;
    // var password = document.getElementById("password");
    this.setState({ password: passwordInputValue, passwordErrorMessage: '' });
    var issueArr = [];
    if (!/^.{7,15}$/.test(passwordInputValue)) {
      issueArr.push('Password must be between 7-15 characters.');
      this.setState({
        passwordErrorMessage:
          this.state.usernameErrorMessage +
          '\nPassword must be between 7-15 characters',
      });
    }
    if (!/\d/.test(passwordInputValue)) {
      issueArr.push('Must contain at least one number.');
      this.setState({
        passwordErrorMessage:
          this.state.usernameErrorMessage +
          '\nMust contain at least one number.',
      });
    }
    if (!/[a-z]/.test(passwordInputValue)) {
      issueArr.push('Must contain a lowercase letter.');
      this.setState({
        passwordErrorMessage:
          this.state.usernameErrorMessage +
          '\nMust contain a lowercase letter.',
      });
    }
    if (!/[A-Z]/.test(passwordInputValue)) {
      issueArr.push('Must contain an uppercase letter.');
      this.setState({
        passwordErrorMessage:
          this.state.usernameErrorMessage +
          '\nMust contain an uppercase letter.',
      });
    }
    if (issueArr.length > 0) {
      // password.setCustomValidity(issueArr.join('\n'));
      // password.style.borderColor = alertRedInput;
      this.setState({
        passwordInputStyle: { borderColor: this.alertRedInput },
      });
    } else {
      this.setState({
        passwordErrorMessage: '',
        passwordInputStyle: { borderColor: this.defaultInput },
      });
    }
    console.log('on password input change');
  };
  render() {
    const {
      usernameInputStyle,
      usernameErrorMessage,
      passwordInputStyle,
      passwordErrorMessage,
    } = this.state;
    return (
      <div>
        <div className='signupSection'>
          <div className='info'>
            <h2>Welcome to Rikkei Academy</h2>
            <i className='icon ion-ios-ionic-outline' aria-hidden='true' />
            <p>The Future Is Here</p>
          </div>
          <form
            method='POST'
            className='signupForm'
            name='signupform'
            onSubmit={e => {
              e.preventDefault();
              console.log(this.state);
            }}
          >
            <h2>Sign Up</h2>
            <ul className='noBullet'>
              <li>
                <label htmlFor='username' />
                <input
                  type='text'
                  className='inputFields'
                  id='username'
                  name='username'
                  placeholder='Username'
                  defaultValue=''
                  style={usernameInputStyle}
                  onInput={this.usernameValidation}
                />
                {usernameErrorMessage && <p>{usernameErrorMessage}</p>}
              </li>
              <li>
                <label htmlFor='password' />
                <input
                  type='password'
                  className='inputFields'
                  id='password'
                  name='password'
                  placeholder='Password'
                  defaultValue=''
                  onInput={this.passwordValidation}
                  style={passwordInputStyle}
                  required=''
                />
                {passwordErrorMessage && <p>{passwordErrorMessage}</p>}
              </li>
              <li>
                <label htmlFor='email' />
                <input
                  type='email'
                  className='inputFields'
                  id='email'
                  name='email'
                  placeholder='Email'
                  defaultValue=''
                />
              </li>
              <li id='center-btn'>
                <input
                  type='submit'
                  id='join-btn'
                  name='join'
                  alt='Join'
                  defaultValue='Join'
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
