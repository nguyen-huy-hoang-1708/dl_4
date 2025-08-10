// App.jsx
import React, { useState } from 'react';
//man11
import TopNavbar from './components_man11/TopNavbar.jsx';     
import SearchBar from './components_man11/SearchBar.jsx';
import Tabs from './components_man11/Tabs.jsx';
import AssetInfo from './components_man11/AssetInfo.jsx';
import OrderTable from './components_man11/OrderTable.jsx';
import Pagination from './components_man11/Pagination.jsx';
import Footer from './components_man11/Footer.jsx';

//man12
import TopNavbar12 from './components_man12/TopNavbar.jsx';     
import SearchBar12 from './components_man12/SearchBar.jsx';
import Tabs12 from './components_man12/Tabs.jsx';
import OrderTable12 from './components_man12/OrderTable.jsx';
import Pagination12 from './components_man12/Pagination.jsx';
import Footer12 from './components_man12/Footer.jsx';

//man13
import TopNavbar13 from './components_man13/TopNavbar.jsx';
import AccountInfoScreen from './components_man13/AccountInfoScreen.jsx'; 
import Footer13 from './components_man13/Footer.jsx';

//man14
import TopNavbar14 from './component_man14/TopNavbar.jsx';
import Footer14 from './component_man14/Footer.jsx';
import ChangePassword from './component_man14/ChangePassword.jsx';

import './index.scss';

function App() {
  const [activeTab, setActiveTab] = useState(0);          // 0: màn 11, 1: màn 12
  const [activePage, setActivePage] = useState('category'); // set ban đầu trang web là ở tab Danh mục tài sản

console.log('Render App:', { activeTab, activePage });

  
  
  // --- Màn 13: Thông tin tài khoản ---
  if (activePage === 'account' && activeTab===0) {
    return (
      <div className="app-container">
        <header>
          <TopNavbar13
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </header>

        <AccountInfoScreen /> {/* render màn 13 */}

        <section className="footer13">
          <Footer13 />
        </section>
      </div>
    );
  }

  //activePage===account && activeTab===1
  // Màn 14: Đổi mật khẩu
  if (activePage === 'account' && activeTab===1) {
    return (
      <div className="app-container">
        <header>
          <TopNavbar14
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </header>

        <Pagination /> {/* render màn 14 */}

        <section className="footer14">
          <Footer14 />
        </section>
      </div>
    );
  }

  // --- activeTab === 0 (màn 11) ---
  // --- Trang info: điều khiển bằng activeTab ---
  if (activePage==='category' && activeTab === 0) {
    return (
      <div className="app-container">
        <header>
          <TopNavbar
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </header>

        <main className="main">
          <div className="title">Quản lý danh mục tài sản</div>

          <section className="search-forms"><SearchBar /></section>

          <section className="tabss">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} /> 
          </section>

          <section className="summary-info"><AssetInfo /></section>
          <section className="orders-table"><OrderTable /></section>
          <section className="pagination"><Pagination /></section>
        </main>

        <section className="footer"><Footer /></section>
      </div>
    );
  }

  // --- activeTab === 1 (màn 12) ---
  //if (activePage==='category' && activeTab === 1) {
  return (
    <div className="app-container-12">
      <header>
        <TopNavbar12
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </header>

      <main className="main">
        <div className="title">Quản lý danh mục tài sản</div>

        <section className="search-forms"><SearchBar12 /></section>
        <section className="tabss"><Tabs12 activeTab={activeTab} setActiveTab={setActiveTab} /></section>
        <section className="orders-table"><OrderTable12 /></section>
        <section className="pagination"><Pagination12 /></section>
      </main>

      <section className="footer12"><Footer12 /></section>
    </div>
  );
}

export default App;
