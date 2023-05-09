import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
export default function Footer() {
  return (
    <div className="footer">
      <ul className="sponsor">
        <li>
          <a href="" target="blank">
            <img
              width="164"
              height="64"
              src="https://haylentieng.vn/wp-content/themes/haylentieng/images/logo-wen-nchcccl.png"
              alt=""
              loading="lazy"
            />
          </a>
        </li>
        <li>
          <a href="http://phantichadn.vn/" target="blank">
            <img
              width="164"
              height="64"
              src="https://haylentieng.vn/wp-content/themes/haylentieng/images/logo-adn.png"
              alt=""
              loading="lazy"
            />
          </a>
        </li>
      </ul>
      <div className="fooshow">
        <ul className="foot-menu">
          <li
            id="menu-item-66"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-66"
          >
            <NavLink to="/donate">
              {' '}
              <a>ỦNG HỘ NHƯ CHƯA HỀ CÓ CUỘC CHIA LY</a>
            </NavLink>
          </li>
          <li
            id="menu-item-67"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67"
          >
            <NavLink to="/contact">
              <a>LIÊN HỆ</a>
            </NavLink>
          </li>
        </ul>
        <ul className="social-menu" style={{ fontWeight: 'bold' }}>
          <li
            id="menu-item-63698"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-63698"
          >
            <a target="_blank" rel="noopener noreferrer">
              Trang Tìm Người đi lạc
            </a>
          </li>
          <li
            id="menu-item-63700"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-63700"
          >
            <a target="_blank" rel="noopener noreferrer">
              Trang Facebook
            </a>
          </li>
          <li
            id="menu-item-63699"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-63699"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCHP4rpebqW2zbVByd3wzoVA"
            >
              Kênh YouTube
            </a>
          </li>
        </ul>
        <div className="copyright">
          <p className="fl">
            Bản quyền thuộc về chương trình "
            <a>Như chưa hề có cuộc chia ly ...</a>"
          </p>
          <p className="fr">
            Giấy phép số: 225/GP - BC Bộ văn hóa thông tin cấp ngày: 06/06/2007
          </p>
          <p className="fl clear">
            Hỗ trợ bởi{' '}
            <a target="blank" href="http://timeuniversal.vn">
              Time Universal
            </a>
          </p>
        </div>
      </div>
      <div
        className="zalo-chat-widget"
        data-oaid="2629363586912501706"
        data-welcome-message="Rất vui khi được hỗ trợ bạn!"
        data-autopopup="0"
        data-width="350"
        data-height="420"
        style={{
          border: 'none',
          visibility: 'visible',
          bottom: '52px',
          right: '52px',
          position: 'fixed',
          width: '60px',
          zIndex: '2147483644',
          height: '60px',
        }}
      ></div>
    </div>
  );
}
