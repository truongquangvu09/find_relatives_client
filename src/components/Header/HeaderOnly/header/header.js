import './header.css';
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
// run first npm install --save-dev @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.min.css';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Login from './Login/index';
import Profile from '../../../Profile/Profile';
import { setPostSearchData } from '../../../../redux/Slice/postSearchSlice';
import { setPostData } from '../../../../redux/Slice/postSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseLogin = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 13,
    width: '55%',
    height: '100%',
  };

  const [infoSearch, setInfoSearch] = useState({
    content_text: '',
  });

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setInfoSearch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const params = {};
    if (infoSearch.content_text) {
      params.content_text = infoSearch.content_text;
    }
    try {
      const result = await axios.get(
        'http://localhost:8080/api/v1/news/news-list',
        {
          params,
        }
      );
      if (result) {
        dispatch(setPostSearchData(result.data));
        navigate('/news');
        window.scrollTo(0, 0);
      }
    } catch (error) {}
  };

  const [loggedIn, setLoggedIn] = useState(false);
  console.log('logged in', loggedIn);
  useEffect(() => {
    console.log(`The value of loggedIn has changed to ${loggedIn}`);
    // thực hiện các hành động cần thiết khi giá trị của loggedIn thay đổi
  }, [loggedIn]);

  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(setPostSearchData({}));
    dispatch(setPostData({}));
  };

  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-left">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className="menu">
          <li className="menu-li" onClick={handleClick}>
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li className="menu-li" onClick={handleClick}>
            <NavLink to="/profile">Tìm người thân</NavLink>
          </li>
          <li className="menu-li" onClick={handleClick}>
            <NavLink to="/tvshow">Truyền hình</NavLink>
          </li>
          <li className="menu-li" onClick={handleClick}>
            <NavLink to="/news">Tin tức</NavLink>
          </li>
          {loggedIn ? (
            <li className="menu-li" onClick={handleClick}>
              <NavLink to="/profiles">Profile</NavLink>
            </li>
          ) : (
            <li className="menu-li" onClick={handleClick}>
              <div>
                <div className="login_all">
                  <Button onClick={handleOpen}>Đăng nhập</Button>
                </div>
                <Modal
                  open={open}
                  onClose={handleCloseLogin}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="close-modal">
                      <Button onClick={handleCloseLogin}>X</Button>
                    </div>
                    <Login
                      handleCloseLogin={handleCloseLogin}
                      setLoggedIn={setLoggedIn}
                    ></Login>
                  </Box>
                </Modal>
              </div>
            </li>
          )}
        </ul>
      </div>
      <div className="header-bottom">
        <p className="tagline">
          Hoạt động Thiện nguyện Tìm kiếm và Đoàn tụ Người thân Miễn phí!
        </p>
        <form action="" className="search-news" onSubmit={handleSubmit}>
          <input
            type="text"
            name="content_text"
            value={infoSearch.content_text}
            onChange={handleChange}
            id=""
            placeholder="Tìm kiếm tin tức..."
          />
          <button className="btn-search" type="submit">
            {' '}
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
