import React from 'react';
import style from './zalo.module.css';
import logo from './image/zalo-icon.png';

function Zalo() {
  return (
    <div class={style['social-button']}>
      <div class={style['social-button-content']}>
        <a href="http://zalo.me/0981481368" class={style['zalo']}>
          <img src={logo} alt="" class={style['image']} />
        </a>
      </div>
    </div>
  );
}

export default Zalo;