import React, { useState } from 'react';

const CountText = () => {
  const [text, setText] = useState('');

  const onChangeTextHandler = e => {
    setText(e.target.value);
  };
  return (
    <div>
      <textarea rows='10' cols='30' onChange={onChangeTextHandler}></textarea>
      <p>
        <b>Tổng số ký tự: {text.length}</b>
      </p>
    </div>
  );
};

export default CountText;
