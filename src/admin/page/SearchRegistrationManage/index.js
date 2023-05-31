import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import styles from './Registration.module.scss';
import classNames from 'classnames/bind';
import Detail_Search from './detail_search/detail';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as searchRegistrationServices from '../../../api/searchRegistration';
import { useDispatch } from 'react-redux';
import { setSearchRegistrationData } from '../../../redux/Slice/searchRegistrationSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function SearchRegistrationManage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleClick = async (searchID) => {
    try {
      const result = await searchRegistrationServices.getDetail(searchID);
      dispatch(setSearchRegistrationData(result));
      console.log({ result });
      setOpen(true);
    } catch (error) {}
  };

  const handleAcceptClick = async (id, status) => {
    if (status === 'đã xác nhận') {
      toast.error('Không thể xác nhận lại đơn đã được xác nhận');
      return;
    }
    try {
      const updateRegistrations =
        await searchRegistrationServices.updateRegistrations(id, {
          status: 'đã xác nhận',
        });
      if (updateRegistrations) {
        toast.success('xác nhận thành công');
      }
      const result = await searchRegistrationServices.getList();
      setData(result);
    } catch (error) {
      toast.error('xác nhận không thành công');
    }
  };

  const handleCancelClick = async (id) => {
    try {
      const deleteRegistration =
        await searchRegistrationServices.deleteRegistrations(id);
      if (deleteRegistration) {
        toast.success('xác nhận hủy thành công');
      }
      const result = await searchRegistrationServices.getList();
      setData(result);
    } catch (error) {
      toast.error('xác nhận hủy không thành công');
    }
  };

  const [data, setData] = useState([]);
  console.log({ data });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await searchRegistrationServices.getList();
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
    { field: 'id', headerName: 'MS', width: 100 },
    {
      field: 'report_name',
      headerName: 'report_name',
      width: 130,
      editable: true,
    },
    {
      field: 'report_address',
      headerName: 'report_address',
      width: 130,
      editable: true,
    },
    {
      field: 'people_name',
      headerName: 'people_name',
      width: 130,
      editable: true,
    },
    {
      field: 'people_address',
      headerName: 'people_address',
      width: 130,
      editable: true,
    },
    {
      field: 'date_missing',
      headerName: 'date_missing',
      width: 130,
      editable: true,
    },
    {
      field: 'view',
      type: 'actions',
      headerName: 'Xem chi tiết',
      width: 100,
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
      field: 'status',
      headerName: 'Trạng thái',
      width: 120,
      editable: true,
      cellClassName: (params) =>
        params.value === 'đã xác nhận' ? 'confirmed' : 'disconfirmed',
    },
    {
      field: 'button',
      headerName: 'xác nhận',
      width: 130,
      editable: true,
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          onClick={() => {
            handleAcceptClick(params.row.id, params.row.status);
          }}
          fontSize="large"
          icon={<CheckIcon sx={{ fontSize: 20 }} color="primary" />}
          label="views"
        />,
        <GridActionsCellItem
          onClick={() => {
            handleCancelClick(params.row.id);
          }}
          fontSize="large"
          icon={<CancelIcon sx={{ fontSize: 20, color: 'red' }} />}
          label="views"
        />,
      ],
    },
  ];

  return (
    <div>
      <h1 className={cx('header')}>Quản lý đơn đăng kí</h1>
      <div className={cx('header-search')}>
        <h3 className={cx('left')}>Tất cả đơn đăng kí</h3>
      </div>
      <Box sx={{ height: 420, width: 1100 }}>
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
            '& .confirmed': {
              color: 'green',
            },
            '& .disconfirmed': {
              color: 'red',
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
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className={cx('header-detail')}>Đơn đăng kí </h1>
          <Detail_Search />
        </Box>
      </Modal>
    </div>
  );
}

export default SearchRegistrationManage;
