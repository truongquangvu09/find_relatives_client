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
        <div className='main-container-newdetail'>
          <div className="content-block-newdetail">
            <h1 className="title-content">
              Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700
            </h1>
            <p className="sub-title">Ngày đăng: 07/03/2023 | Lượt xem: 424</p>
            <div className="newdetail-block-image">
              <img clasName='img-newsdetail' src="https://haylentieng.vn/wp-content/uploads/2023/03/z4163339796552_4a45b51f7f238d548fac26faedd77c9b-512x512.jpg" alt="" />
            </div>
            <p className='newDetail-p'>
              Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700
            </p>
            <p className='newDetail-p'>
              2700 cũng là số cuộc đoàn tụ trên hành trình 16 năm Tìm kiếm và Kết nối. Và còn hơn 40.000 hồ sơ khác vẫn đang tiếp tục triển khai tìm kiếm.
            </p>
            <p className='newDetail-p'>
              <strong>
                Ngân hàng Quân đội MBBank – Số tài khoản: 2700
              </strong>
            </p>
            <p className='newDetail-p'>
              Các chi tiêu hàng tháng sẽ được báo cáo trên Fanpage @nchcccl, cũng như trong các số phát sóng định kỳ.
            </p>
            <p className='newDetail-p'>Trân trọng, </p>
            <p className='newDetail-p'>Đội ngũ NCHCCCL</p>
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
                    <textarea name="comment" id="" cols="45" rows="8" maxlength="65525" ></textarea>
                  </p>
                  <p className="comment-name">
                    <label className="title-comment" for="name">Name*</label>
                    <input className="text" type="text" maxlength="245" />
                  </p>
                  <p className="comment-email">
                    <label className="title-comment" for="Email">Email*</label>
                    <input className="text" type="text" maxlength="245" />
                  </p>
                  <p className="comment-website">
                    <label className="title-comment" for="website">Website</label>
                    <input className="text" type="text" maxlength="245" />
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
          <div className='sidebar-newdetail'>
            <div class="widget-block">
              <h3 class="widget-title">Các tin đọc nhiều nhất</h3>
              <ul class="featured-contact">
                <li class="contact-mail">Thông báo</li>
                <li class="contact-mail">Hoạt Động</li>
                <li class="contact-mail">Báo chí</li>
                <li class="contact-mail">Khán giả</li>
              </ul>
            </div>
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </div>

  );
}

export default NewsDetails;
