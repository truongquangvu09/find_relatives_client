import React from 'react';
import './TvShowPage.css';
import { Link } from 'react-router-dom';

function TvShowList() {
  return (
    <div className="clear">
      <div className="main">
        <div className="main-content">
          <h1 className="block-title">Truyền hình</h1>
          <ul className="content-block list-tvshow">
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/qzyE9N6LpBw/mqdefault.jpg" />
              </a>

              <h2 className="list-title">
                <Link to="/tvshow/1">
                  NCHCCCL 163: LÚC NÀO MÌNH CŨNG LÀ NGƯỜI CỦA HỌ MÀ
                </Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: </p>
            </li>
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/1QLjTEC89_I/mqdefault.jpg" />
              </a>
              <h2 className="list-title">
                <Link to="/tvshow/1">
                  NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM
                </Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: 6/3/2023</p>
            </li>
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/G9OF72RWgKc/mqdefault.jpg" />
              </a>
              <h2 className="list-title">
                <Link to="/tvshow/1">
                  Gala NCHCCCL 2023: QUANH TA CÓ PHÉP MÀU
                </Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: 22/01/2023</p>
            </li>
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/_XccHkYFabI/mqdefault.jpg" />
              </a>
              <h2 className="list-title">
                <Link to="/tvshow/1">NCHCCCL 160: CON QUÝ NHƯ KIM CƯƠNG</Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: 02/01/2023</p>
            </li>
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/4Az1X9E7WJo/mqdefault.jpg" />
              </a>
              <h2 className="list-title">
                <Link to="/tvshow/1">NCHCCCL 159: CHÀO MẸ CỦA CON</Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: 05/12/20222</p>
            </li>
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/LiSowgLgPXU/mqdefault.jpg" />
              </a>
              <h2 className="list-title">
                <Link to="/tvshow/1">NCHCCCL 158: SONG SINH</Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: </p>
            </li>
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/dNEbFj3zD5Q/mqdefault.jpg" />
              </a>
              <h2 className="list-title">
                <Link to="/tvshow/1">
                  Như chưa hề có cuộc chia ly 157: Không ai gọi tên tôi nên tôi
                  không biết tên mình
                </Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: 3/10/2022</p>
            </li>
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/UqKuw-XJhb4/mqdefault.jpg" />
              </a>
              <h2 className="list-title">
                <Link to="/tvshow/1">
                  Như chưa hề có cuộc chia ly 156: NHỮNG ÁM ẢNH TRONG ĐỜI CÔ BÉ
                  ĐI LẠC
                </Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: 05/09/2022</p>
            </li>
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/i3R_xRLEhc4/mqdefault.jpg" />
              </a>
              <h2 className="list-title">
                <Link to="/tvshow/1">
                  Như chưa hề có cuộc chia ly số 155: Chu Lai Cuộc chạy loạn
                  3/1975 phần 2
                </Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: 01/08/2022</p>
            </li>
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/98AWgigPDes/mqdefault.jpg" />
              </a>
              <h2 className="list-title">
                <Link to="/tvshow/1">
                  NCHCCCL số 154: CHU LAI CUỘC CHẠY LOẠN 3/1975
                </Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: 07/04/2022</p>
            </li>
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/hE9PLxkVa3Y/mqdefault.jpg" />
              </a>
              <h2 className="list-title">
                <Link to="/tvshow/1">
                  Như chưa hề có cuộc chia ly 153: DÒNG MÁU ĐÀO
                </Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: 6/6/2022</p>
            </li>
            <li>
              <a className="list-thumb">
                <img src="https://img.youtube.com/vi/03XUcwFXYOE/mqdefault.jpg" />
              </a>
              <h2 className="list-title">
                <Link to="/tvshow/1">NCHCCCL 152: Hãy Lên Tiếng</Link>
              </h2>
              <p className="sub-title">Ngày phát sóng: </p>
            </li>
          </ul>
          <p className="page-navi">
            <span aria-current="page" className="page-numbers current">
              1
            </span>
            <a className="page-numbers">2</a>
            <a className="page-numbers">3</a>
            <span className="page-numbers dots">&hellip;</span>
            <a className="page-numbers">15</a>
            <a className="next page-numbers">Trang sau »</a>
          </p>
        </div>
        <div className="main-sidebar">
          <div className="widget-block">
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
                  Hòm thư 005 - Bưu điện trung tâm Sài Gòn, Tp. Hồ Chí Minh
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
    </div>
  );
}

export default TvShowList;
