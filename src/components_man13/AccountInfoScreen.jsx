import React, { useState } from 'react';
import style from '../style_man13/AccountInfoScreen.module.scss';

export default function AccountInfoScreen({activeTab, setActiveTab}) {

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
          Các thông tin liên lạc được sử dụng để gửi thư, chuyển phát hay gọi điện/fax liên lạc mỗi khi cần.
        </div>

        {/* Card */}
        <section className={style.card}>
          <div className={style.grid}>
            <Field label="Tài khoản" value="123456789" />
            <Field label="Tên khách hàng" value="Lê Thị Cấm" />
            <Field label="Số CCCD/Hộ chiếu" value="001036895923" />
            <Field label="Ngày cấp" value="15/08/2017" />
            <Field label="Nơi cấp" value="Cục CS QLHC về TTXH" />
            <Field label="Địa chỉ" value="123 Nguyễn Trãi, Quận 1, TP.HCM" />
            <Field label="Điện thoại" value="0979 179 792" />
            <Field label="Di động" value="0979 179 792" />
            <Field label="Email" value="trungkien@gamail.com" />
            <Field label="Khách hàng" value="Cá nhân trong nước" />
            <Field label="Chi nhánh" value="Hà Đông" />
            <Field label="Nhân viên môi giới" value="Phạm Đức Dũng" />
          </div>

          <div className={style.actions}>
            <button type="button" className={`${style.btn} ${style.btnOutline}`}>Hủy</button>
            <button type="button" className={`${style.btn} ${style.btnPrimary}`}>Cập nhật</button>
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
