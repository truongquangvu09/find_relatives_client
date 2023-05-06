import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import styles from './Registration.module.scss';
import classNames from 'classnames/bind';
import Detail_Search from './detail_search/detail';
import Modal from '@mui/material/Modal';
const cx = classNames.bind(styles);

function SearchRegistrationManage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function detail() {
    setOpen(true)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    width: '80%',
    height: '70%',
    borderRadius: '20px',
    
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'fullName',
      headerName: 'Tên người đăng kí',
      width: 150,
      editable: true,
    },
    {
      field: 'sex',
      headerName: 'Giới tính',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Năm sinh',
      width: 110,
      editable: true,
    },
    {
      field: 'address',
      headerName: 'Địa chỉ',
      editable: true,
      width: 160,

    },
    {
      field: 'email',
      headerName: 'Email',
      width: 180,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Số điện thoại',
      width: 120,
      editable: true,
    },
    {
      field: 'IDcitizen',
      headerName: 'Căn cước công dân',
      width: 150,
      editable: true,
    },

  ];

  const rows = [
    { id: 1, sex: 'Nam', fullName: 'Le Van Thien', age: 2001, address: 'Que son, Quang nam', email: 'thien@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 2, sex: 'Nam', fullName: 'Nguyen Van Tung', age: 2001, address: 'Que son, Quang nam', email: 'tungito@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 3, sex: 'Nam', fullName: 'Truong Quang Vu', age: 2001, address: 'Que son, Quang nam', email: 'quangvu@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 4, sex: 'Nữ', fullName: 'Le Thi Hoa', age: 2001, address: 'Que son, Quang nam', email: 'hoahoa@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 5, sex: 'Nữ', fullName: 'Le Yen Oanh', age: 2001, address: 'Que son, Quang nam', email: 'oanhleo@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 6, sex: 'Nam', fullName: 'Hoang Dinh', age: 2001, address: 'Que son, Quang nam', email: 'Dinha@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 7, sex: 'Nữ', fullName: 'Hoang Yen', age: 2001, address: 'Que son, Quang nam', email: 'yen@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
  ];
  return (
    <div>
      <h1 className={cx('header')}>Quản lý đơn đăng kí</h1>
      <div className={cx('header-search')}>
        <h3 className={cx('left')}>Tất cả đơn đăng kí</h3>
        <input placeholder=" Nhập người cần tìm"></input>
      </div>
      <Box sx={{ height: 420, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={detail}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className={cx('header-detail')}>Thông tin người thất lạc</h1>
          <Detail_Search />
        </Box>
      </Modal>
    </div>
  );
}

export default SearchRegistrationManage;
