import React from 'react';
import style from './AddNews.module.css';
// upload-button
import { Button } from '@mui/material';
//upload-button-image
import UploadImage from '../uploadImage/index';

//check-box
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function choosefile(fileInput){
    if(fileInput.files && fileInput.files[0]){
        var reader = new FileReader();

        reader.onload = function(e){
            $('image').attr('src',e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }

}

function AddNews() {
    return (
        <div className={style['container']}>
            <p className={style['top-news']}>Thêm Tin Tức</p>
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
                    <div className={style['button-image']}>
                        <UploadImage></UploadImage>
                    </div>
                </div>
            </div>
            <div className={style['checkbox-area']}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Hiển Thị</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="show" control={<Radio />} label="Hiện" />
                        <FormControlLabel value="hire" control={<Radio />} label="Ẩn" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={style['button-save']}>
                <Button variant="contained">Tạo Mới</Button>
            </div>
        </div>
    );
}

export default AddNews;