import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import styles from '../../SearchRegistrationManage/Registration.module.scss';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as tvShowServices from '../../../../api/tvshow';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const cx = classNames.bind(styles);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledFileName = styled('div')({
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-all',
  display: 'block',
});

function TvShowManageTable() {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  console.log({ selectedRow });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdateClick = (params) => {
    setSelectedRow(params.row);
    handleOpen();
  };

  const addNews = useSelector((state) => state.add.addData);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('content_text', selectedRow.content_text);
    formData.append('tv_shows', selectedRow.media);
    try {
      const result = await axios.put(
        `http://localhost:8080/api/v1/tvShow/tvshow-update/${selectedRow.id}`,
        formData
      );
      if (result.status === 200) {
        toast.success('update thành công');
        const result = await tvShowServices.getTvShow();
        setData(result.data);
      } else {
        toast.error('update không thành công');
      }
    } catch (error) {
      toast.error('update không thành công');
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

  useEffect(() => {
    if (Object.keys(addNews).length !== 0) {
      setData((prevState) => [...prevState, addNews]);
    }
  }, [addNews]);

  const columns = [
    { field: 'id', headerName: 'ID', editable: true, width: 90 },
    {
      field: 'content_text',
      headerName: 'content_text',
      width: 480,
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
      field: 'update',
      headerName: 'update',
      width: 80,
      editable: true,
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          onClick={() => handleUpdateClick(params)}
          fontSize="large"
          icon={<AutorenewIcon sx={{ fontSize: 25 }} />}
          label="views"
        />,
      ],
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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    borderColor: 'white',
    p: 4,
  };

  return (
    <>
      <h1 className={cx('header')}>Quản lý truyền hình</h1>
      <div className={cx('header-search')}>
        <h3 className={cx('left')}>Tất cả truyền hình</h3>
      </div>
      <div style={{ height: 420, width: 1100 }}>
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
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Item
              sx={{ backgroundColor: '#bdbdbd', color: 'red', fontSize: 40 }}
            >
              update truyền hình
            </Item>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Box>
                  <Item>content_text</Item>
                  <TextField
                    name="content_text"
                    value={selectedRow?.content_text}
                    onChange={(e) =>
                      setSelectedRow((prevState) => ({
                        ...prevState,
                        content_text: e.target.value,
                      }))
                    }
                    sx={{ width: '100%', margin: '5px 0px' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Item>image</Item>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <input
                    accept="image/*"
                    name="media"
                    onChange={(e) =>
                      setSelectedRow((prevState) => ({
                        ...prevState,
                        media: e.target.files[0],
                      }))
                    }
                    id="contained-button-file"
                    type="file"
                    hidden
                    multiple
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      component="span"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload ảnh
                    </Button>
                  </label>
                  {selectedRow?.media && (
                    <StyledFileName>{selectedRow.media.name}</StyledFileName>
                  )}
                </Stack>
              </Grid>
            </Grid>
            <div>
              <Button
                type="submit"
                variant="contained"
                component="label"
                sx={{ position: 'absolute', bottom: '50px', right: '10px' }}
                onClick={handleSubmit}
              >
                Cập nhật
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default TvShowManageTable;
