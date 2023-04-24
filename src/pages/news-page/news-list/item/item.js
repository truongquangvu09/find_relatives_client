import './item.css';
import NewsDetails from '../../news-details/index';

function Item() {
  return (
    <div className="new">
      <h2 className="list-title">
        <a href={NewsDetails}>Thông báo : Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại Ngân hàng quân đội MBBank – số tài khoản 2700</a>
      </h2>
      <div className='sub-content'>
        <div class="content-new-left">
          <a href={<NewsDetails></NewsDetails>} class="block-image">
            <img className='img-item' src="https://haylentieng.vn/wp-content/uploads/2023/03/z4163339796552_4a45b51f7f238d548fac26faedd77c9b-300x200.jpg" alt="" />
          </a>
        </div>
        <div class="content-right">
          <p class="sub-title">(07/03/2023)</p>
          <p class="list-excerpt">Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN
            tại Ngân hàng quân đội MBBank – số tài khoản 2700 2700 cũng là số cuộc đoàn tụ
            trên hành trình 16 năm Tìm kiếm và Kết nối. Và còn hơn 40.000 hồ sơ khác vẫn
            đang tiếp tục triển khai tìm […]</p>
        </div>
      </div>
    </div>
  );
}

export default Item;