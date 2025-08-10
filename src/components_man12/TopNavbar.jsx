// components_man12/TopNavbar.jsx
import React from 'react';
import style from '../style_man12/TopNavbar.module.scss';
import logo from '../assets/Logo.svg';
import Flag from '../assets/Flag.svg';
import Option from '../assets/Option.svg';
import SignOut from '../assets/SignOut.svg';

export default function TopNavbar({ headerTab, setHeaderTab, activePage, setActivePage }) {
  const goPortfolio = () => { 
    setHeaderTab(0); 
    setActivePage('category'); 
  };

  const goAccount = () => { 
    setHeaderTab(1); 
    setActivePage('account'); 
  };

  return (
    <div className={style.topNavbar}>
      <div className={style.navbarLeft}>
        <div className={style.logoContainer}>
          <img src={logo} alt="Logo" className={style.logo} />
        </div>

        <div className={style.menuTabss}>
          <div>Giao dịch phái sinh</div>
          <div>Chuyển tiền</div>
          <div>Sao kê tiền</div>

          {/* Danh mục tài sản */}
          <div
            className={`${headerTab === 0 ? style.gradients : ''}`}
            onClick={goPortfolio}
            style={{ cursor: 'pointer' }}
          >
            Danh mục tài sản
          </div>

          {/* Thông tin tài khoản */}
          <div
            className={`${headerTab === 1 ? style.gradients : ''}`}
            onClick={goAccount}
            style={{ cursor: 'pointer' }}
          >
            Thông tin tài khoản
          </div>
        </div>
      </div>

      <div className={style.hi}><div>Xin chào, sangdd02</div></div>
      <div className={style.ten}>
        <div>0025458 - Do Duy Sang</div>
        <img src={Option} alt="Option" className={style.OptionIcon} />
      </div>
      <div className={style.Flag}>
        <img src={Flag} alt="Flag" className={style.Flags} />
        <div className={style.vn}>VN</div>
        <img src={Option} alt="Option" className={style.OptionIcon} />
      </div>
      <div className={style.Out}>
        <img src={SignOut} alt="SignOut" className={style.SignOut} />
      </div>
    </div>
  );
}
