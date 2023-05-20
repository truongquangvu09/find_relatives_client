import React from 'react';
import styles from './profile.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userData = useSelector((state) => state.user.userData);
  const { report_name, email, type, createdAt } = userData.user;
  console.log(userData.message);
  const handleLogout = () => {
    toast.success('Đăng xuất thành công');
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  };

  return (
    <>
      <ToastContainer autoClose={1500} />
      <div className={styles.profile}>
        <div className={styles.field}>
          <label>Name:</label>
          <span>{report_name}</span>
        </div>
        <div className={styles.field}>
          <label>Email:</label>
          <span>{email}</span>
        </div>
        <div className={styles.field}>
          <label>Type:</label>
          <span>{type}</span>
        </div>
        <div className={styles.field}>
          <label>Created At:</label>
          <span>{createdAt}</span>
        </div>
        <div className={styles.btn_logout}>
          <button className={styles.logout} onClick={handleLogout}>
            Đăng xuất
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
