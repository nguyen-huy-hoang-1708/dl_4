import React from 'react';
import '../style/OrderTable.scss';
import Nocheckbox from '../assets/Nocheckbox.svg';
import Kinhlup from '../assets/Kinhlup.svg';

const data = [
  { type: 'Long', stock: 'VN30FAU2', im: 17, band: 7, qty: '1,000', pos: 1, avgPrice: '1,200', currentPrice: '1,220.3', estIM: 0, IM: 17, VM: '230,000', DM: 0, MR: 0 },
  { type: 'Short', stock: 'VN30FAU2', im: 17, band: 7, qty: '1,000', pos: 1, avgPrice: '1,200', currentPrice: '1,220.3', estIM: 0, IM: 17, VM: '230,000', DM: 0, MR: 0 },
  { type: 'Short', stock: 'VN30FAU2', im: 17, band: 7, qty: '1,000', pos: 1, avgPrice: '1,200', currentPrice: '1,220.3', estIM: 0, IM: 17, VM: '230,000', DM: 0, MR: 0 },
  { type: 'Long', stock: 'VN30FAU2', im: 17, band: 7, qty: '1,000', pos: 1, avgPrice: '1,200', currentPrice: '1,220.3', estIM: 0, IM: 17, VM: '230,000', DM: 0, MR: 0 },
  { type: 'Long', stock: 'VN30FAU2', im: 17, band: 7, qty: '1,000', pos: 1, avgPrice: '1,200', currentPrice: '1,220.3', estIM: 0, IM: 17, VM: '230,000', DM: 0, MR: 0 },
];

export default function PositionTable() {
  return (
    <div className="position-table">
      <div className="table-row-one">
        <div className="cell-icon">
            <img src={Nocheckbox} alt="Nocheckbox" className="Nocheckbox" />
            <div type="checkbox" />
        </div>
        <div className="cella">Lệnh</div>
        <div className="cellt">
            Mã CK
            <img src={Kinhlup} alt="Kinhlup" className="Kinhlup" />
        </div>
        <div className="cell">Tỉ lệ IM</div>
        <div className="cell">Biên độ</div>
        <div className="cell">KL ký quỹ</div>
        <div className="cell">Vị thế</div>
        <div className="cell">Giá TB</div>
        <div className="cell">Giá TT</div>
        <div className="cells">Ký quỹ ban đầu dự kiến</div>
        <div className="cell">IM</div>
        <div className="cell">VM</div>
        <div className="cell">DM</div>
        <div className="cell">MR</div>
      </div>

      {data.map((item, idx) => (
        <div className="table-row-two" key={idx}>
          <div className="cell-icon">
             <img src={Nocheckbox} alt="Nocheckbox" className="Nocheckbox" />
          </div>
          <div className={`cella ${item.type === 'Long' ? 'green' : 'red'}`}>{item.type}</div>
          <div className="cellt">{item.stock}</div>
          <div className="cell">{item.im}</div>
          <div className="cell">{item.band}</div>
          <div className="cell">{item.qty}</div>
          <div className="cell">{item.pos}</div>
          <div className="cell">{item.avgPrice}</div>
          <div className="cell">{item.currentPrice}</div>
          <div className="cells">{item.estIM}</div>
          <div className="cell">{item.IM}</div>
          <div className="cell">{item.VM}</div>
          <div className="cell">{item.DM}</div>
          <div className="cell">{item.MR}</div>
        </div>
      ))}
      <div className="padding"></div>
    </div>
  );
}
