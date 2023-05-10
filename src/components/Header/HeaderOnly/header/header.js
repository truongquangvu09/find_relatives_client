import './header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
// run first npm install --save-dev @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.min.css';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Login from './Login/index'


function Header() {
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
    <div className="header">
      <div className="header-top">
        <div className="header-top-left">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className="menu">
          <li clasName="menu-li">
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li clasName="menu-li">
            <NavLink to="/profile">Tìm người thân</NavLink>
          </li>
          <li clasName="menu-li">
            <NavLink to="/tvshow">Truyền hình</NavLink>
          </li>
          <li clasName="menu-li">
            <NavLink to="/news">Tin tức</NavLink>
          </li>
          <li clasName="menu-li">
            <div>
              <div className="login_all">
                <Button onClick={handleOpen}>Đăng nhập</Button>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Login></Login>
                </Box>
              </Modal>
            </div>
          </li>
        </ul>
      </div>
      <div className="header-bottom">
        <p className="tagline">
          Hoạt động Thiện nguyện Tìm kiếm và Đoàn tụ Người thân Miễn phí!
        </p>
        <form action="" className="search-news">
          <input type="text" name="" id="" placeholder="Tìm kiếm tin tức..." />
          <i class="fa-solid fa-magnifying-glass"></i>
        </form>
      </div>
    </div>
  );
}

export default Header;
