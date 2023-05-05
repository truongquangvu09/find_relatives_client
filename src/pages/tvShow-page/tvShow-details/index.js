import React from 'react';
import './style.css';
function TvShowDetails() {
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
          <h1 className="single-title">
            NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM
          </h1>
          <p className="sub-title">Ngày phát sóng: 6/3/2023</p>

          <div id="comments" className="comments-area">
            <div id="respond" className="comment-respond">
              <h3 id="reply-title" className="comment-reply-title">
                Leave a Reply{' '}
                <small>
                  <a>Cancel reply</a>
                </small>
              </h3>
              <form>
                <p className="comment-notes">
                  <span id="email-notes">
                    Your email address will not be published.
                  </span>{' '}
                  Required fields are marked <span className="required">*</span>
                </p>
                <p className="comment-form-comment">
                  <label for="comment">Comment</label>
                  <textarea
                    id="comment"
                    name="comment"
                    cols="45"
                    rows="8"
                    maxlength="65525"
                    required="required"
                  ></textarea>
                </p>
                <p className="comment-form-author">
                  <label for="author">
                    Name <span className="required">*</span>
                  </label>{' '}
                  <input
                    id="author"
                    name="author"
                    type="text"
                    value=""
                    size="30"
                    maxlength="245"
                    required="required"
                  ></input>
                </p>
                <p className="comment-form-email">
                  <label for="email">
                    Email <span className="required">*</span>
                  </label>{' '}
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value=""
                    size="30"
                    maxlength="100"
                    aria-describedby="email-notes"
                    required="required"
                  ></input>
                </p>
                <p className="comment-form-url">
                  <label for="url">Website</label>{' '}
                  <input
                    id="url"
                    name="url"
                    type="text"
                    value=""
                    size="30"
                    maxlength="200"
                  />
                </p>
                <p className="comment-form-cookies-consent">
                  <input
                    id="wp-comment-cookies-consent"
                    name="wp-comment-cookies-consent"
                    type="checkbox"
                    value="yes"
                  />{' '}
                  <label for="wp-comment-cookies-consent">
                    Save my name, email, and website in this browser for the
                    next time I comment.
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
                  <input
                    type="hidden"
                    name="comment_post_ID"
                    value="70440"
                    id="comment_post_ID"
                  />
                  <input
                    type="hidden"
                    name="comment_parent"
                    id="comment_parent"
                    value="0"
                  />
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
              <a href="https://haylentieng.vn/ungho/">
                ỦNG HỘ NHƯ CHƯA HỀ CÓ CUỘC CHIA LY
              </a>
            </li>
            <li
              id="menu-item-67"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67"
            >
              <a href="https://haylentieng.vn/lien-he/">LIÊN HỆ</a>
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
    </div>
  );
}

export default TvShowDetails;
