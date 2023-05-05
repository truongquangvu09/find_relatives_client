import React from 'react';
import { Link } from 'react-router-dom';

import style from './index.module.css'

function ProfileDetails() {
  return (
    <div className={style["main"]}>
      <div className={style["main-content"]}>
        <h1 className={style["head-title"]}>Tìm người thân</h1>
        <div className={style["bodys"]}>
          <div className={style["header-body"]}>
            <div className={style["profile-lefts"]}>
              <h1 className={style["title"]}>
                <Link to="/profile" title="Chị Nguyễn Thị Phương Dung tìm chú Bùi Tiết sinh năm 1949, mất tin tức khoảng năm 1970, tại Nha Trang. Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận. Khoảng năm 1970, ông Tiết bị bắt đi lính tại […]">
                  MS25810: Nguyễn Thi Phương Dung tìm chú Bùi Tiết
                </Link>
              </h1>
              <p className={style["title"]}>Họ và tên: Bùi Tiết</p>
              <p className={style["title"]}>Năm sinh: 2000</p>
              <p className={style["title"]}>Tên cha: Bùi năng</p>
              <p className={style["title"]}>Tên mẹ: Bùi Thị Lạc</p>
              <p className={style["title"]}>Tên anh chị em: Bùi Phương và Nguyễn Thị Minh Thư</p>
              <p className={style["title"]}>Năm thất lạc: 1970</p> 
            </div>
            <div className={style["profile-right"]}>
              <img src="https://vaithuhayho.com/wp-content/uploads/2021/03/anh-nen-dep-5.jpg" width="100%" height="200" />
            </div>
          </div>
          <div className={style["body-contents"]}>
            <div className={style["pictures"]}>
              <img src="https://vaithuhayho.com/wp-content/uploads/2021/03/anh-nen-dep-5.jpg" width="100%" height="200" />
              <p className={style["titles"]}>Ông Bùi Tiết lúc trẻ</p>
            </div>
            <div className={style["content"]}>
              <p className={style["title"]}>Chị Nguyễn Thị Phương Dung tìm chú Bùi Tiết sinh năm 1949, mất tin tức khoảng năm 1970, tại Nha Trang.</p>
              <p className={style["title"]}>Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận.</p>
              <p className={style["title"]}>Khoảng năm 1970, ông Tiết bị bắt đi lính tại Phan Rang. Tại đây, chị dâu là bà Giác có đến thăm ông 1 lần. Lần 2 khi bà Giác đến thăm thì được kể:</p>
              <p className={style["title"]}>ông Tiết theo đơn vị chuyển đi nơi khác. Trên đường đi, qua 1 khu rừng đến Nha Trang, ông Tiết nhảy xuống xe, từ đó không ai nghe tin gì về ông Tiết nữa.</p>
              <p className={style["title"]}>Như chưa hề có cuộc chia ly…”:</p>
            </div>
            <div className={style["contact"]}>
              <p className={style["title"]}>– Hòm thư 005, Bưu điện Trung tâm Sài Gòn, TPHCM</p>
              <p className={style["title"]}>– Hòm thư 005, Bưu điện Trung tâm Sài Gòn, TPHCM</p>
              <p className={style["title"]}>– Youtube: “NHƯ CHƯA HỀ CÓ CUỘC CHIA LY – OFFICIAL”: www.youtube.com/NhuchuahecocuocchialyOfficial</p>
              <p className={style["title"]}>[Hoạt động thiện nguyện Tìm kiếm, Kết nối và Đoàn tụ thân nhân NHƯ CHƯA HỀ CÓ CUỘC CHIA LY… do Công ty TNHH Xã hội Nối Thân Thương chủ trì].</p>
              <p className={style["title"]}>Nếu ai có thông tin gì về trường hợp này, xin vui lòng liên lạc với Chương trình "Như chưa hề có cuộc chia ly…" hoặc để lại bình luận phía dưới.</p>
            </div>
          </div>
          <div className={style["bottom"]}>
            <div className={style["comment"]}>
              <h3 className={style["tittles"]}>Leave a repply</h3>
              <form>
                <p className={style["titless"]}>Your email address will not be published. Required fields are marked *</p>
                <p className={style["form-comment"]}>
                  <label for="comments">Comment</label>
                  <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                </p>
                <p className={style["form-comment2"]}>
                  <label for="comments">Name</label>
                  <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                </p>
                <p className={style["form-comment2"]}>
                  <label for="comments">Email</label>
                  <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                </p>
                <p className={style["form-comment2"]}>
                  <label for="comments">Website</label>
                  <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                </p>
                <p className={style["save"]}>
                  <input type='checkbox'></input>
                  <label for="commentss"> Save my name, email, and website in this browser for the next time I comment.</label>
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
