import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const onCelsiusChangeHandler = e => {
    e.preventDefault();
    setCelsius(e.target.value);
    setFahrenheit(((e.target.value * 9) / 5 + 32).toFixed(2));
  };

  const onFahrenheitChangeHandler = e => {
    e.preventDefault();
    setFahrenheit(e.target.value);

    setCelsius((((e.target.value - 32) * 5) / 9).toFixed(2));
  };
  return (
    <div>
      <div>
        <label htmlFor='celsius'>Celsius:</label>
        <input
          type='number'
          value={celsius}
          onChange={onCelsiusChangeHandler}
        />
      </div>
      <div>
        <label htmlFor='fahrenheit'>Fahrenheit:</label>
        <input
          type='number'
          value={fahrenheit}
          onChange={onFahrenheitChangeHandler}
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;
