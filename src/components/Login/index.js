import React, { useState } from "react";
import styles from "./login.module.css";
import { Link } from 'react-router-dom';

function Login() {
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
                  <Link href="" className={styles['register-link']}>Register here</Link>
                </div>
              </form>
            </div>
          </div>
  );
}

export default Login;
