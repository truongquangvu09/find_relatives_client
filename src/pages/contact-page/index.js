import React from 'react';
import './contact.css';
function Contact() {
  return (
    <div className="contact__body">
      <div className="contact__inner">
        <h2 className="contact__title">LIÊN HỆ</h2>
        <p className="contact__heading">
          Quý vi và các bạn có thể liên hệ với{' '}
          <strong>
            {' '}
            Hoạt động thiện nguyện “Như chưa hề có cuộc chia ly…”{' '}
          </strong>
          qua các kênh sau:
        </p>
        <ol className="contact__list">
          <li>Hotline: 028.6264 7777</li>
          <li>
            Địa chỉ gửi thư: Hòm thư 001 - Bưu điện trung tâm Đà Nẵng, Thành phố
            Đà Nẵng
          </li>
          <li>Email: timnguoithan@com.vn</li>
          <li>
            Địa chỉ văn phòng tiếp nhận thông tin: 209 Phan Thanh, Quận Thanh
            Khê, Thành Phố Đà Nẵng
          </li>
          <li>
            Trang Facebook: <a href="#!">https://www.facebook.com/nchcccl</a>
          </li>
          <li>
            Website: <a href="#!">http://localhost:3000</a>
          </li>
          <li>
            Kênh YouTube Như chưa hề có cuộc chia ly - Official:{' '}
            <a href="#!">
              https://www.youtube.com/NhuchuahecocuocchialyOfficial
            </a>
          </li>
          <li>
            Bản đồ chỉ đường: <a href="#!">https://bit.ly/2GsSj33</a>
          </li>
        </ol>
      </div>
      <div className="main-sidebar">
        <div className="widget-block-1">
          <h3 className="widget-title">Chuyên mục</h3>
          <ul className="right-menu">
            <li
              id="menu-item-66"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-66"
            >
              <a>ỦNG HỘ NHƯ CHƯA HỀ CÓ CUỘC CHIA LY</a>
            </li>
            <li
              id="menu-item-67"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67"
            >
              <a>LIÊN HỆ</a>
            </li>
          </ul>
        </div>
        <div className="widget-block">
          <h3 className="widget-title">Liên hệ</h3>
          <div className="widget-content">
            <ul className="featured-contact">
              <li className="contact-phone">
                <a href="tel:02862647777">(028) 6264 7777</a>
              </li>
              <li class="contact-mail">
                Hòm thư 005 - Bưu điện trung tâm Đà Nẵng, Tp. Đà Nẵng
              </li>
              <li className="contact-email">
                Email:{' '}
                <a href="/cdn-cgi/l/email-protection#3c485551525b49535548545d527c545d45505952485559525b124a52">
                  <span
                    className="__cf_email__"
                    data-cfemail="d6a2bfbbb8b1a3b9bfa2beb7b896beb7afbab3b8a2bfb3b8b1f8a0b8"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
