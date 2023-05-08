import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import styles from './Registration.module.scss';
import classNames from 'classnames/bind';
import Detail_Search from './detail_search/detail';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
    width: '55%',
    height: '100%',
    borderRadius: '20px',

  };
  const columns = [
    { field: 'id', headerName: 'MS', width: 100 },
    {
      field: 'title',
      headerName: 'Tiêu đề',
      width: 300,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      width: 300,
      editable: true,
    },
    {
      field: 'button',
      headerName: '',
      width: 100,
      editable: true,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            
          >
            <DeleteForeverIcon></DeleteForeverIcon>
          </Button>
        );
      }
    },

  ];

  const rows = [
    { id: 1, title: 'Đơn đăng kí 1', status: null, },
    { id: 2, title: 'Đơn đăng kí 2', status: null, },
    { id: 3, title: 'Đơn đăng kí 3', status: null, },
    { id: 4, title: 'Đơn đăng kí 4', status: null, },
    { id: 5, title: 'Đơn đăng kí 5', status: null, },
    { id: 6, title: 'Đơn đăng kí 6', status: null, },
    { id: 7, title: 'Đơn đăng kí 7', status: null, },
  ];

  return (
    <div>
      <h1 className={cx('header')}>Quản lý đơn đăng kí</h1>
      <div className={cx('header-search')}>
        <h3 className={cx('left')}>Tất cả đơn đăng kí</h3>
        <input placeholder=" Nhập đơn cần tìm"></input>
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
          <h1 className={cx('header-detail')}>Đơn đăng kí 1</h1>
          <Detail_Search />
        </Box>
      </Modal>
    </div>
  );
}

export default SearchRegistrationManage;
