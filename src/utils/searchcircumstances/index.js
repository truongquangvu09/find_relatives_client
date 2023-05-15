import React from 'react';
import style from './searchcir.module.css'
import { Link } from 'react-router-dom';

function SearchCircumstances() {
    return (
        <div class="widget-block">
          <h1 class="widget-title">Tìm theo hoàn cảnh thất lạc</h1>
          <div className={style['tagloud']}>
            <div className={style['link-tag']}>
              <Link to="" className={style['link']}>Năm 1945</Link>
              <span class={style['tag-link-count']}> (861)</span>
            </div>
            <div className={style['link-tag']}>
              <Link to="" className={style['link']}>Năm 1946</Link>
              <span class={style['tag-link-count']}> (81)</span>
            </div>
            <div className={style['link-tag']}>
              <Link to="" className={style['link']}>Năm 1954</Link>
              <span class={style['tag-link-count']}> (8)</span>
            </div>
            <div className={style['link-tag']}>
              <Link to="" className={style['link']}>Năm 1975</Link>
              <span class={style['tag-link-count']}> (86)</span>
            </div>
            <div className={style['link-tag']}>
              <Link to="" className={style['link']}>Bỏ nhà đi</Link>
              <span class={style['tag-link-count']}> (61)</span>
            </div>
            <div className={style['link-tag']}>
              <Link to="" className={style['link']}>Mất tích</Link>
              <span class={style['tag-link-count']}> (64)</span>
            </div>
            <div className={style['link-tag']}>
              <Link to="" className={style['link']}>Trẻ đi lạc</Link>
              <span class={style['tag-link-count']}> (11)</span>
            </div>
            <div className={style['link-tag']}>
              <Link to="" className={style['link']}>Cô nhi viện</Link>
              <span class={style['tag-link-count']}> (361)</span>
            </div>
            <div className={style['link-tag']}>
              <Link to="" className={style['link']}>Nạn đói</Link>
              <span class={style['tag-link-count']}> (461)</span>
            </div>
            <div className={style['link-tag']}>
              <Link to="" className={style['link']}>Bệnh viện</Link>
              <span class={style['tag-link-count']}> (521)</span>
            </div>
            <div className={style['link-tag']}>
              <Link to="" className={style['link']}>Bị bỏ rơi</Link>
              <span class={style['tag-link-count']}> (41)</span>
            </div>
          </div>
        </div>
    );
}

export default SearchCircumstances;