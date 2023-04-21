import React, { useState } from 'react';

const ShippingCalculator = () => {
  const [weight, setWeight] = useState('');
  const [shippingMethod, setShippingMethod] = useState('ground');
  const [shippingCost, setShippingCost] = useState(0);

  const onWeightChangeHandler = e => {
    setWeight(e.target.value);
  };

  const onShippingMethodChange = e => {
    setShippingMethod(e.target.value);
  };

  const calculateShippingCost = () => {
    let rate = 0;
    switch (shippingMethod) {
      case 'ground':
        if (weight <= 2) {
          rate = 1.5;
        } else if (weight <= 6) rate = 3;
        else if (weight <= 10) rate = 4;
        else rate = 4.75;
        break;

      case 'priority':
        if (weight <= 2) rate = 3.5;
        else if (weight <= 6) rate = 4;
        else if (weight <= 10) rate = 4.5;
        else rate = 5;
    }
    setShippingCost(rate * weight);
  };
  return (
    <div>
      <div>
        <label htmlFor='weight'>Weight:</label>
        <input type='number' value={weight} onChange={onWeightChangeHandler} />
      </div>

      <div>
        <label htmlFor='shipping-method'>Shipping Method:</label>
        <select
          id='shipping-method'
          value={shippingMethod}
          onChange={onShippingMethodChange}
        >
          <option value='ground'>Ground</option>
          <option value='priority'>Priority</option>
        </select>
      </div>
      <button type='button' onClick={calculateShippingCost}>
        Calculate Shipping Cost
      </button>
      <div>
        <label htmlFor='shipping-cost'>Shipping Cost:</label>
        <span>{`$${shippingCost.toFixed(2)}`}</span>
      </div>
    </div>
  );
};

export default ShippingCalculator;
