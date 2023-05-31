import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  DataGrid,
  GridCellModes,
  GridToolbar,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import styles from '../../SearchRegistrationManage/Registration.module.scss';
import * as postServices from '../../../../api/post';
import Detail_Post from '../detail_post';
import { useDispatch } from 'react-redux';
import { setPostData } from '../../../../redux/Slice/postSlice';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PostsManage() {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  console.log({ data });

  const handleClick = async (searchID) => {
    try {
      const result = await postServices.detailPost(searchID);
      dispatch(setPostData(result));
      console.log({ result });
      setOpen(true);
    } catch (error) {}
  };

  const handleCancelClick = async (id) => {
    try {
      const deleteRegistration = await postServices.deletedPost(id);
      if (deleteRegistration) {
        toast.success('xác nhận xóa thành công');
      }
      const result = await postServices.listPost();
      setData(result);
    } catch (error) {
      toast.error('xác nhận xóa không thành công');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await postServices.listPost();
        setData(result);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchData();
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    width: '55%',
    height: '100%',
    borderRadius: '20px',
  };

  const columns = [
    { field: 'id', headerName: 'ID', editable: true, width: 80 },
    {
      field: 'post_title',
      headerName: 'post_title',
      width: 240,
      editable: true,
    },
    {
      field: 'searchRegistrations_id',
      headerName: 'searchRegistrations_id',
      width: 190,
      editable: true,
    },
    {
      field: 'people_id',
      headerName: 'people_id ',
      width: 130,
      editable: true,
    },
    {
      field: 'lostSituation_id',
      headerName: 'lostSituation_id',
      editable: true,
      width: 130,
    },
    {
      field: 'view',
      type: 'actions',
      headerName: 'Xem chi tiết',
      width: 110,
      editable: true,
      getActions: (params) => [
        <GridActionsCellItem
          onClick={() => {
            handleClick(params.row.id);
          }}
          fontSize="large"
          icon={<VisibilityIcon sx={{ fontSize: 20 }} color="primary" />}
          label="views"
        />,
      ],
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
        <Box sx={{ height: 420, width: 1100 }}>
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
                  pageSize: 6,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
          />
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className={cx('header-detail')}>Bài đăng </h1>
            <Detail_Post />
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default PostsManage;
