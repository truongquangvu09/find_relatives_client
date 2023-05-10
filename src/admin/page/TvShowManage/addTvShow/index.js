import React from 'react';
import style from './AddTvShow.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TextField } from '@mui/material';

import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// const Input = styled('input')({
//   display: 'none',
// });

const StyledFileName = styled('div')({
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-all',
  display: 'block',
});

function AddTvShow() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Ẩn"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Hiện"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  // const [file, setFile] = useState(null);
  const [file, setFile] = useState([]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(file);
  // };

  const handleFileChange = (event) => {
    // const selectedFile = event.target.files[0];
    const selectedFile = Array.from(event.target.files);

    setFile(selectedFile);
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
              <TextField sx={{ width: '100%', margin: '5px 0px' }} />
              <Item>Mô tả</Item>
              <TextField sx={{ width: '100%', margin: '5px 0px' }} />
            </Box>
            <FormControlLabel
              label="Chế độ hiển thị"
              control={
                <Checkbox
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                  onChange={handleChange1}
                />
              }
            />
            {children}
          </Grid>

          <Grid item xs={4}>
            <Item>Mô tả</Item>
            <Stack direction="row" alignItems="center" spacing={2}>
              {/* <Button
                variant="contained"
                component="label"
                startIcon={<PhotoCamera />}
              >
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button> */}
              <input
                accept="image/*"
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
              {file.length > 0 && (
                <StyledFileName>
                  {file.map((file) => (
                    <p key={file.name}>{file.name}</p>
                  ))}
                </StyledFileName>
              )}
            </Stack>
          </Grid>
        </Grid>
        <div>
          <Button
            variant="contained"
            component="label"
            sx={{ position: 'absolute', bottom: '50px', right: '10px' }}
          >
            Tiếp
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default AddTvShow;
