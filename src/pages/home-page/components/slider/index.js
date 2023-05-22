import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Item from './items/item';
import style from './slider.module.css';
import Zalo from '../../../Zalo';
import { setPostSearchData } from '../../../../redux/Slice/postSearchSlice';

function Slider() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/profile');
    window.scroll(0, 0);
  };

  const handleRegister = () => {
    navigate('/searchRegistration');
    window.scroll(0, 0);
  };

  const [infoSearch, setInfoSearch] = useState({
    people_name: '',
  });

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setInfoSearch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const params = {};
    if (infoSearch.people_name) {
      params.people_name = infoSearch.people_name;
    }
    try {
      const result = await axios.get(
        'http://localhost:8080/api/v1/people/people-advancedSearch',
        {
          params,
        }
      );
      if (result) {
        dispatch(setPostSearchData(result.data));
        navigate('/profile');
        window.scrollTo(0, 0);
      }
    } catch (error) {}
  };

  return (
    <div className={style['slider']}>
      <div className={style['click-title']}>
        <h2 className={style['click-1']}>
          <a href="#">Truyền Hình</a>
        </h2>
        <h2 className={style['click-2']}>
          <a href="#">Tin tức</a>
        </h2>
      </div>
      <div className={style['TV-show']}>
        <div className={style['left-show']}>
          <div className={style['featured-video']}>
            <iframe
              width="100%"
              height="420"
              src="https://www.youtube.com/embed/1QLjTEC89_I?autohide=1&amp;controls=1&amp;showinfo=0"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <h3>
            <a href="#">NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM</a>
          </h3>
          <p className={style['sub-title']}>
            Ngày phát sóng: 6/3/2023 | 0 comment
          </p>
          <ul className={style['link-sub']}>
            <li>
              <a href="#">Xem những chương trình đã phát</a>
            </li>
            <li>
              <a href="#">Xem các thông báo đã phát</a>
            </li>
          </ul>
        </div>

        <div className={style['right-show']}>
          <div className={style['featured-video']}>
            <div className={style['featured-new']} href="#">
              <img
                width="100%"
                height="225"
                src="https://haylentieng.vn/wp-content/uploads/2018/07/logo-300x200.jpg"
              ></img>
            </div>
            <div className={style['feature-info']}>
              <li className={style['featured-news-bot']}>
                <a className={style['featured-title']} href="#">
                  Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại
                  Ngân hàng quân đội MBBank – số tài khoản 2700
                </a>
                <span className={style['featured-news-date']}>07/03/23</span>
              </li>
              <li className={style['featured-news-bot']}>
                <a className={style['featured-title']} href="#">
                  Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại
                  Ngân hàng quân đội MBBank – số tài khoản 2700
                </a>
                <span className={style['featured-news-date']}>07/03/23</span>
              </li>
              <li className={style['featured-news-bot']}>
                <a className={style['featured-title']} href="#">
                  Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại
                  Ngân hàng quân đội MBBank – số tài khoản 2700
                </a>
                <span className={style['featured-news-date']}>07/03/23</span>
              </li>
              <li className={style['featured-news-bot']}>
                <a className={style['featured-title']} href="#">
                  Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại
                  Ngân hàng quân đội MBBank – số tài khoản 2700
                </a>
                <span className={style['featured-news-date']}>07/03/23</span>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className={style['header-profile']}>
        <p>
          Có thể bạn đang được ai đó mong gặp lại, hoặc một ai đó bạn quen đang
          được người thân tìm kiếm. Hãy kiểm tra trong cơ sở dữ liệu của chúng
          tôi...
        </p>
        <div className={style['header-mid']}>
          <form className={style['form-search']} onSubmit={handleSubmit}>
            <div className={style['header-left']}>
              <input
                name="people_name"
                value={infoSearch.people_name}
                onChange={handleChange}
                placeholder=" Nhập người thân cần tìm"
              ></input>
            </div>
            <div className={style['header-right']}>
              <input type="submit" value="Tìm kiếm"></input>
            </div>
          </form>
        </div>
        <div className={style['right']}>
          <button className={style['btn-register']} onClick={handleRegister}>
            Đăng kí tìm người thân
          </button>
        </div>
      </div>
      <div className={style['imagess']}>
        <Item></Item>
      </div>
      <div className={style['view-all']}>
        <a href="#" onClick={handleClick}>
          Xem toàn bộ
        </a>
      </div>
      <Zalo></Zalo>
    </div>
  );
}

export default Slider;
