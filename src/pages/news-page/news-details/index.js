import React, { useState, useEffect } from 'react';
import './newDetail.css';
import Sidebar from '../../../utils/sidebar/index';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Zalo from '../../Zalo';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import * as commentServices from '../../../api/comments';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewsDetails() {
  const newsData = useSelector((state) => state.news.newsData);
  const userData = useSelector((state) => state.user.userData);

  const [comment, setComment] = useState({
    comment_text: '',
    report_id: '',
    post_id: '',
    tvShow_id: '',
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
        null,
        comment.news_id,
        userData.token
      );

      setComment((prevState) => ({
        ...prevState,
        comment_text: '',
      }));

      const result = await commentServices.getComment();
      const filteredComments = result.filter(
        (item) => item.news_id === newsData.id
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
          (item) => item.news_id === newsData.id
        );
        setCommentList(filteredComments);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    get();
  }, [newsData]);

  useEffect(() => {
    if (newsData) {
      setComment((prevState) => ({
        ...prevState,
        news_id: newsData.id,
      }));
    }
  }, [newsData]);

  return (
    <div className="container">
      <div className="NewDetail-content">
        <div className="newsDetail">
          <h3 className="title-block">
            <a href="">Thông báo</a>
          </h3>
          <div className="main-container-newdetail">
            <div className="content-block-newdetail">
              <h1 className="title-content">{newsData?.content_text}</h1>
              <p className="sub-title">
                Ngày đăng: {newsData?.createdAt} | Lượt xem: 424
              </p>
              <div className="newdetail-block-image">
                <img clasName="img-newsdetail" src={newsData?.image} alt="" />
              </div>
              <p className="newDetail-p">
                Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại
                Ngân hàng quân đội MBBank – số tài khoản 2700
              </p>
              <p className="newDetail-p">
                2700 cũng là số cuộc đoàn tụ trên hành trình 16 năm Tìm kiếm và
                Kết nối. Và còn hơn 40.000 hồ sơ khác vẫn đang tiếp tục triển
                khai tìm kiếm.
              </p>
              <p className="newDetail-p">
                <strong>Ngân hàng Quân đội MBBank – Số tài khoản: 2700</strong>
              </p>
              <p className="newDetail-p">
                Các chi tiêu hàng tháng sẽ được báo cáo trên Fanpage @nchcccl,
                cũng như trong các số phát sóng định kỳ.
              </p>
              <p className="newDetail-p">Trân trọng, </p>
              <p className="newDetail-p">Đội ngũ NCHCCCL</p>

              <div className="comment-area">
                <h2 className="comment-title">
                  {commentList.length} responses
                </h2>
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

              <div className="comment-block">
                <div id="respond" className="comment-respond">
                  <h3>Để lại một câu trả lời</h3>
                  <form action="" onSubmit={handleSubmit}>
                    <p className="comment-note">
                      <span>
                        Địa chỉ email của bạn sẽ không được công bố.Các trường
                        bắt buộc được đánh dấu*
                      </span>
                    </p>
                    <p className="comment-form">
                      <label className="title-comment" for="comment">
                        Comment *
                      </label>
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
            </div>
            <div className="sidebar-newdetail">
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
      <Zalo></Zalo>
    </div>
  );
}

export default NewsDetails;
