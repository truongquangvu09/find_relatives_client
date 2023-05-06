import styles from "./detail.module.css"

function Detail_Search() {
    
    return (
        
            <table className={styles['detail_table']}>
                <tr>
                    <th>ID</th>
                    <td>1</td>
                    <th>Tên Mẹ</th>
                    <td>Võ thị B</td>
                </tr>
                <tr>
                    <th>Tên người thất lạc</th>
                    <td>Nguyễn A</td>
                    <th>Tên anh chị em</th>
                    <td>Nguyễn Thị Hạnh</td>
                </tr>
                <tr>
                    <th>Giới tính</th>
                    <td>Nam</td>
                    <th>Tiểu sử</th>
                    <td>Thất lạc nhiều năm</td>
                </tr>
                <tr>
                    <th>Năm sinh</th>
                    <td>1949</td>
                    <th>Năm thất lạc</th>
                    <td>1945</td>
                </tr>
                <tr>
                    <th>Quê quán</th>
                    <td>Sơn trà,Đà nẵng</td>
                    <th>Địa điểm thất lạc</th>
                    <td>Ba Đình</td>
                </tr>
                <tr>
                    <th>Tên cha</th>
                    <td>1</td>
                    <th>Hình ảnh</th>
                    <td>ABC</td>
                </tr>
                
            </table>
        
    );
}

export default Detail_Search;