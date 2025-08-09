import React from 'react';
import style from '../style_man12/OrderTable.module.scss';
import Nocheckbox from '../assets/Nocheckbox.svg';
import Kinhlup from '../assets/Kinhlup.svg';
import Gavel from '../assets/Gavel.svg';
import XCircle from '../assets/XCircle.svg';

const data = [
  { stt: 1, stock: 'VN30FAU2', im: 17, long: 18, short: 17, net: 1, wapb: '1,195.8', wasp: '1,191.3', market: '1,140.5', deposit: '19,388,500', profit: '-13,150,000', ĐH: '28/12/2029'},
  { stt: 2, stock: 'VN30FAU2', im: 17, long: 18, short: 17, net: 1, wapb: '1,195.8', wasp: '1,191.3', market: '1,140.5', deposit: '19,388,500', profit: '-13,150,000', ĐH: '28/12/2029'},
  { stt: 3, stock: 'VN30FAU2', im: 17, long: 18, short: 17, net: 1, wapb: '1,195.8', wasp: '1,191.3', market: '1,140.5', deposit: '19,388,500', profit: '-13,150,000', ĐH: '28/12/2029'},
  { stt: 4, stock: 'VN30FAU2', im: 17, long: 18, short: 17, net: 1, wapb: '1,195.8', wasp: '1,191.3', market: '1,140.5', deposit: '19,388,500', profit: '-13,150,000', ĐH: '28/12/2029'},
  { stt: 5, stock: 'VN30FAU2', im: 17, long: 18, short: 17, net: 1, wapb: '1,195.8', wasp: '1,191.3', market: '1,140.5', deposit: '19,388,500', profit: '-13,150,000', ĐH: '28/12/2029'},
];

export default function PositionTable() {
  return (
    <div className={style.positionTable}>
      <div className={style.tableRowOne}>
        <div className={style.cellIcon}>
            <img src={Nocheckbox} alt="Nocheckbox" className={style.Nocheckbox} />
            <div stt="checkbox" />
        </div>
        <div className={style.cella}>STT</div>
        <div className={style.cellt}>
            Mã HĐ
            <img src={Kinhlup} alt="Kinhlup" className={style.Kinhlup} />
        </div>
        <div className={style.cell}>IM</div>
        <div className={style.cell}>Long</div>
        <div className={style.cell}>Short</div>
        <div className={style.cell}>NET</div>
        <div className={style.cell}>WAPB</div>
        <div className={style.cell}>WASP</div>
        <div className={style.cells}>Giá thị trường</div>
        <div className={style.cell}>GT ký quỹ</div>
        <div className={style.cell}>GT Lãi/lỗ</div>
        <div className={style.cellp}>Ngày ĐH</div>
        <div className={style.cellq}>Chức năng</div>
      </div>

      {data.map((item, idx) => (
        <div className={style.tableRowTwo} key={idx}>
          <div className={style.cellIcon}>
             <img src={Nocheckbox} alt="Nocheckbox" className={style.Nocheckbox} />
          </div>
          <div className={`${style.cella} ${item.stt === 'Long' ? 'green' : 'red'}`}>{item.stt}</div>
          <div className={style.cellt}>{item.stock}</div>
          <div className={style.cell}>{item.im}</div>
          <div className={style.cell}>{item.long}</div>
          <div className={style.cell}>{item.short}</div>
          <div className={style.cell}>{item.net}</div>
          <div className={style.cell}>{item.wapb}</div>
          <div className={style.cell}>{item.wasp}</div>
          <div className={style.cells}>{item.market}</div>
          <div className={style.cell}>{item.deposit}</div>
          <div className={style.cell}>{item.profit}</div>
          <div className={style.cellp}>{item.ĐH}</div>
          <div className={style.cellq}>
            <div className={style.blue}>
                <img src={Gavel} alt="Gavel" className={style.Gavel} />
                Đặt lệnh
            </div>
            <div className={style.red}>
                <img src={XCircle} alt="XCircle" className={style.XCircle} />
                Đóng vị thế
            </div>
          </div>
        </div>
      ))}
      <div className={style.padding}></div>
    </div>
  );
}
