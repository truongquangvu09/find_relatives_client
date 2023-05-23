import React, { useEffect, useState } from 'react';
import './TvShowPage.css';
import { Link } from 'react-router-dom';
import Zalo from '../../Zalo';
import * as tvShowServices from '../../../api/tvshow';
import { useDispatch } from 'react-redux';
import { setTvShowData } from '../../../redux/Slice/tvShowSlice';

function TvShowList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const listTvShow = async () => {
      try {
        const result = await tvShowServices.getTvShow();
        setData(result.data);
      } catch (error) {}
    };
    listTvShow();
  }, []);

  const dispatch = useDispatch();
  const handleClick = async (tvShowId) => {
    try {
      const result = await tvShowServices.getDetail(tvShowId);
      console.log({ result });
      dispatch(setTvShowData(result));
      window.scrollTo(0, 0);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="clear">
      <div className="main">
        <div className="main-content">
          <h1 className="block-title">Truyền hình</h1>
          <ul className="content-block list-tvshow">
            {data.map((item) => {
              return (
                <li>
                  <a className="list-thumb">
                    <img src={item.media} />
                  </a>

                  <h2 className="list-title">
                    <Link
                      className="link-title"
                      to="/tvshow/{item.id}"
                      onClick={() => handleClick(item.id)}
                    >
                      {item.content_text}
                    </Link>
                  </h2>
                  <p className="sub-title">
                    Ngày phát sóng:{item.createdAt.substring(0, 10)}{' '}
                  </p>
                </li>
              );
            })}
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
      <Zalo></Zalo>
    </div>
  );
}

export default TvShowList;
