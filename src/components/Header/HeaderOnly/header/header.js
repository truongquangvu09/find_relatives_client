import './header.css';
import logo from '../images/logo.png';   
// run first npm install --save-dev @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    return (
        <div className="header">
            <div className="header-top">
                <div className='header-top-left'>
                    <a href="#">
                        <img src={logo}  alt=""/>
                    </a>
                </div>
                <ul className="menu">
                    <li>Trang chủ</li>
                    <li>Tìm người thân</li>
                    <li>Truyền hình</li>
                    <li>Tin tức</li>
                </ul>
            </div>
            <div className='header-bottom'>
                <p className="tagline">Hoạt động Thiện nguyện Tìm kiếm và Đoàn tụ Người thân Miễn phí!</p>
                <form action="" className="search-news">
                    <input type="text" name="" id="" placeholder="Tìm kiếm tin tức..."/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
            
        </div>
    );
}

export default Header;