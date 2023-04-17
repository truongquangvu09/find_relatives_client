import Item from "./items/item";
import './index.css';
function Slider() {
    return ( 
        <div className="slider">
            <div className="TV-show">
                <div className="left-show">
                    <h2 className="click">
                        <a href="#">Truyền Hình</a>
                    </h2>
                    <div className="featured-video">
                        <iframe width="100%" height="419" src="https://www.youtube.com/embed/1QLjTEC89_I?autohide=1&amp;controls=1&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
                    </div>
                    <h3>
                        <a href="#">NCHCCCL 162: CON TRỐN ĐÂY SAO CHẲNG THẤY AI TÌM</a>
                    </h3>
                    <p className="sub-title">Ngày phát sóng: 6/3/2023 | </p>
                    <ul className="link-sub" >
                        <li>
                            <a href="#">Xem những chương trình đã phát</a>
                        </li>
                        <li>
                            <a href="#">Xem các thông báo đã phát</a>
                        </li>
                    </ul>

                </div>
                <div className="right-show">
                    <h2 className="click">
                        <a href="#">Tin tức</a>
                    </h2>
                    <div className="featured-video">
                        <ul>
                            <a className="featured-new" href="#">
                                <img width="415" height="200" src="https://vaithuhayho.com/wp-content/uploads/2021/03/anh-nen-dep-5.jpg"></img>
                            </a>
                            <li className="featured-news-1">
                                <a className="featured-title" href="#">
                                    Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700
                                </a>
                                <span className="featured-news-date">07/03/23</span>
                            </li>
                            <li className="featured-news-2">
                                <a className    ="featured-title" href="#">
                                    Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700
                                </a>
                                <span className="featured-news-date">07/03/23</span>
                            </li>
                            <li className="featured-news-3">
                                <a className="featured-title" href="#">
                                    Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700
                                </a>
                                <span className="featured-news-date">07/03/23</span>
                            </li>
                            <li className="featured-news-4">
                                <a className="featured-title" href="#">
                                    Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700
                                </a>
                                <span className="featured-news-date">07/03/23</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-profile">
                <p>Có thể bạn đang được ai đó mong gặp lại, hoặc một ai đó bạn quen đang được người thân tìm kiếm. Hãy kiểm tra trong cơ sở dữ liệu của chúng tôi...</p>
                <div className="header-mid">
                    <div className="header-left">
                        <input placeholder='Nhập người thân cần tìm'></input>
                    </div>
                    <div className="header-right">
                        <input type="submit" value="Tìm kiếm"></input>
                    </div>
                </div>
                <div className="right">
                    <button>Đăng kí tìm người thân</button>
                </div>
            </div>
            <div className="image">
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </div>
            <div className="view-all">
                <a href="#">Xem toàn bộ</a>
            </div>
        </div> 
    );
}

export default Slider;