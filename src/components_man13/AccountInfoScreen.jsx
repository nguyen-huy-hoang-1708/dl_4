import React, { useState } from 'react';
import styles from '../style_man13/AccountInfoScreen.module.scss';

/**
 * Props:
 * - onGoChangePassword?: () => void  // click "Đổi mật khẩu" để App điều hướng sang màn 14
 */
export default function AccountInfoScreen() {
  const [tab, setTab] = useState('info'); // info | password

  return (
    <div className={styles.screen}>
      <div className={styles.wrapper}>
        {/* Tabs */}
        <div className={styles.tabs}>
          <div
            className={`${styles.info} ${tab === 'info' ? styles.active : ''}`}
            onClick={() => setTab('info')}
          >
            Thông tin chung
          </div>
          <div
            className={`${styles.password} ${tab === 'password' ? styles.active : ''}`}
            onClick={() => {
              setTab('password');
            }}
          >
            Đổi mật khẩu
          </div>
        </div>

        {/* Mô tả */}
        <div className={styles.desc}>
          Các thông tin liên lạc được sử dụng để gửi thư, chuyển phát hay gọi điện/fax liên lạc mỗi khi cần.
        </div>

        {/* Card */}
        <section className={styles.card}>
          <div className={styles.grid}>
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

          <div className={styles.actions}>
            <button type="button" className={`${styles.btn} ${styles.btnOutline}`}>Hủy</button>
            <button type="button" className={`${styles.btn} ${styles.btnPrimary}`}>Cập nhật</button>
          </div>
        </section>
      </div>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div className={styles.field}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
