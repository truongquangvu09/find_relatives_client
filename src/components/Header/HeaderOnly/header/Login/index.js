import React, { useState } from 'react';
import styles from './login.module.css';
import Register from './Register/index';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import * as reportServices from '../../../../../api/report';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux';
import { setUserData } from '../../../../../redux/Slice/userSlice';

function Login(props) {
  const { setLoggedIn } = props;
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const handleRegisterModalOpen = () => {
    // Hàm xử lí khi bấm vào Register
    setRegisterModalOpen(true);
  };
  const handleRegisterModalClose = () => setRegisterModalOpen(false); // Hàm xử lí khi đóng Modal đăng ký
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 13,
    width: '55%',
    height: '100%',
  };

  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const authenticatedUser = await reportServices.signIn(
        userInfo.email,
        userInfo.password
      );
      if (authenticatedUser) {
        const type = authenticatedUser.user.type;
        dispatch(setUserData(authenticatedUser.user));
        if (type === 'admin') {
          toast.success('Đăng nhập thành công');
          setTimeout(() => {
            setLoggedIn(true);
            navigate('/admin');
          }, 2000);
        } else if (type === 'user') {
          toast.success('Đăng nhập thành công');
          setTimeout(() => {
            setLoggedIn(true);
            navigate('/');
          }, 2000);
        }
      } else {
        toast.error('Email hoặc mật khẩu không chính xác');
      }
    } catch (error) {
      toast.error('Đăng nhập không thành công');
    }
  };

  return (
    <div className={styles['Login']}>
      <div className={styles['Login-form']}>
        <div className={styles['Form-title']}>Đăng nhập tại đây</div>
        <form action="#" onSubmit={handleSubmit}>
          <div className={styles['input-box']}>
            <span className={styles['icon']}></span>
            <input
              className={styles['input-login']}
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
              className={styles['input-login']}
              type="password"
              name="password"
              id="password"
              onChange={handleInputChange}
              value={userInfo.password}
              required
            ></input>
            <label className={styles['Label']}>Password</label>
          </div>
          <div className={styles['remember-forgot']}>
            <div className={styles['left-remember-forgot']}>
              <input type="checkbox"></input>
              <label>Remember password</label>
            </div>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" className={styles['butn']}>
            Login
          </button>
        </form>
        <div className={styles['login-register']}>
          <p className={styles['dont-account']}>Dont have an account?</p>
          <div className={styles['register-all']}>
            <Button onClick={handleRegisterModalOpen}>Register</Button>
          </div>
          <Modal
            open={registerModalOpen}
            onClose={handleRegisterModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={styles['close-modal']}>
                <Button onClick={handleRegisterModalClose}>X</Button>
              </div>
              <Register></Register>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Login;
