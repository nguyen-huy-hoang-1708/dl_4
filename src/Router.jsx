import React from 'react';
//import './Router.scss';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Tài sản và sức mua', 'Số dư chứng khoán'];

  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab-item ${activeTab === index ? 'active' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
