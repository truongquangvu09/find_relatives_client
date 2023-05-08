import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
// import styles from "./detail.module.css"

function AccountManage() {
  const columns = [
    { field: 'id', headerName: 'Number', width: 90 },
    {
      field: 'fullName',
      headerName: 'Họ tên tài khoản',
      width: 150,
      editable: true,
    },
    {
      field: 'account',
      headerName: 'Tên tài khoản',
      editable: true,
      width: 160,

    },
    {
      field: 'password',
      headerName: 'Mật khẩu',
      editable: true,
      width: 150,

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
    { id: 1,  fullName: 'Le Van Thien', account: 'Thien140901', password:123456, email: 'thien@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 2,  fullName: 'Nguyen Van Tung', account: 'Thien140901', password:123456, email: 'tungito@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 3,  fullName: 'Truong Quang Vu', account: 'Thien140901', password:123456, email: 'quangvu@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 4,  fullName: 'Le Thi Hoa', account: 'Thien140901', password:123456, email: 'hoahoa@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 5,  fullName: 'Le Yen Oanh', account: 'Thien140901', password:123456, email: 'oanhleo@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 6,  fullName: 'Hoang Dinh', account: 'Thien140901', password:123456, email: 'Dinha@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
    { id: 7,  fullName: 'Hoang Yen', account: 'Thien140901', password:123456, email: 'yen@gmail.com', phone: '08438438', IDcitizen: 34534532524 },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
    </Box>
  )
}

export default AccountManage;
