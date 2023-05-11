import React, { useState } from "react";
import styles from "./login.module.css";
import Register from "./Register/index";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 13,
    width: '55%',
    height: '100%',

  };
  return (

    <div className={styles['Login']}>
      <div className={styles['Login-form']}>
        <div className={styles['Form-title']}>Đăng nhập tại đây</div>
        <form action="#">
          <div className={styles['input-box']}>
            <span className={styles['icon']}></span>
            <input className={styles['input-login']} type="email" required></input>
            <label className={styles['Label']}>Username</label>
          </div>
          <div className={styles['input-box']}>
            <span className={styles['icon']}></span>
            <input className={styles['input-login']} type="password" required></input>
            <label className={styles['Label']}>Password</label>
          </div>
          <div className={styles['remember-forgot']}>
            <div className={styles['left-remember-forgot']}>
              <input type="checkbox"></input>
              <label>Remember password</label>
            </div>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" className={styles['butn']}>Login</button>
          <div className={styles['login-register']}>
            <p className={styles['dont-account']}>Dont have an account?</p>
            <div className={styles['register-all']}>
              <Button onClick={handleOpen}>Register</Button>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className={styles['close-modal']}>
                  <Button onClick={handleClose}>X</Button>
                </div>
                <Register></Register>
              </Box>
            </Modal>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
