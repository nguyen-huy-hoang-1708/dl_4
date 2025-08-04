import React from 'react';
import '../style/AssetInfo.scss';

export default function AssetInfo() {
  return (
    <div className="asset-info-container">
      <div className="asset-column">
        <div className="row">
            <span>Tiền mặt</span>
            <span className="white">100,000,123,456.79</span>
        </div>
        <div className="row">
            <span>Tiền chưa thanh toán</span>
            <span className="white">0</span>
        </div>
        <div className="row">
            <span>Tổng phí giao dịch + thuế</span>
            <span className="white">3,143,640.9</span>
        </div>
        <div className="row">
            <span>Phí giao dịch (trả sở)</span>
            <span className="white">0</span>
        </div>
        <div className="row">
            <span>Phí giao dịch (FOS)</span>
            <span className="white">0</span>
        </div>
        <div className="row">
            <span>Thuế</span>
            <span className="white">0</span>
        </div>
        <div className="row">
            <span>Phí quản lý vị thế</span>
            <span className="white">485,500</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="asset-column">
        <div className="row">
            <span>Tiền ký quỹ</span>
            <span className="white">9,990,000,000,000</span>
        </div>
        <div className="row">
            <span>Giá trị CK ký quỹ</span>
            <span className="white">0</span>
        </div>
        <div className="row">
            <span>Tài sản hợp lệ</span>
            <span className="white">10,089,770,356,350.79</span>
        </div>
        <div className="row">
            <span>Tiền mặt có thể rút</span>
            <span className="white">10,089,770,356,350.79</span>
        </div>
        <div className="row">
            <span>Số tiền cần bổ sung</span>
            <span className="white">0</span>
        </div>
        <div className="row">
            <span>Tài sản ròng</span>
            <span className="white">10,089,770,356,350.79</span>
        </div>
        <div className="row">
            <span>Phí quản lý TS ký quỹ</span>
            <span className="white">500,000</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="asset-column">
        <div className="row">
            <span>Ký quỹ ban đầu (IM)</span>
            <span className="white">0</span>
        </div>
        <div className="row">
            <span>Ký quỹ chuyển giao (DM)</span>
            <span className="white">0</span>
        </div>
        <div className="row">
            <span>Lãi lỗ (V/M)</span>
            <span className="white">2,030,000</span>
        </div>
        <div className="row">
            <span>Tiền ký quỹ có thể rút (80%)</span>
            <span className="white">9,990,000,000,000</span>
        </div>
        <div className="row">
            <span>Khoản hợp tác</span>
            <span className="white">120,000</span>
        </div>
        <div className="row">
            <span>Sức mua</span>
            <span className="white">361,159</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="asset-column">
        <div className="row">
            <span>Tổng tài sản</span>
            <span className="white">0</span>
        </div>
        <div className="row">
            <span>Tỷ lệ tài khoản (VSD)</span>
            <span className="white">0</span>
        </div>
        <div className="row">
            <span>Trạng thái tài khoản</span>
            <span className="white">0</span>
        </div>
        <div className="row">
            <span>Ký quỹ yêu cầu (MR)</span>
            <span className="white">1,570,320.45</span>
        </div>
        <div className="row">
            <span>Tiền chờ VSD xử lý</span>
            <span className="white">0</span>
        </div>
      </div>
    </div>
  );
}
