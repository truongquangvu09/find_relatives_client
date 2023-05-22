import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as commentServices from '../../../api/comments';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';
import style from './index.module.css';

function ProfileDetails() {
  const postData = useSelector((state) => state.post.postData);
  const userData = useSelector((state) => state.user.userData);
  console.log(userData);

  const [comment, setComment] = useState({
    comment_text: '',
    report_id: '',
    post_id: postData.id,
    tvShow_id: '',
    news_id: '',
  });

  const [commentList, setCommentList] = useState([]);
  console.log({ commentList });

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
        comment.post_id,
        null,
        null,
        userData.token
      );
      setComment((prevState) => ({
        ...prevState,
        comment_text: '',
      }));
      setCommentList([...commentList, newComment]);
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error('bạn chưa đăng nhập');
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const get = async () => {
      try {
        const commentList = await commentServices.getComment();
        const filteredComments = commentList.filter(
          (item) => item.Post.id === postData.id
        );
        setCommentList(filteredComments);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    get();
  }, [postData]);

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

            <div className={style['comment-area']}>
              <h2 className="comment-title">responses</h2>
              {commentList.map((item, index) => {
                return (
                  <>
                    <ul className={style['comment-list']} key={index}>
                      <li className="comment">
                        <div className="comment-body">
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
            {userData ? (
              <div className="comment-block">
                <div id="respond" className="comment-respond">
                  <h3>Để lại một câu trả lời</h3>
                  <form action="" onSubmit={handleSubmit}>
                    <p className="comment-note">
                      <span>Địa chỉ email của bạn sẽ không được công bố.</span>
                      Các trường bắt buộc được đánh dấu
                      <span>*</span>
                    </p>
                    <p className="comment-form">
                      <label className="title-comment" for="comment">
                        Comment
                      </label>
                      <span>*</span>
                      <textarea
                        name="comment_text"
                        id=""
                        cols="45"
                        rows="8"
                        maxlength="65525"
                        value={comment.comment_text}
                        onChange={handleChange}
                      ></textarea>
                    </p>
                    <p className="comment-form-save">
                      <input type="checkbox" />
                      <label for="form-save">
                        Lưu tên, email và trang web của tôi trong trình duyệt
                        này để lần sau tôi bình luận.
                      </label>
                    </p>
                    <p className="form-submit">
                      <input type="submit" value="Post Comment" />
                    </p>
                  </form>
                </div>
              </div>
            ) : (
              <div className="comment-block">
                <p>Vui lòng đăng nhập để đăng bình luận</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
