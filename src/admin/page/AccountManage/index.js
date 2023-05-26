import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import * as reportServices from '../../../api/report';
import styles from '../SearchRegistrationManage/Registration.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountManage() {
  const [data, setData] = useState([]);

  const handleCancelClick = async (id) => {
    try {
      const deleteTvshow = await reportServices.deleted(id);
      if (deleteTvshow) {
        toast.success('xác nhận xóa thành công');
      }
      const result = await reportServices.list();
      setData(result.slice(1, result.length));
    } catch (error) {
      toast.error('xác nhận xóa không thành công');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await reportServices.list();
      setData(result.slice(1, result.length));
    };
    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'report_name',
      headerName: 'Tên tài khoản',
      width: 230,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      editable: true,
      width: 260,
    },
    {
      field: 'type',
      headerName: 'Type',
      editable: true,
      width: 120,
    },
    {
      field: 'createdAt',
      headerName: 'createdAt',
      width: 190,
      editable: true,
    },
    {
      field: 'button',
      headerName: 'delete',
      width: 80,
      editable: true,
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          onClick={() => {
            handleCancelClick(params.row.id);
          }}
          fontSize="large"
          icon={<DeleteIcon sx={{ fontSize: 25, color: 'red' }} />}
          label="views"
        />,
      ],
    },
  ];

  return (
    <>
      <h1 className={cx('header')}>Quản lý Account</h1>
      <div className={cx('header-search')}>
        <h3 className={cx('left')}>Tất cả account</h3>
      </div>
      <div style={{ width: 1100 }}></div>
      <Box>
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
          rows={data}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
        />
      </Box>
    </>
  );
}

export default AccountManage;
