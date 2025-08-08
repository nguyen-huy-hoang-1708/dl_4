import React from 'react';
import style from '../style_man11/Pagination.module.scss';
import Option from '../assets/Option.svg';

export default function Pagination() {
  return (
    <div className={style.paginationContainer}>
      <div className={style.paginationLeft}>
          <div className={style.number}>
            <div className={style.numberLeft}>50</div>
            <img src={Option} alt="op" className={style.op} />
          </div>
        <div className={style.numberRight}>/ 0 Bản ghi</div>
      </div>

      <div className={style.paginationRight}>
        <div className={style.paginationBtn}>{'<<'}</div>
        <div className={style.paginationBtn}>{'<'}</div>
          <div className={style.numberChild}>1</div>
        <div className={style.paginationBtn}>{'>'}</div>
        <div className={style.paginationBtn}>{'>>'}</div>
      </div>
    </div>
  );
}
