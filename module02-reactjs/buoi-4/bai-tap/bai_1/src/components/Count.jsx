import React, { useEffect, useState } from 'react';

const totalCount = localStorage.getItem('count');
const initialCount = totalCount ? parseInt(totalCount) : 0;

const Count = () => {
  const [count, setCount] = useState(initialCount);

  const onCountChangeHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);
  return (
    <div>
      <h3>Số lần bạn ấn nút: {count}</h3>
      <button type='button' onClick={onCountChangeHandler}>
        Click
      </button>
    </div>
  );
};

export default Count;
