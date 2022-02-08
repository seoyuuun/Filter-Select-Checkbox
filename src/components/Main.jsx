import React, { useState } from 'react';
import CheckMethod from './selectFilter/CheckMethod';
import CheckMaterial from './selectFilter/CheckMaterial';
import CardBanner from './CardBanner';

const Main = () => {
  const [isChecked, SetIsChecked] = useState(false); //체크 여부
  const [checkedOption, SetCheckedOption] = useState(''); //체크된 요소

  const handleChecked = () => {
    SetIsChecked(!isChecked);
  };

  const resetSelectOption = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <CheckMethod />
      <CheckMaterial />
      <CardBanner />
    </div>
  );
};

export default Main;
