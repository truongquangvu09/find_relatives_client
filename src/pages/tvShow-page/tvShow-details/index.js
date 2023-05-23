import React, { useState, useEffect } from 'react';
import './style.css';
import Zalo from '../../Zalo';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';
import * as commentServices from '../../../api/comments';

function TvShowDetails() {
  const tvShowData = useSelector((state) => state.tvShow.tvShowData);
  const userData = useSelector((state) => state.user.userData);

  const [comment, setComment] = useState({
    comment_text: '',
    report_id: '',
    post_id: '',
    tvShow_id: tvShowData.id,
    news_id: '',
  });

  const [commentList, setCommentList] = useState([]);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newComment = await commentServices.createComment(
        comment.comment_text,
        userData.user.id,
        null,
        comment.tvShow_id,
        null,
        userData.token
      );

      setComment((prevState) => ({
        ...prevState,
        comment_text: '',
      }));

      const result = await commentServices.getComment();
      const filteredComments = result.filter(
        (item) => item.tvShow_id === tvShowData.id
      );
      setCommentList(filteredComments);
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error('bạn chưa đăng nhập');
      window.scrollTo(0, 0);
    }
  };
  useEffect(() => {
    const get = async () => {
      try {
        const result = await commentServices.getComment();
        const filteredComments = result.filter(
          (item) => item.tvShow_id === tvShowData.id
        );
        setCommentList(filteredComments);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    get();
  }, [tvShowData]);

  return (
    <div className="main">
      <div className="main-content">
        <h3 className="block-title">Truyền hình</h3>

        <div className="content-block single">
          <iframe
            width="100%"
            height="368"
            src="https://www.youtube.com/embed/1QLjTEC89_I?autoplay=1&showinfo=0"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <h1 className="single-title">{tvShowData.content_text}</h1>
          <p className="sub-title">
            Ngày phát sóng: {tvShowData.createdAt.substring(0, 10)}
          </p>
          <div className="comment-area">
            <h2 className="comment-title"> {commentList.length}responses</h2>
            {commentList.map((item) => {
              return (
                <>
                  <ul className="comment-list">
                    <li className="comment">
                      <div className="comment-body" key={item.id}>
                        <div className="comment-author">
                          <img
                            alt=""
                            src="https://secure.gravatar.com/avatar/89fddf5283bc9e36341fc460763329f0?s=32&amp;d=mm&amp;r=g"
                            srcset="https://secure.gravatar.com/avatar/89fddf5283bc9e36341fc460763329f0?s=64&amp;d=mm&amp;r=g 2x"
                            class="avatar avatar-32 photo"
                            height="32"
                            width="32"
                            loading="lazy"
                          />
                          <cite class="fn">{item.Report?.report_name}</cite>
                        </div>
                        <div className="comment-meta">
                          {format(
                            new Date(item.createdAt),
                            'yyyy-MM-dd HH:mm:ss'
                          )}
                        </div>
                        <p>{item.comment_text}</p>
                      </div>
                    </li>
                  </ul>
                </>
              );
            })}
          </div>
          <div id="comments" className="comments-area">
            <div id="respond" className="comment-respond">
              <h3 id="reply-title" className="comment-reply-title">
                Để lại một câu trả lời
                <small>
                  <a>Cancel reply</a>
                </small>
              </h3>
              <form onSubmit={handleSubmit}>
                <p className="comment-notes">
                  <span id="email-notes">
                    Địa chỉ email của bạn sẽ không được công bố.Các trường bắt
                    buộc được đánh dấu*
                  </span>{' '}
                </p>
                <p className="comment-form-comment">
                  <label for="comment">Comment *</label>

                  <textarea
                    id="comment"
                    name="comment_text"
                    cols="45"
                    rows="8"
                    maxlength="65525"
                    required="required"
                    value={comment.comment_text}
                    onChange={handleChange}
                  ></textarea>
                </p>

                <p className="comment-form-cookies-consent">
                  <input
                    id="wp-comment-cookies-consent"
                    name="wp-comment-cookies-consent"
                    type="checkbox"
                    value="yes"
                  />{' '}
                  <label for="wp-comment-cookies-consent">
                    Lưu tên, email và trang web của tôi trong trình duyệt này để
                    lần sau tôi bình luận.
                  </label>
                </p>
                <p className="form-submit">
                  <input
                    name="submit"
                    type="submit"
                    id="submit"
                    className="submit"
                    value="Post Comment"
                  />{' '}
                </p>
              </form>{' '}
            </div>
          </div>
        </div>
      </div>

      <div className="main-sidebar">
        <div className="widget-block">
          <h3 className="widget-title">Chuyên mục</h3>
          <ul className="right-menu">
            <li
              id="menu-item-66"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-66"
            >
              <NavLink to={'/donate'}>
                <a>ỦNG HỘ NHƯ CHƯA HỀ CÓ CUỘC CHIA LY</a>
              </NavLink>
            </li>
            <li
              id="menu-item-67"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67"
            >
              <NavLink to={'/contact'}>
                <a>LIÊN HỆ</a>
              </NavLink>
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
              <li className="contact-mail">
                Hòm thư 005 - Bưu điện trung tâm Sài Gòn, Tp. Hồ Chí Minh
              </li>
              <li className="contact-email">
                Email:{' '}
                <a href="/cdn-cgi/l/email-protection#b3c7dadeddd4c6dcdac7dbd2ddf3dbd2cadfd6ddc7dad6ddd49dc5dd">
                  <span
                    className="__cf_email__"
                    data-cfemail="7004191d1e17051f190418111e301811091c151e0419151e175e061e"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget-block">
          <h3 className="widget-title">Zalo Official Account</h3>
          {}
        </div>
      </div>
      <Zalo></Zalo>
    </div>
  );
}

export default TvShowDetails;
