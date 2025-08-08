import React from 'react';
import style from '../style_man12/SearchBar.module.scss';
import Option from '../assets/Option.svg';

export default function SearchForm() {
  return (
    <div className={style.searchForm}>
      <div className={style.formGroup}>
        <label>Tài khoản</label>
        <div className={style.formGroupInfo}>
          <div className={style.inf}>206582897</div>
          <img src={Option} alt="Option" className={style.Option} />
        </div>
      </div>

      <div className={style.formGroup}>
        <label>Mã chứng khoán</label>
        <div className={style.formGroupInfo}>
          <div className={style.inf}>VN30FAU2</div>
          <img src={Option} alt="Option" className={style.Option} />
        </div>
      </div>

      <div className={style.searchButton}>
        <div className={style.search}>
            Tìm kiếm
        </div>
      </div>
    </div>
  );
}
