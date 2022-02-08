import React, { useState } from 'react';
import SelectFilter from './selectFilter/SelectFilter';
import CardBanner from './CardBanner';

const Main = () => {
  return (
    <div>
      <SelectFilter />
      <CardBanner />
    </div>
  );
};

export default Main;
