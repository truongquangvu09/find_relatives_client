import styles from './detailPost.module.css';
import { useSelector } from 'react-redux';

function Detail_Post() {
  const postDatas = useSelector((state) => state.post.postData);
  const postData = postDatas.Search_registration;

  return (
    <div className={styles['contents']}>
      <div className={styles['header_content']}>
        <div className={styles['header_Title1']}>
          <h3 className={styles['header_Title']}>{postDatas.post_title}</h3>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Họ và tên:</span>{' '}
            {postData?.people_name}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Năm sinh:</span>{' '}
            {postData?.people_birthday.substring(0, 4)}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Quê quán:</span>{' '}
            {postData?.people_address}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Tên cha:</span>{' '}
            {postData?.dad_name}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Tên mẹ:</span>{' '}
            {postData?.mom_name}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Tên anh chị em:</span>{' '}
            {postData?.coal_people_name}
          </h4>
          <h4 className={styles['mid_Title']}>
            <span className={styles['bold-title']}>Tiểu sử vắn tắt:</span>{' '}
            {postData?.brief_biography}
          </h4>
        </div>
        <div className={styles['header_Title2']}>
          <h3 className={styles['header_img']}>Ảnh/tài liệu kèm theo</h3>
          <img width="205px" height="200px" src={postData.people_image}></img>
        </div>
      </div>
      <div className={styles['header_Title']}></div>
      <div className={styles['header_Title']}>
        <h3 className={styles['header_Title']}>Hoàn cảnh thất lạc</h3>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Địa điểm:</span>{' '}
          {postData?.last_seen}
        </h4>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Năm:</span>{' '}
          {postData?.date_missing.substring(0, 4)}
        </h4>
        <h4 className={styles['mid_Title']}>
          <span className={styles['bold-title']}>Lý do thất lạc:</span>{' '}
          {postData?.lost_reason}
        </h4>
      </div>
      <div className={styles['header_Title']}>
        <h3 className={styles['header_Title']}>Tìm kiếm</h3>
        <h4 className={styles['mid_Title']}>{postData?.searching_process}</h4>
      </div>
    </div>
  );
}

export default Detail_Post;
