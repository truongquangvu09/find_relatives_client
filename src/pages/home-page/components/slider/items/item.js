import './item.module.css';
import style from './item.module.css';

function Item() {
    return ( 
        <div className={style["profiles"]}>
            <a href='' title='Chị Nguyễn Thị Phương Dung tìm chú Bùi Tiết sinh năm 1949, mất tin tức khoảng năm 1970, tại Nha Trang. Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận. Khoảng năm 1970, ông Tiết bị bắt đi lính tại […]'>
                <img src="https://vaithuhayho.com/wp-content/uploads/2021/03/anh-nen-dep-5.jpg" width="100%" height="180"/>
            </a>
            <span> <b>Mã số hồ sơ:</b>  MS327462</span>
            <h3>Nguyễn Thị Dung tìm chú bùi tuyết</h3>
        </div>  
     );
}

export default Item;