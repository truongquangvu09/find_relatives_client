import React from 'react';
import './news-list.css';
import Item from './item/item';
import Sidebar from '../../../utils/sidebar/index';

function NewsList() {
  return (
    <div className="container-newlist">
      <div className="newsList">
        <div className='box-content-news'>
          <h3 className="title-block">
            <a href="#">Tin Tức</a>
          </h3>
          <div className='main-container-newlist'>
            <div className='content-block-newlist'>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </div>
            <div className='sidebar-newlist'>
              <div class="widget-block">
                <h3 class="widget-title">Các tin đọc nhiều nhất</h3>
                <ul class="featured-contact">
                  <li class="contact-mail">Thông báo</li>
                  <li class="contact-mail">Hoạt Động</li>
                  <li class="contact-mail">Báo chí</li>
                  <li class="contact-mail">Khán giả</li>
                </ul>
              </div>
              <Sidebar></Sidebar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsList;
