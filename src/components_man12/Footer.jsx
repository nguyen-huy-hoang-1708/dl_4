import React from 'react';
import style from '../style_man12/Footer.module.scss';
import User from '../assets/User.svg'; 

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerLeft}>
        <span className={style.statusLabel}>Trạng thái</span>
        <img src={User} alt="User" className={style.User} />
        <span className={style.statusValue}>connected</span>
      </div>
      <div className={style.footerRight}>
        Navisoft
      </div>
    </footer>
  );
}
