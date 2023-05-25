import styles from './detail.module.css';
import { useSelector } from 'react-redux';

function Detail_Search() {
  const searchRegistration = useSelector(
    (state) => state.searchRegistration.searchRegistrationData
  );
  console.log({ searchRegistration });

  return (
    <div className={styles['contents']}>
      <div className={styles['header_content']}>
        <div className={styles['header_Title1']}>
          <h3 className={styles['header_Title']}>A. Thông tin người đăng kí</h3>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Họ và tên:</span>{' '}
            {searchRegistration?.report_name}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Năm sinh:</span>{' '}
            {searchRegistration?.report_birthday.substring(0, 4)}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Giới tính:</span>{' '}
            {searchRegistration?.report_gender}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Địa chỉ:</span>{' '}
            {searchRegistration?.report_address}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Email:</span>{' '}
            {searchRegistration?.email}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Điện thoại:</span>{' '}
            {searchRegistration?.phone}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>CCCD:</span>{' '}
            {searchRegistration?.cccd}
          </h4>
        </div>
        <div className={styles['header_Title2']}>
          <h3 className={styles['header_img']}>Ảnh/tài liệu kèm theo</h3>
          <img
            width="205px"
            height="200px"
            src={searchRegistration.people_image}
          ></img>
        </div>
      </div>
      <div className={styles['header_Title']}>
        <h3 className={styles['header_Title']}>B. Thông tin người thất lạc</h3>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Họ và tên:</span>{' '}
          {searchRegistration?.people_name}
        </h4>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Năm sinh:</span>{' '}
          {searchRegistration?.people_birthday.substring(0, 4)}
        </h4>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Quê quán:</span>{' '}
          {searchRegistration?.people_address}
        </h4>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Tên cha:</span>{' '}
          {searchRegistration?.dad_name}
        </h4>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Tên mẹ:</span>{' '}
          {searchRegistration?.mom_name}
        </h4>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Tên anh chị em:</span>{' '}
          {searchRegistration?.coal_people_name}
        </h4>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Tiểu sử vắn tắt:</span>{' '}
          {searchRegistration?.brief_biography}
        </h4>
      </div>
      <div className={styles['header_Title']}>
        <h3 className={styles['header_Title']}>C. Hoàn cảnh thất lạc</h3>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Địa điểm:</span>{' '}
          {searchRegistration?.last_seen}
        </h4>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Năm:</span>{' '}
          {searchRegistration?.date_missing.substring(0, 4)}
        </h4>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Lý do thất lạc:</span>{' '}
          {searchRegistration?.lost_reason}
        </h4>
      </div>
      <div className={styles['header_Title']}>
        <h3 className={styles['header_Title']}>D. Tìm kiếm</h3>
        <h4 className={styles['mid_Title']}>
          {searchRegistration?.searching_process}
        </h4>
      </div>
    </div>
  );
}

export default Detail_Search;
