import Item from './items/item';
import style from './slider.module.css';
import Zalo from '../../../Zalo';

function Slider() {
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
          <div className={style['header-left']}>
            <input placeholder=" Nhập người thân cần tìm"></input>
          </div>
          <div className={style['header-right']}>
            <input type="submit" value="Tìm kiếm"></input>
          </div>
        </div>
        <div className={style['right']}>
          <button>Đăng kí tìm người thân</button>
        </div>
      </div>
      <div className={style['imagess']}>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
      <div className={style['view-all']}>
        <a href="#">Xem toàn bộ</a>
      </div>
      <Zalo></Zalo>
    </div>
  );
}

export default Slider;
