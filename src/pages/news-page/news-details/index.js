import React from 'react';
import './newDetail.css';
import Sidebar from '../../../utils/sidebar/index';
import '@fortawesome/fontawesome-free/css/all.min.css';

function NewsDetails() {
  return (
    <div className="container">
      <div className="newsDetail">
        <h3 className="title-block">
          <a href="">Báo chí</a>
        </h3>
        <div className="content-block">
          <h1 className="title-content">
            Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700
          </h1>
          <p className="sub-title">Ngày đăng: 07/03/2023 | Lượt xem: 424</p>
          <div className="block-image">
            <img clasName='img-newsdetail' src="https://haylentieng.vn/wp-content/uploads/2023/03/z4163339796552_4a45b51f7f238d548fac26faedd77c9b-300x200.jpg" alt="" />
          </div>
          <p>
            Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700
          </p>
          <p>
            <strong>
              Ngân hàng Quân đội MBBank – Số tài khoản: 2700
            </strong>
          </p>
          <p>
            Các chi tiêu hàng tháng sẽ được báo cáo trên Fanpage @nchcccl, cũng như trong các số phát sóng định kỳ.
          </p>
          <p>Trân trọng, </p>
          <p>Đội ngũ NCHCCCL</p>
          <div className="comment-block">
            <div id="respond" className="comment-respond">
              <h3>leave a Reply</h3>
              <form action="">
                <p className="comment-note">
                  <span>Your email address will not be published.</span>
                  Required fields are marked
                  <span>*</span>
                </p>
                <p className="comment-form">
                  <label className="title-comment" for="comment">Comment</label>
                  <textarea name="comment" id="" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                </p>
                <p className="comment-name">
                  <label className="title-comment" for="name">Name*</label>
                  <input className="text" type="text" value size="30" maxlength="245" />
                </p>
                <p className="comment-email">
                  <label className="title-comment" for="Email">Email*</label>
                  <input className="text" type="text" value size="30" maxlength="245" />
                </p>
                <p className="comment-website">
                  <label className="title-comment" for="website">Website</label>
                  <input className="text" type="text" value size="30" maxlength="245" />
                </p>
                <p className="comment-form-save">
                  <input type="checkbox" />
                  <label for="form-save">Save my name, email, and website in this browser for the next time I comment.</label>
                </p>
                <p className="form-submit">
                  <input type="submit" value="Post Comment" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
