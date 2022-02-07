import React, { useState } from 'react';

export const metarialData = [
  {
    id: 0,
    name: '알루미늄',
  },
  {
    id: 1,
    name: '탄소강',
  },
  {
    id: 2,
    name: '구리',
  },
  {
    id: 3,
    name: '합금강',
  },
  {
    id: 4,
    name: '강철',
  },
];

const CheckMetarial = () => {
  const [isChecked, setIsChecked] = useState(false); //체크 여부
  const [checkedItems, setCheckedItems] = useState(new Set()); //체크된 요소들

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.value, target.checked);
  };

  const checkedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      //체크 되었을때
      checkedItems.add(id); //체크시 삽입
      setCheckedItems(checkedItems); //체크 요소 넣어주기
    } else if (!isChecked && checkedItems.has(id)) {
      //클릭 2번시
      checkedItems.delete(id); //체크 두번시 삭제
      setCheckedItems(checkedItems);
    }
    return checkedItems;
  };

  return (
    <div>
      {metarialData.map((item) => (
        <label key={item.id} className="innerCheckbox">
          <input
            type="checkbox"
            value={item.name}
            onChange={(e) => checkHandler(e)}
          />
          <div>{item.name}</div>
        </label>
      ))}
    </div>
  );
};

export default CheckMetarial;
