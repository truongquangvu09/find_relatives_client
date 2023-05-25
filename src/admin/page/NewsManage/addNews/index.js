import React from 'react';
import style from '../../TvShowManage/addTvShow/AddTvShow.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
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

function AddNews() {
  const [news, setNews] = useState({
    content_text: '',
    image: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNews({
      ...news,
      [name]: value,
    });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setNews((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('content_text', news.content_text);
    formData.append('image', news.image);
    try {
      const result = await axios.post(
        'http://localhost:8080/api/v1/news/news-create',
        formData
      );
      if (result.status === 200) {
        toast.success('thêm tin tức thành công');
        dispatch(setAddData(result.data));
      } else {
        toast.error('thêm không thành công');
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className={style['container']}>
      <p className={style['top-tvshow']}>Add News</p>
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
              <Item>Nội dung (bắt buộc)</Item>
              <TextField
                name="content_text"
                value={news.content_text}
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
                name="image"
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
              {news.image && <StyledFileName>{news.image.name}</StyledFileName>}
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

export default AddNews;
