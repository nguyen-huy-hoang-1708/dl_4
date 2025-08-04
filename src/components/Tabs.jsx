import React from 'react';
import '../style/Tabs.scss';

export default function Tabs() {
  return (
    <div className="tabs">
      <div className="tabs-name-one">
        <div className="name-one">Tài sản và sức mua</div>
      </div>
      <div className="tabs-name-two">
        <div className="name-two">Số dư chứng khoán</div>
      </div>
    </div>
  );
}
