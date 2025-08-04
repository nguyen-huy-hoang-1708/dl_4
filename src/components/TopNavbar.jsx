import React from 'react';
import '../style/TopNavbar.scss';
import logo from '../assets/Logo.svg';
import Flag from '../assets/Flag.svg';
import Option from '../assets/Option.svg';
import SignOut from '../assets/SignOut.svg';

export default function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="menu-tabss">
          <div>Giao dịch phái sinh</div>
          <div>Chuyển tiền</div>
          <div>Sao kê tiền</div>
          <div className="gradients">Danh mục tài sản</div>
          <div>Thông tin tài khoản</div>
        </div>
      </div>
      <div className="hi">
        <div>Xin chào, sangdd02</div>
      </div>
      <div className="ten">
        <div>0025458 - Do Duy Sang</div>
        <img src={Option} alt="Option" className="Option-icon" />
      </div>
      
      <div className="Flag">
        <img src={Flag} alt="Flag" className="Flags" />
        <div className="vn">VN</div>
        <img src={Option} alt="Option" className="Option-icon" />
      </div>
      <div className="Out">
        <img src={SignOut} alt="SignOut" className="SignOut" />
      </div>
    </div>
  );
}
