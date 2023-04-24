import React from 'react';
import './news-list.css';
import Item from './item/item';

function NewsList() {
  return(
    <div className="container">
      <div className="newsDetail">
        <h3 className="title-block">
          <a href="#">Tin Tức</a>
        </h3>
        <div className='content-block'>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </div>
    </div>
  );
}

export default NewsList;
