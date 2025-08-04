import React from 'react';
import '../style/Footer.scss';
import User from '../assets/User.svg'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="status-label">Trạng thái</span>
        <img src={User} alt="User" className="User" />
        <span className="status-value">connected</span>
      </div>
      <div className="footer-right">
        Navisoft
      </div>
    </footer>
  );
}
