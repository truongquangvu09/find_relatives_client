import { Link } from 'react-router-dom';
import style from './items.module.css';

function Items() {
  return (
    <div className={style['list-profile']}>
      <div className={style['profile']}>
        <div className={style['profile-left']}>
          <h1 className={style['title']}>
            <Link to="/profile/1" title="Chị Nguyễn Thị Phương Dung tìm chú Bùi Tiết sinh năm 1949, mất tin tức khoảng năm 1970, tại Nha Trang. Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận. Khoảng năm 1970, ông Tiết bị bắt đi lính tại […]">
              MS25810: Nguyễn Thi Phương Dung tìm chú Bùi Tiết
            </Link> 
          </h1>
          <p>Họ và tên: Bùi Tiết</p>
          <p>Năm sinh: 2000</p>
          <p>Tên cha: Bùi năng</p>
          <p>Tên mẹ: Bùi Thị Lạc</p>
          <p>Tên anh chị em: Bùi Phương và Nguyễn Thị Minh Thư</p>
          <p>Năm thất lạc: 1970</p>
        </div>
        <div className={style['profile-right']}>
          <img
            src="https://vaithuhayho.com/wp-content/uploads/2021/03/anh-nen-dep-5.jpg"
            width="100%"
            height="200"
          />
        </div>
      </div>
    </div>
  );
}

export default Items;
