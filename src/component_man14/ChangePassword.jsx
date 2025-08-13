import React, { useState } from 'react';
import style from '../style_man14/ChangePassword.module.scss';
import Eye from '../assets/Eye.svg';
import checkIcon from '../assets/CheckCircle.svg';

export default function ChangePassword({activeTab, setActiveTab}) {

  const [show1, setShow1] = useState(false);
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
        <div className={style.card}>
        {/* Mật khẩu hiện tại */}
        <div className={style.divOne}>
            <div className={style.span}>Mật khẩu hiện tại</div>
          <div className={style.inputWrap}>
          <input className={style.holder}
            type={show1 ? 'text' : 'password'}
            placeholder="Nhập..."
            className={style.input}
          />
          <button
            type="button"
            className={style.eyeBtn}
            onClick={() => setShow1(v => !v)}
          >
            <img src={Eye} alt="" />
          </button>
          </div>
          <div className={style.forgot}><a href="#!">Quên mật khẩu?</a></div>
        </div>
        {/* Mật khẩu mới */}
        <div className={style.divTwo}>
            <div className={style.span}>Mật khẩu mới</div>
          <div className={style.inputWrap}>
          <input className={style.holder}
            type={show1 ? 'text' : 'password'}
            placeholder="Nhập..."
            className={style.input}
          />
          <button
            type="button"
            className={style.eyeBtn}
            onClick={() => setShow1(v => !v)}
          >
            <img src={Eye} alt="" />
          </button>
          </div>
        </div>

       {/* Checklist */}
        <div className={style.checklist}>
          <div className={style.note}><img src={checkIcon}  alt="" className={style.checkIcon} /> Không trùng với 3 mật khẩu gần nhất.</div>
          <div className={style.note}><img src={checkIcon}  alt="" className={style.checkIcon} /> Bao gồm từ 6 - 32 ký tự.</div>
          <div className={style.note}><img src={checkIcon}  alt="" className={style.checkIcon} /> Có chứa ký tự chữ hoa và chữ thường.</div>
          <div className={style.note}><img src={checkIcon}  alt="" className={style.checkIcon} /> Có chứa ký tự số.</div>
          <div className={style.note}><img src={checkIcon}  alt="" className={style.checkIcon} /> Có ký tự đặc biệt.</div>
        </div>

        {/* Xác nhận mật khẩu mới */}
        <div className={style.divThree}>
            <div className={style.span}>Xác nhận mật khẩu mới</div>
          <div className={style.inputWrap}>
          <input className={style.holder}
            type={show3 ? 'text' : 'password'}
            placeholder="Nhập..."
            className={style.input}
          />
          <button
            type="button"
            className={style.eyeBtn}
            onClick={() => setShow3(v => !v)}
          >
            <img src={Eye} alt="Eye" className={style.Eye} />
          </button>
          </div>
        </div>
      </div>
      <div className={style.actions}>
          <button type="button" className={`${style.btn} ${style.btnOutline}`}>Hủy</button>
          <button type="button" className={`${style.btn} ${style.btnPrimary}`}>Đổi mật khẩu</button>
        </div>
      </div>
    </div>
  );
}


