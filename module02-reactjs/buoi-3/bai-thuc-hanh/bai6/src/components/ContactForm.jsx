import React, { Component } from 'react';

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      error: null,
      success: false,
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, message } = this.state;
    if (!name || !email || !message) {
      this.setState({
        error: 'Họ tên, email và nội dung tin nhắn không được bỏ trống ',
      });
      return;
    }
    this.setState({ success: true });
  };
  render() {
    const { name, email, message, error, success } = this.state;
    return (
      <div>
        {!success ? (
          <form onSubmit={this.handleSubmit}>
            {error && <div style={{ color: 'red' }}> {error}</div>}
            <div>
              <label htmlFor='name'>Họ tên: </label>
              <input
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              {error && <div style={{ color: 'red' }}> {error}</div>}
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                value={email}
                id='email'
                onChange={this.handleChange}
              />
            </div>
            <div>
              {error && <div style={{ color: 'red' }}> {error}</div>}
              <label htmlFor='message'>Nội dung tin nhắn: </label>
              <textarea
                id='message'
                name='message'
                value={message}
                onChange={this.handleChange}
              />
            </div>
            <button type='submit'>Sumit</button>
          </form>
        ) : (
          <div style={{ color: 'green' }}>Tin nhắn đã được gửi thành công </div>
        )}
      </div>
    );
  }
}
