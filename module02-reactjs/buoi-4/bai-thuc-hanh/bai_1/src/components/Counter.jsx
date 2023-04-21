import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h3>Count: {count}</h3>
      <button
        type='button'
        onClick={incrementHandler}
        style={{ marginRight: '2rem' }}
      >
        Increment
      </button>
      <button type='button' onClick={decrementHandler}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
