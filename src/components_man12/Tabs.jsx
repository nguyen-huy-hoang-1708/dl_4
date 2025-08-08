
import React from 'react';
import style from '../style_man12/Tabs.module.scss';

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className={style.tabs}>
      <div
        className={`${style.tabsNameOne} ${activeTab === 0 ? 'active' : ''}`}
        onClick={() => setActiveTab(0)}
      >
        <div className={style.nameOne}>Tài sản và sức mua</div>
      </div>

      <div
        className={`${style.tabsNameTwo} ${activeTab === 1 ? 'active' : ''}`}
        onClick={() => setActiveTab(1)}
      >
        <div className={style.nameTwo}>Số dư chứng khoán</div>
      </div>
    </div>
  );
}

