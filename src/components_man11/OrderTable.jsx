import React from 'react';
import style from '../style_man11/OrderTable.module.scss';
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
    <div className={style.positionTable}>
      <div className={style.tableRowOne}>
        <div className={style.cellIcon}>
            <img src={Nocheckbox} alt="Nocheckbox" className={style.Nocheckbox} />
            <div type="checkbox" />
        </div>
        <div className={style.cella}>Lệnh</div>
        <div className={style.cellt}>
            Mã CK
            <img src={Kinhlup} alt="Kinhlup" className={style.Kinhlup} />
        </div>
        <div className={style.cell}>Tỉ lệ IM</div>
        <div className={style.cell}>Biên độ</div>
        <div className={style.cell}>KL ký quỹ</div>
        <div className={style.cell}>Vị thế</div>
        <div className={style.cell}>Giá TB</div>
        <div className={style.cell}>Giá TT</div>
        <div className={style.cells}>Ký quỹ ban đầu dự kiến</div>
        <div className={style.cell}>IM</div>
        <div className={style.cell}>VM</div>
        <div className={style.cell}>DM</div>
        <div className={style.cell}>MR</div>
      </div>

      {data.map((item, idx) => (
        <div className={style.tableRowTwo} key={idx}>
          <div className={style.cellIcon}>
             <img src={Nocheckbox} alt="Nocheckbox" className={style.Nocheckbox} />
          </div>
          <div className={`${style.cella} ${item.type === 'Long' ? style.green : style.red}`}>{item.type}</div>
          <div className={style.cellt}>{item.stock}</div>
          <div className={style.cell}>{item.im}</div>
          <div className={style.cell}>{item.band}</div>
          <div className={style.cell}>{item.qty}</div>
          <div className={style.cell}>{item.pos}</div>
          <div className={style.cell}>{item.avgPrice}</div>
          <div className={style.cell}>{item.currentPrice}</div>
          <div className={style.cells}>{item.estIM}</div>
          <div className={style.cell}>{item.IM}</div>
          <div className={style.cell}>{item.VM}</div>
          <div className={style.cell}>{item.DM}</div>
          <div className={style.cell}>{item.MR}</div>
        </div>
      ))}
      <div className={style.padding}></div>
    </div>
  );
}
