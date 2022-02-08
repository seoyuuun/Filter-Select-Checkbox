import React, { useState } from 'react';

const material = [
  { id: 0, name: '알루미늄' },
  { id: 1, name: '탄소강' },
  { id: 2, name: '구리' },
  { id: 3, name: '합금강' },
  { id: 4, name: '강철' },
];

const CheckMaterial = () => {
  const [checkedMaterial, SetCheckedMaterial] = useState([]);

  const handleCheckMaterial = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      SetCheckedMaterial([...checkedMaterial, name]);
    } else {
      SetCheckedMaterial(checkedMaterial.filter((option) => option !== name));
    }
  };

  console.log('material', checkedMaterial);

  return (
    <div>
      <div>
        <div>재료</div>
        <span>({checkedMaterial.length})</span>
      </div>
      <ul name={checkedMaterial}>
        {material.map((option) => {
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
  );
};

export default CheckMaterial;
