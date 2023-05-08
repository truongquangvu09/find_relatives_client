import React from 'react';
import style from './AddNews.module.css';
// upload-button
import { Button } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

//check-box
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
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
                <FormControl component="fieldset">
                    <FormLabel component="legend">Display</FormLabel>
                    <FormGroup aria-label="position" column>
                        <FormControlLabel
                            value="show"
                            control={<Checkbox />}
                            label="Show"
                            labelPlacement="show"
                        />
                        <FormControlLabel
                            value="hire"
                            control={<Checkbox />}
                            label="Hire"
                            labelPlacement="hire"
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <div className={style['button-save']}>
                <Button variant="contained">Create</Button>
            </div>
        </div>
    );
}

export default AddNews;