import React from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const onChangeNameHandler = e => {
    setName(e.target.value);
  };

  const onChangeEmailHandler = e => {
    setEmail(e.target.value);
  };

  const onChangePhoneHandler = e => {
    setPhone(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log({ name, email, phone });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input type='text' value={name} onChange={onChangeNameHandler} />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input type='text' value={email} onChange={onChangeEmailHandler} />
      </div>
      <div>
        <label htmlFor='phone'>Phone:</label>
        <input type='text' value={phone} onChange={onChangePhoneHandler} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
