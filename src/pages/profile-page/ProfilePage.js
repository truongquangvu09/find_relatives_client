import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './profile.module.css'
import Sidebar from '../../utils/sidebar/index';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <div className={style["wrapper"]}>
      <div className={style["profile-list"]}>
        <Outlet />
      </div>
      <div className={style["sidebar"]}>
        <button className={style["large-button"]}>
          <Link to="" >
            Đăng ký tìm người thân
          </Link>
        </button>
        <div class="widget-block">
          <h3 class="widget-title">Tìm kiếm nâng cao</h3>
          <form class="advanced-search" action="/profiles">
            <p>Có thể bạn đang được ai đó mong gặp lại, hoặc người bạn cần tìm đã đăng ký với NCHCCCL. Hãy kiểm tra!</p>
            <input name="n" placeholder="Họ tên người cần tìm" value="" />
            <input name="y" placeholder="Năm sinh" value="" />
            <input name="a" placeholder="Quê quán" value="" />
            <input name="s" placeholder="Tên cha, mẹ, anh, chị em" value="" />
            <p>(*) Nhập thông tin bằng Tiếng Việt có dấu, nhập số cho năm sinh và năm thất lạc, quê quán, nhập tên địa danh cũ nếu nhớ</p>
            <input class="submit" type="submit" value="Tìm kiếm" />
          </form>
        </div>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}
