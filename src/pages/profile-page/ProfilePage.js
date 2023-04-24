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
        {/* <div className={style["search-high"]}>
          <h3 className={style["search"]}>Tìm kiếm nâng cao</h3>
          <form className={style["advanced-search"]}>
            <p className={style["title"]}>Có thể bạn đang được ai đó mong gặp lại, hoặc người bạn cần tìm đã đăng ký với NCHCCCL. Hãy kiểm tra!</p>
          </form>
        </div> */}
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}
