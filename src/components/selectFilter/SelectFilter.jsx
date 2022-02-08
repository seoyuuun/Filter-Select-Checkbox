import React, { useState } from 'react';

const METHODS = [
  { id: 0, name: '밀링' },
  { id: 1, name: '선방' },
];

const MATERIALS = [
  { id: 0, name: '알루미늄' },
  { id: 1, name: '탄소강' },
  { id: 2, name: '구리' },
  { id: 3, name: '합금강' },
  { id: 4, name: '강철' },
];

const SelectFilter = () => {
  const [checkedMethod, SetCheckedMethod] = useState([]);
  const [checkedMaterial, SetCheckedMaterial] = useState([]);

  const handleCheckMethod = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      SetCheckedMethod([...checkedMethod, name]);
    } else {
      SetCheckedMethod(checkedMethod.filter((option) => option !== name));
    }
  };

  const handleCheckMaterial = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      SetCheckedMaterial([...checkedMaterial, name]);
    } else {
      SetCheckedMaterial(checkedMaterial.filter((option) => option !== name));
    }
  };

  console.log('method', checkedMethod);
  console.log('material', checkedMaterial);

  return (
    <>
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
      <div>
        <div>
          <div>재료</div>
          <span>({checkedMaterial.length})</span>
        </div>
        <ul name={checkedMaterial}>
          {MATERIALS.map((option) => {
            return (
              <li key={option.id}>
                <input
                  type="checkbox"
                  name={option.name}
                  onChange={handleCheckMaterial}
                  checked={checkedMaterial.includes(option.name)}
                />
                {option.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SelectFilter;
