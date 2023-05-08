import React from 'react';
import style from './AddNews.module.css';
// upload-button
import { Button } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

//check-box
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function AddNews() {
    return (
        <div className={style['container']}>
            <p className={style['top-news']}>Add News</p>
            <div className={style['bottom-news']}>
                <div className={style['content']}>
                    <div className={style['title-box']}>
                        <p className={style['title']}>Tiêu Đề</p>
                        <input type='text' placeholder='Title...' className={style['input-title']} />
                    </div>
                    <div className={style['title-box']}>
                        <p className={style['title']}>Nội Dung</p>
                        <textarea type='text' placeholder='Title...' className={style['input-textare']} />
                    </div>
                </div>
                <div className={style['content-image']}>
                    <img id='image' className={style['title-image']} src='' />
                    <div className={style['button-image']}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Button variant="contained" component="label" startIcon={<PhotoCamera />}>
                                Upload
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>

                        </Stack>
                    </div>
                </div>
            </div>
            <div className={style['checkbox-area']}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Display</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="show" control={<Radio />} label="Show" />
                        <FormControlLabel value="hire" control={<Radio />} label="Hire" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={style['button-save']}>
                <Button variant="contained">Create</Button>
            </div>
        </div>
    );
}

export default AddNews;