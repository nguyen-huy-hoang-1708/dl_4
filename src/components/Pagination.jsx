import React from 'react';
import '../style/Pagination.scss';
import Option from '../assets/Option.svg';

export default function Pagination() {
  return (
    <div className="pagination-container">
      <div className="pagination-left">
          <div className="number">
            <div className="number-left">50</div>
            <img src={Option} alt="op" className="op" />
          </div>
        <div className="number-right">/ 0 Bản ghi</div>
      </div>

      <div className="pagination-right">
        <div className="pagination-btn">{'<<'}</div>
        <div className="pagination-btn">{'<'}</div>
          <div className="number-child">1</div>
        <div className="pagination-btn">{'>'}</div>
        <div className="pagination-btn">{'>>'}</div>
      </div>
    </div>
  );
}
