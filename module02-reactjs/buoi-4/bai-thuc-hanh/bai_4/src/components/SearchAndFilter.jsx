import React, { useState } from 'react';

const data = [
  { name: 'John', age: 25 },
  { name: 'Mary', age: 30 },
  { name: 'Peter', age: 35 },
  { name: 'Jane', age: 40 },
];
const SearchAndFilter = () => {
  const [filter, setFilter] = useState('');

  const onFilterChangeHandler = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredData = data.filter(
    personObj => personObj.name.toLowerCase().indexOf(filter) !== -1
  );
  return (
    <div>
      <input type='text' value={filter} onChange={onFilterChangeHandler} />
      <ul>
        {filteredData.map((personObj, index) => (
          <li key={index}>
            {personObj.name} - {personObj.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAndFilter;
