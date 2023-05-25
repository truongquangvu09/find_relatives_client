import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar } from '@mui/material';
import {
  DataGrid,
  GridCellModes,
  GridActionsCellItem,
  GridToolbar,
} from '@mui/x-data-grid';
import styles from '../../SearchRegistrationManage/Registration.module.scss';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as tvShowServices from '../../../../api/tvshow';
const cx = classNames.bind(styles);

function TvShowManageTable() {
  const [data, setData] = useState([]);

  const handleCancelClick = async (id) => {
    try {
      const deleteTvshow = await tvShowServices.deletedTvshow(id);
      if (deleteTvshow) {
        toast.success('xác nhận xóa thành công');
      }
      const result = await tvShowServices.getTvShow();
      setData(result.data);
    } catch (error) {
      toast.error('xác nhận xóa không thành công');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await tvShowServices.getTvShow();
        console.log({ result });
        setData(result.data);
      } catch (error) {
        throw new error(error.message);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', editable: true, width: 90 },
    {
      field: 'content_text',
      headerName: 'content_text',
      width: 500,
      editable: true,
    },
    {
      field: 'media',
      headerName: 'media',
      width: 170,
      editable: true,
      renderCell: (params) => (
        <div>
          <Avatar
            sx={{ width: 60, height: 60 }}
            variant="square"
            src={params.row.media}
            alt=""
          />
        </div>
      ),
    },
    {
      field: 'createdAt',
      headerName: 'createdAt',
      width: 110,
      editable: true,
    },
    {
      field: 'button',
      headerName: 'xóa bài viết',
      width: 150,
      editable: true,
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          onClick={() => {
            handleCancelClick(params.row.id);
          }}
          fontSize="large"
          icon={<DeleteIcon sx={{ fontSize: 20, color: 'red' }} />}
          label="views"
        />,
      ],
    },
  ];

  return (
    <>
      <h1 className={cx('header')}>Quản lý bài đăng</h1>
      <div className={cx('header-search')}>
        <h3 className={cx('left')}>Tất cả bài đăng</h3>
      </div>
      <div style={{ height: 425, width: 1100 }}>
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
      </div>
    </>
  );
}

export default TvShowManageTable;
