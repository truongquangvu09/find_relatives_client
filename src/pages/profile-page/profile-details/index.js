import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './index.module.css';

function ProfileDetails() {
  const postData = useSelector((state) => state.post.postData);

  return (
    <div className={style.main}>
      <div className={style['main-content']}>
        <h1 className={style['head-title']}>Tìm người thân</h1>
        <div className={style.bodys}>
          <div className={style['header-body']}>
            <div className={style['profile-lefts']}>
              <h1 className={style.title}>
                <Link
                  to="/profile"
                  title={postData?.Search_registration?.brief_biography}
                >
                  MS{postData?.id}: {postData?.post_title}
                </Link>
              </h1>
              <p className={style.title}>
                Họ và tên: {postData?.Search_registration?.people_name}
              </p>
              <p className={style.title}>
                Năm sinh:{' '}
                {postData?.Search_registration?.people_birthday?.substring(
                  0,
                  4
                )}
              </p>
              <p className={style.title}>
                Tên cha: {postData?.Search_registration?.dad_name}
              </p>
              <p className={style.title}>
                Tên mẹ: {postData?.Search_registration?.mom_name}
              </p>
              <p className={style.title}>
                Tên anh chị em:{' '}
                {postData?.Search_registration?.coal_people_name}
              </p>
              <p className={style.title}>
                Năm thất lạc:{' '}
                {postData?.Search_registration?.date_missing?.substring(0, 4)}
              </p>
            </div>
            <div className={style['profile-right']}>
              <img
                src={postData?.Search_registration?.people_image}
                width="100%"
                height="200"
              />
            </div>
          </div>
          <div className={style['body-contents']}>
            <div className={style.pictures}>
              <img
                src={postData?.Search_registration?.people_image}
                width="100%"
                height="200"
              />
              <p className={style.titles}>
                {postData?.Search_registration?.people_name}
              </p>
            </div>
            <div className={style.content}>
              <p className={style.title}>
                {postData?.Search_registration?.brief_biography}
              </p>
              <p className={style.title}>
                {postData?.Search_registration?.lost_reason}
              </p>
              <p className={style.title}>Như chưa hề có cuộc chia ly…”:</p>
            </div>
            <div className={style.contact}>
              <p className={style.title}>
                – Hòm thư 005, Bưu điện Trung tâm Sài Gòn, TPHCM
              </p>
              <p className={style.title}>
                – Hòm thư 005, Bưu điện Trung tâm Sài Gòn, TPHCM
              </p>
              <p className={style.title}>
                – Youtube: “NHƯ CHƯA HỀ CÓ CUỘC CHIA LY – OFFICIAL”:
                www.youtube.com/NhuchuahecocuocchialyOfficial
              </p>
              <p className={style.title}>
                [Hoạt động thiện nguyện Tìm kiếm, Kết nối và Đoàn tụ thân nhân
                NHƯ CHƯA HỀ CÓ CUỘC CHIA LY… do Công ty TNHH Xã hội bằng trực
                tuyến P.A Việt Nam tổ chức]
              </p>
              <p className={style.title}>
                -Nếu ai có thông tin gì về trường hợp này, xin vui lòng liên lạc
                với Chương trình "Như chưa hề có cuộc chia ly…" hoặc để lại bình
                luận phía dưới.
              </p>
              <p className={style.title}>- Điện thoại: (08) 6264 7777.</p>
              <p className={style.title}>
                - Email: timnguoithan@helpfindlostlovedones.vn.
              </p>
            </div>
            <div className="comment-block">
              <div id="respond" className="comment-respond">
                <h3>Leave a Reply</h3>
                <form action="">
                  <p className="comment-note">
                    <span>Your email address will not be published.</span>
                    Required fields are marked
                    <span>*</span>
                  </p>
                  <p className="comment-form">
                    <label className="title-comment" for="comment">
                      Comment
                    </label>
                    <textarea
                      name="comment"
                      id=""
                      cols="45"
                      rows="8"
                      maxlength="65525"
                    ></textarea>
                  </p>
                  <p className="comment-name">
                    <label className="title-comment" for="name">
                      Name*
                    </label>
                    <input className="text" type="text" maxlength="245" />
                  </p>
                  <p className="comment-email">
                    <label className="title-comment" for="Email">
                      Email*
                    </label>
                    <input className="text" type="text" maxlength="245" />
                  </p>
                  <p className="comment-website">
                    <label className="title-comment" for="website">
                      Website
                    </label>
                    <input className="text" type="text" maxlength="245" />
                  </p>
                  <p className="comment-form-save">
                    <input type="checkbox" />
                    <label for="form-save">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
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
    </div>
  );
}

export default ProfileDetails;
