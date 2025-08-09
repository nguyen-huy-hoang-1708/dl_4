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
import './index.scss';

function App() {
  const [activeTab, setActiveTab] = useState(0);          // 0: màn 11, 1: màn 12
  const [headerTab, setHeaderTab] = useState(0);          // 0: DMTS, 1: TTTK (highlight header)
  const [activePage, setActivePage] = useState('portfolio'); // 'portfolio' | 'account'

  // --- Màn 13: Thông tin tài khoản ---
  if (activePage === 'account') {
    return (
      <div className="app-container">
        <header>
          <TopNavbar13
            headerTab={headerTab}
            setHeaderTab={setHeaderTab}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </header>

        <AccountInfoScreen /> {/* render màn 13 */}

        <section className="footer">
          <Footer12 />
        </section>
      </div>
    );
  }

  // --- Trang portfolio: điều khiển bằng activeTab ---
  if (activeTab === 0) {
    return (
      <div className="app-container">
        <header>
          <TopNavbar
            headerTab={headerTab}
            setHeaderTab={setHeaderTab}
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
  return (
    <div className="app-container-12">
      <header>
        <TopNavbar12
          headerTab={headerTab}
          setHeaderTab={setHeaderTab}
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

      <section className="footer"><Footer12 /></section>
    </div>
  );
}

export default App;
