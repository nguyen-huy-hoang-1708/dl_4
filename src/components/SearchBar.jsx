import React from 'react';
import '../style/SearchBar.scss';
import Option from '../assets/Option.svg';

export default function SearchForm() {
  return (
    <div className="search-form">
      <div className="form-group">
        <label>Tài khoản</label>
        <div className="form-group-info">
          <div className="inf">206582897</div>
          <img src={Option} alt="Option" className="Option" />
        </div>
      </div>

      <div className="form-group">
        <label>Mã chứng khoán</label>
        <div className="form-group-info">
          <div className="inf">VN30FAU2</div>
          <img src={Option} alt="Option" className="Option" />
        </div>
      </div>

      <div className="search-button">
        <div className="search">
            Tìm kiếm
        </div>
      </div>
    </div>
  );
}
