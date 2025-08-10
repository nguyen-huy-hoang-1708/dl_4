import React, { useState } from 'react';
import style from '../style_man14/ChangePassword.module.scss';
import Eye from '../assets/Eye.svg';

export default function ChangePassword({activeTab, setActiveTab}) {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  //const [activeTab, setActiveTab] = useState(0);          // 0: màn 13, 1: màn 14

  return (
    <div className={style.screen}>
      <div className={style.wrapper}>
        {/* Tabs */}
        <div className={style.tabs}>
          <div
            className={`${style.info} ${activeTab === 0 ? style.active : ''}`}
            onClick={() => setActiveTab(0)}
          >
            Thông tin chung
          </div>
          <div
            className={`${style.password} ${activeTab === 1 ? style.active : ''}`}
            onClick={() =>  setActiveTab(1) }
          >
            Đổi mật khẩu
          </div>
        </div>

        {/* Mô tả */}
        <div className={style.desc}>
        Phương thức xác thực nhanh bằng vân tay/khuôn mặt sẽ bị vô hiệu hoá sau khi đổi mật khẩu.
        Quý khách vui lòng thiết lập lại trên ứng dụng.     
        </div>
        <section className={style.card}>
        {/* Mật khẩu hiện tại */}
        <label className={style.label}>Mật khẩu hiện tại</label>
        <div className={style.inputWrap}>
          <input
            type={show1 ? 'text' : 'password'}
            placeholder="Nhập..."
            className={style.input}
          />
          <button
            type="button"
            className={style.eyeBtn}
            onClick={() => setShow1(v => !v)}
            aria-label="toggle password"
          >
            {Eye ? <img src={Eye} alt="" /> : '👁'}
          </button>
        </div>
        <div className={style.forgot}><a href="#!">Quên mật khẩu?</a></div>

        {/* Mật khẩu mới */}
        <label className={style.label}>Mật khẩu mới</label>
        <div className={style.inputWrap}>
          <input
            type={show2 ? 'text' : 'password'}
            placeholder="Nhập..."
            className={style.input}
          />
          <button
            type="button"
            className={style.eyeBtn}
            onClick={() => setShow2(v => !v)}
            aria-label="toggle password"
          >
            {Eye ? <img src={Eye} alt="" /> : '👁'}
          </button>
        </div>

        {/* Checklist */}
        <ul className={style.rules}>
          <li>Không trùng với 3 mật khẩu gần nhất.</li>
          <li>Bao gồm từ 6 - 32 ký tự.</li>
          <li>Có chứa ký tự chữ hoa và chữ thường.</li>
          <li>Có chứa ký tự số.</li>
          <li>Có ký tự đặc biệt.</li>
        </ul>

        {/* Xác nhận mật khẩu mới */}
        <label className={style.label}>Xác nhận mật khẩu mới</label>
        <div className={style.inputWrap}>
          <input
            type={show3 ? 'text' : 'password'}
            placeholder="Nhập..."
            className={style.input}
          />
          <button
            type="button"
            className={style.eyeBtn}
            onClick={() => setShow3(v => !v)}
            aria-label="toggle password"
          >
            {Eye ? <img src={Eye} alt="" /> : '👁'}
          </button>
        </div>

        {/* Actions */}
        <div className={style.actions}>
          <button type="button" className={`${style.btn} ${style.btnGhost}`}>Hủy</button>
          <button type="button" className={`${style.btn} ${style.btnPrimary}`}>Đổi mật khẩu</button>
        </div>
      </section>
      </div>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div className={style.field}>
      <div className={style.label}>{label}</div>
      <div className={style.value}>{value}</div>
    </div>
  );
}
