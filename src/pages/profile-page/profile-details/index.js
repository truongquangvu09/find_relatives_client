import React from 'react';
import { Link } from 'react-router-dom';

import style from './index.module.css'

function ProfileDetails() {
  return (
    <div className={style["main"]}>
      <div className={style["main-content"]}>
        <h1 className={style["title"]}>Tìm người thân</h1>
        <div className={style["body"]}>
          <div className={style["header-body"]}>
            <div className={style["profile-left"]}>
              <h1 className={style["title"]}>
                <Link to="https://haylentieng.vn/profile/nguyen-thi-phuong-dung-tim-chu-bui-tiet/" title="Chị Nguyễn Thị Phương Dung tìm chú Bùi Tiết sinh năm 1949, mất tin tức khoảng năm 1970, tại Nha Trang. Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận. Khoảng năm 1970, ông Tiết bị bắt đi lính tại […]">
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
            <div className={style["profile-right"]}>
              <img src="https://haylentieng.vn/wp-content/uploads/2023/03/Bui-tiet.png" width="100%" height="200" />
            </div>
          </div>
          <div className={style["body-content"]}>
            <div className={style["picture"]}>
              <img src="https://haylentieng.vn/wp-content/uploads/2023/03/Bui-tiet.png" width="100%" height="200" />
              <p>Ông Bùi Tiết lúc trẻ</p>
            </div>
            <div className={style["content"]}>
              <p>Chị Nguyễn Thị Phương Dung tìm chú Bùi Tiết sinh năm 1949, mất tin tức khoảng năm 1970, tại Nha Trang.</p>
              <p>Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận.</p>
              <p>Khoảng năm 1970, ông Tiết bị bắt đi lính tại Phan Rang. Tại đây, chị dâu là bà Giác có đến thăm ông 1 lần. Lần 2 khi bà Giác đến thăm thì được kể:</p>
              <p>ông Tiết theo đơn vị chuyển đi nơi khác. Trên đường đi, qua 1 khu rừng đến Nha Trang, ông Tiết nhảy xuống xe, từ đó không ai nghe tin gì về ông Tiết nữa.</p>
              <strong>Như chưa hề có cuộc chia ly…”:</strong>
            </div>
            <div className={style["contact"]}>
              <p>– Hòm thư 005, Bưu điện Trung tâm Sài Gòn, TPHCM</p>
              <p>– Hòm thư 005, Bưu điện Trung tâm Sài Gòn, TPHCM</p>
              <p>– Youtube: “NHƯ CHƯA HỀ CÓ CUỘC CHIA LY – OFFICIAL”: www.youtube.com/NhuchuahecocuocchialyOfficial</p>
              <p>[Hoạt động thiện nguyện Tìm kiếm, Kết nối và Đoàn tụ thân nhân NHƯ CHƯA HỀ CÓ CUỘC CHIA LY… do Công ty TNHH Xã hội Nối Thân Thương chủ trì].</p>
              <p>Nếu ai có thông tin gì về trường hợp này, xin vui lòng liên lạc với Chương trình "Như chưa hề có cuộc chia ly…" hoặc để lại bình luận phía dưới.</p>
            </div>
          </div>
          <div className={style["bottom"]}>
            <div className={style["comment"]}>
              <h3>Leave a repply</h3>
              <form>
                <p>Your email address will not be published. Required fields are marked *</p>
                <p className={style["form-comment"]}>
                  <label for="comment">Comment</label>
                  <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                </p>
                <p className={style["form-comment2"]}>
                  <label for="comment">Name</label>
                  <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                </p>
                <p className={style["form-comment2"]}>
                  <label for="comment">Email</label>
                  <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                </p>
                <p className={style["form-comment2"]}>
                  <label for="comment">Website</label>
                  <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                </p>
                <p className={style["save"]}>
                  <input type='checkbox'></input>
                  <label for="comment"> Save my name, email, and website in this browser for the next time I comment.</label>
                </p>
                <p className={style["submit"]}>
                  <input name="submit" type="submit" id="submit" class="submit" value="Post Comment"/>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
