import React from 'react';

const data = [
  {
    id: 1,
    title: '자동차 시제품 제작',
    client: 'A 고객사',
    due: '2020.12.14',
    count: 2,
    amount: 100,
    method: ['밀링', '선반'],
    material: ['알루미늄'],
    status: '대기중',
  },
  {
    id: 2,
    title: '비행기 시제품 제작',
    client: 'B 고객사',
    due: '2020.12.13',
    count: 2,
    amount: 100,
    method: ['선반'],
    material: ['탄소강', '강철'],
    status: '상담중',
  },
  {
    id: 3,
    title: '기차 시제품 제작',
    client: 'C 고객사',
    due: '2020.12.12',
    count: 1,
    amount: 20,
    method: ['선반'],
    material: ['구리'],
    status: '대기중',
  },
  {
    id: 4,
    title: '자전거 시제품 제작',
    client: 'D 고객사',
    due: '2020.12.11',
    count: 1,
    amount: 45,
    method: ['선반'],
    material: ['스테인리스강'],
    status: '대기중',
  },
  {
    id: 5,
    title: '헬리콥터 시제품 제작',
    client: 'E 업체',
    due: '2020.12.10',
    count: 2,
    amount: 2,
    method: ['밀링'],
    material: ['알루미늄', '탄소강'],
    status: '대기중',
  },
  {
    id: 6,
    title: '전동 킥보드 시제품 제작',
    client: 'F 업체',
    due: '2020.12.09',
    docs: 1,
    amount: 20,
    method: ['밀링'],
    material: ['강철'],
    status: '대기중',
  },
];

const CardBanner = () => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.method}</div>
            <div>{item.material}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CardBanner;
