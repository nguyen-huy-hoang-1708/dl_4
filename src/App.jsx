import React, { useState } from 'react';

import TopNavbar from './components_man11/TopNavbar.jsx';
import SearchBar from './components_man11/SearchBar.jsx';
import Tabs from './components_man11/Tabs.jsx';
import AssetInfo from './components_man11/AssetInfo.jsx';
import OrderTable from './components_man11/OrderTable.jsx';
import Pagination from './components_man11/Pagination.jsx';
import Footer from './components_man11/Footer.jsx';

import OrderTable12 from './components_man12/OrderTable.jsx';
import TopNavbar12 from './components_man12/TopNavbar.jsx';
import SearchBar12 from './components_man12/SearchBar.jsx';
import Tabs12 from './components_man12/Tabs.jsx';
import Pagination12 from './components_man12/Pagination.jsx';
import Footer12 from './components_man12/Footer.jsx';

import './index.scss';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  if (activeTab === 0) {
    return (
      <div className="app-container">
        <header>
          <TopNavbar />
        </header>

        <main className="main">
          <div className="title">Quản lý danh mục tài sản</div>

          <section className="search-forms">
            <SearchBar />
          </section>

          <section className="tabss">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </section>

          <section className="summary-info">
            <AssetInfo />
          </section>

          <section className="orders-table">
            <OrderTable />
          </section>

          <section className="pagination">
            <Pagination />
          </section>
        </main>

        <section className="footer">
          <Footer />
        </section>
      </div>
    );
  }

  // activeTab === 1
  return (
    <div className="app-container-12">
      <header>
        <TopNavbar12 />
      </header>

      <main className="main">
        <div className="title">Quản lý danh mục tài sản</div>

        <section className="search-forms">
          <SearchBar12 />
        </section>

        <section className="tabss">
          <Tabs12 activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>

        <section className="orders-table">
          <OrderTable12 />
        </section>

        <section className="pagination">
          <Pagination12 />
        </section>
      </main>

      <section className="footer">
        <Footer12 />
      </section>
    </div>
  );
}

export default App;
