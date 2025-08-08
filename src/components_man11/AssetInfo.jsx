import React from 'react';
import style from '../style_man11/AssetInfo.module.scss';

export default function AssetInfo() {
  return (
    <div className={style.assetInfoContainer}>
      <div className={style.assetColumn}>
        <div className={style.row}>
            <span>Tiền mặt</span>
            <span className={style.white}>100,000,123,456.79</span>
        </div>
        <div className={style.row}>
            <span>Tiền chưa thanh toán</span>
            <span className={style.white}>0</span>
        </div>
        <div className={style.row}>
            <span>Tổng phí giao dịch + thuế</span>
            <span className={style.white}>3,143,640.9</span>
        </div>
        <div className={style.row}>
            <span>Phí giao dịch (trả sở)</span>
            <span className={style.white}>0</span>
        </div>
        <div className={style.row}>
            <span>Phí giao dịch (FOS)</span>
            <span className={style.white}>0</span>
        </div>
        <div className={style.row}>
            <span>Thuế</span>
            <span className={style.white}>0</span>
        </div>
        <div className={style.row}>
            <span>Phí quản lý vị thế</span>
            <span className={style.white}>485,500</span>
        </div>
      </div>

      <div className={style.divider}></div>

      <div className={style.assetColumn}>
        <div className={style.row}>
            <span>Tiền ký quỹ</span>
            <span className={style.white}>9,990,000,000,000</span>
        </div>
        <div className={style.row}>
            <span>Giá trị CK ký quỹ</span>
            <span className={style.white}>0</span>
        </div>
        <div className={style.row}>
            <span>Tài sản hợp lệ</span>
            <span className={style.white}>10,089,770,356,350.79</span>
        </div>
        <div className={style.row}>
            <span>Tiền mặt có thể rút</span>
            <span className={style.white}>10,089,770,356,350.79</span>
        </div>
        <div className={style.row}>
            <span>Số tiền cần bổ sung</span>
            <span className={style.white}>0</span>
        </div>
        <div className={style.row}>
            <span>Tài sản ròng</span>
            <span className={style.white}>10,089,770,356,350.79</span>
        </div>
        <div className={style.row}>
            <span>Phí quản lý TS ký quỹ</span>
            <span className={style.white}>500,000</span>
        </div>
      </div>

      <div className={style.divider}></div>

      <div className={style.assetColumn}>
        <div className={style.row}>
            <span>Ký quỹ ban đầu (IM)</span>
            <span className={style.white}>0</span>
        </div>
        <div className={style.row}>
            <span>Ký quỹ chuyển giao (DM)</span>
            <span className={style.white}>0</span>
        </div>
        <div className={style.row}>
            <span>Lãi lỗ (V/M)</span>
            <span className={style.white}>2,030,000</span>
        </div>
        <div className={style.row}>
            <span>Tiền ký quỹ có thể rút (80%)</span>
            <span className={style.white}>9,990,000,000,000</span>
        </div>
        <div className={style.row}>
            <span>Khoản hợp tác</span>
            <span className={style.white}>120,000</span>
        </div>
        <div className={style.row}>
            <span>Sức mua</span>
            <span className={style.white}>361,159</span>
        </div>
      </div>

      <div className={style.divider}></div>

      <div className={style.assetColumn}>
        <div className={style.row}>
            <span>Tổng tài sản</span>
            <span className={style.white}>0</span>
        </div>
        <div className={style.row}>
            <span>Tỷ lệ tài khoản (VSD)</span>
            <span className={style.white}>0</span>
        </div>
        <div className={style.row}>
            <span>Trạng thái tài khoản</span>
            <span className={style.white}>0</span>
        </div>
        <div className={style.row}>
            <span>Ký quỹ yêu cầu (MR)</span>
            <span className={style.white}>1,570,320.45</span>
        </div>
        <div className={style.row}>
            <span>Tiền chờ VSD xử lý</span>
            <span className={style.white}>0</span>
        </div>
      </div>
    </div>
  );
}
