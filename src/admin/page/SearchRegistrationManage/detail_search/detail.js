import styles from "./detail.module.css"

function Detail_Search() {

    return (
        <div className={styles['contents']}>
            <div className={styles['header_content']}>
                <div className={styles['header_Title1']}>
                    <h3 className={styles['header_Title']}>A. Thông tin người đăng kí</h3>
                    <h4 className={styles['mid_Title']}>Họ và tên: Nguyễn Thị Phương Dung</h4>
                    <h4 className={styles['mid_Title']}>Năm sinh: 1989</h4>
                    <h4 className={styles['mid_Title']}>Giới tính: Nữ</h4>
                    <h4 className={styles['mid_Title']}>Địa chỉ: Đà Nẵng</h4>
                    <h4 className={styles['mid_Title']}>Email: dung@gmail.com</h4>
                    <h4 className={styles['mid_Title']}>Điện thoại: 0135xxxxxx</h4>
                    <h4 className={styles['mid_Title']}>CMND: 191xxxxxx</h4>
                </div>
                <div className={styles['header_Title2']}>
                    <h3 className={styles['header_img']}>Ảnh/tài liệu kèm theo</h3>
                    <img width="60%"
                        height="130px"
                        src="https://vaithuhayho.com/wp-content/uploads/2021/03/anh-nen-dep-5.jpg"></img>
                </div>
            </div>
            <div className={styles['header_Title']}>
                <h3 className={styles['header_Title']}>B. Thông tin người thất lạc</h3>
                <h4 className={styles['mid_Title']}>Họ và tên: Nguyễn Thị Phương Dung</h4>
                <h4 className={styles['mid_Title']}>Năm sinh: 1989</h4>
                <h4 className={styles['mid_Title']}>Quê quán: Nữ</h4>
                <h4 className={styles['mid_Title']}>Tên cha: Nguyễn Văn Hải</h4>
                <h4 className={styles['mid_Title']}>Tên mẹ: Hoàng Thị Oanh</h4>
                <h4 className={styles['mid_Title']}>Tên anh chị em: Nguyễn Thị Hà</h4>
                <h4 className={styles['mid_Title']}>Tiểu sử vắn tắt: Bố mẹ là hai cụ Bùi Năng, Bùi Thị Lạc mất sớm, ông Triết sống với anh trai là Bùi Thương, quê Ninh Thuận.</h4>
            </div>
            <div className={styles['header_Title']}>
                <h3 className={styles['header_Title']}>C. Hoàn cảnh thất lạc</h3>
                <h4 className={styles['mid_Title']}>Địa điểm: Nha Trang</h4>
                <h4 className={styles['mid_Title']}>Năm: 1989</h4>
                <h4 className={styles['mid_Title']}>Lý do thất lạc: Khoảng năm 1970, ông Tiết bị bắt đi lính tại Phan Rang. Tại đây, chị dâu là bà Giác có đến thăm ông 1 lần. Lần 2 khi bà Giác đến thăm thì .</h4>
            </div>
            <div className={styles['header_Title']}>
                <h3 className={styles['header_Title']}>D. Tìm kiếm</h3>
                <h4 className={styles['mid_Title']}>Quá trình tìm kiếm: Đã tìm kiếm khắp khu vực Nha Trang và về cả quê nhà là Ninh Thuận để tìm kiếm thêm nhưng không thu được kết quả khả quan.</h4>
            </div>
        </div>

    );
}

export default Detail_Search;