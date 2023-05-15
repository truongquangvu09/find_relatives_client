import React, { useState } from 'react';
import styles from './Register.module.scss';
import * as reportServices from '../../../../../../api/report';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [userInfo, setUserInfo] = useState({
    report_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isConfirmed: false,
  });

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
      isConfirmed:
        name === 'confirmPassword'
          ? prevState.password === value
          : prevState.isConfirmed,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!userInfo.isConfirmed) {
        toast.error('Mật khẩu không khớp');
        return;
      } else {
        const register = await reportServices.create(
          userInfo.report_name,
          userInfo.email,
          userInfo.password
        );
        if (register) {
          toast.success('Đăng kí thành công');
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        } else {
          toast.error('Đăng kí thất bại ');
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <ToastContainer autoClose={1500} />
      <div className={styles['register']}>
        <div className={styles['register-form']}>
          <div className={styles['Form-title']}>Đăng kí tài khoản</div>
          <form action="#" onSubmit={handleSubmit}>
            <div className={styles['input-box']}>
              <span className={styles['icon']}></span>
              <input
                className={styles['input-register']}
                type="text"
                name="report_name"
                id="report_name"
                onChange={handleInputChange}
                value={userInfo.report_name}
                required
              ></input>
              <label className={styles['Label']}>Username</label>
            </div>
            <div className={styles['input-box']}>
              <span className={styles['icon']}></span>
              <input
                className={styles['input-register']}
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
                value={userInfo.email}
                required
              ></input>
              <label className={styles['Label']}>Email</label>
            </div>
            <div className={styles['input-box']}>
              <span className={styles['icon']}></span>
              <input
                className={styles['input-register']}
                type="password"
                name="password"
                id="password"
                onChange={handleInputChange}
                value={userInfo.password}
                required
              ></input>
              <label className={styles['Label']}>Password</label>
            </div>
            <div className={styles['input-box']}>
              <span className={styles['icon']}></span>
              <input
                className={styles['input-register']}
                type="password"
                name="confirmPassword"
                id="confirm-password"
                onChange={handleInputChange}
                value={userInfo.confirmPassword}
                required
              ></input>
              <label className={styles['Label']}>Confirm password</label>
            </div>
            <button type="submit" className={styles['button']}>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
