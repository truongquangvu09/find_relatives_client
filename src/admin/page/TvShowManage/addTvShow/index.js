import React from 'react';
import style from './AddTvShow.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import * as tvshowServices from '../../../../api/tvshow.js';
import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setAddData } from '../../../../redux/Slice/addSlice';

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

function AddTvShow() {
  const [file, setFile] = useState([]);

  const [tvshow, setTvshow] = useState({
    content_text: '',
    media: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTvshow({
      ...tvshow,
      [name]: value,
    });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setTvshow((prevState) => ({
      ...prevState,
      media: file,
    }));
  };

  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('content_text', tvshow.content_text);
    formData.append('media', tvshow.media);
    try {
      const result = await axios.post(
        'http://localhost:8080/api/v1/tvShow/tvshow-create',
        formData
      );
      if (result.status === 200) {
        dispatch(setAddData(result.data));
        toast.success('thêm truyền hình thành công');
      } else {
        toast.error('thêm không thành công');
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className={style['container']}>
      <p className={style['top-tvshow']}>Add TvShow</p>
      <div className={style['bottom-tvshow']}></div>

      <Box
        sx={{
          flexGrow: 1,
          height: '100%',
          position: 'relative',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box>
              <Item>Tiêu đề (bắt buộc)</Item>
              <TextField
                name="content_text"
                value={tvshow.content_text}
                onChange={handleChange}
                sx={{ width: '100%', margin: '5px 0px' }}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Item>Mô tả</Item>
            <Stack direction="row" alignItems="center" spacing={2}>
              <input
                accept="image/*"
                name="media"
                onChange={handleFileChange}
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
              {tvshow.media && (
                <StyledFileName>{tvshow.media.name}</StyledFileName>
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
            Tạo mới
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default AddTvShow;
