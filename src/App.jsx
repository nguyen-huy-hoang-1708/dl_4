import React from 'react';
import TopNavbar from './components/TopNavbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import Tabs from './components/Tabs.jsx';
import AssetInfo from './components/AssetInfo.jsx';
import OrderTable from './components/OrderTable.jsx';
import Pagination from './components/Pagination.jsx';
import Footer from './components/Footer.jsx';
import './index.scss';

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <header>
        <TopNavbar />
      </header>

      <main className="main">
        <div className="title">Quản lý danh mục tài sản</div>

        <section className="search-forms">
            <SearchBar />
        </section>

          <section className="tabss">
            <Tabs />
          </section>

        <section className="summary-info">
            <AssetInfo />
        </section>

        {/* Orders Table */}
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

export default App;
