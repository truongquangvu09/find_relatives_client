import React from 'react';
import style from './AddPosts.module.css';
// upload-button
import { Button } from '@mui/material';
//upload-button-image
import UploadImage from '../uploadImg';

function AddPosts() {
  return (
    <div className={style['container']}>
      <p className={style['top-posts']}>Add Posts</p>
      <div className={style['bottom-posts']}>
        <div className={style['content']}>
          <div className={style['title-box']}>
            <p className={style['title']}>Post-title</p>
            <input
              type="text"
              placeholder="Nhập tiêu đề bài đăng..."
              className={style['input-title']}
            />
          </div>
          <div className={style['title-box']}>
            <p className={style['title']}>SearchRegistrations-id</p>
            <input
              type="text"
              placeholder="Nhập id đơn đăng kí..."
              className={style['input-title']}
            />
          </div>
          <div className={style['title-box']}>
            <p className={style['title']}>People-id</p>
            <input
              type="text"
              placeholder="Nhập id người thất lạc..."
              className={style['input-title']}
            />
          </div>
          <div className={style['title-box']}>
            <p className={style['title']}>LostSituation-id</p>
            <input
              type="text"
              placeholder="Nhập id địa điểm thất lạc..."
              className={style['input-title']}
            />
          </div>
        </div>
        <div className={style['content-image']}>
          <div className={style['button-image']}>
            <input type="file"></input>
          </div>
        </div>
      </div>
      <div className={style['button-save']}>
        <Button variant="contained">Tạo Mới</Button>
      </div>
    </div>
  );
}

export default AddPosts;
