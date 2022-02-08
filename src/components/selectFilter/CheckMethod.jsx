import React, { useState } from 'react';

const METHODS = [
  { id: 0, name: '밀링' },
  { id: 1, name: '선방' },
];

const CheckMethod = () => {
  const [checkedMethod, SetCheckedMethod] = useState([]);

  const handleCheckMethod = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      SetCheckedMethod([...checkedMethod, name]);
    } else {
      SetCheckedMethod(checkedMethod.filter((option) => option !== name));
    }
  };

  console.log('method', checkedMethod);

  return (
    <div>
      <div>
        <div>가공방식</div>
        <span>({checkedMethod.length})</span>
      </div>
      <ul>
        {METHODS.map((option) => {
          return (
            <li key={option.id}>
              <input
                type="checkbox"
                name={option.name}
                onChange={handleCheckMethod}
                checked={checkedMethod.includes(option.name)}
              />
              {option.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckMethod;
