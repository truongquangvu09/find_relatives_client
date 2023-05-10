import React, { useState } from "react";
import styles from "./Register.module.scss";
import { Link } from 'react-router-dom';
function Register() {

    return (
        <div className={styles['register']}>
            <div className={styles['register-form']}>
                <div className={styles['Form-title']}>Đăng kí tài khoản</div>
                <form action="#">
                    <div className={styles['input-box']}>
                        <span className={styles['icon']}></span>
                        <input className={styles['input-register']} type="email" required></input>
                        <label className={styles['Label']}>Username</label>
                    </div>
                    <div className={styles['input-box']}>
                        <span className={styles['icon']}></span>
                        <input className={styles['input-register']} type="email" required></input>
                        <label className={styles['Label']}>Email</label>
                    </div>
                    <div className={styles['input-box']}>
                        <span className={styles['icon']}></span>
                        <input className={styles['input-register']} type="password" required></input>
                        <label className={styles['Label']}>Password</label>
                    </div>
                    <div className={styles['input-box']}>
                        <span className={styles['icon']}></span>
                        <input className={styles['input-register']} type="password" required></input>
                        <label className={styles['Label']}>Confirm password</label>
                    </div>
                        <button type="submit" className={styles['button']}>Đăng kí</button>
                </form>
            </div>
        </div>
    );

}

export default Register;