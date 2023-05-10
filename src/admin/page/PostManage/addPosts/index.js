import React from 'react';
import style from './AddPosts.module.css';
// upload-button
import { Button } from '@mui/material';
//upload-button-image
import UploadImage from '../uploadImg';

function choosefile(fileInput){
    if(fileInput.files && fileInput.files[0]){
        var reader = new FileReader();

        reader.onload = function(e){
            ('image').attr('src',e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }

}

function AddPosts() {
    return (
        <div className={style['container']}>
            <p className={style['top-posts']}>Add Posts</p>
            <div className={style['bottom-posts']}>
                <div className={style['content']}>
                    <div className={style['title-box']}>
                        <p className={style['title']}>Tiêu Đề</p>
                        <input type='text' placeholder='Nhập tiêu đề...' className={style['input-title']} />
                    </div>
                    <div className={style['title-box']}>
                        <p className={style['title']}>Thông tin</p>
                        <textarea type='text' placeholder='Nhập thông tin...' className={style['input-textare']} />
                    </div>
                    <div className={style['title-box']}>
                        <p className={style['title']}>Câu chuyện</p>
                        <textarea type='text' placeholder='Nhập câu chuyện...' className={style['input-textare']} />
                    </div>
                </div>
                <div className={style['content-image']}>
                    <div className={style['button-image']}>
                        <UploadImage></UploadImage>
                    </div>
                </div>
            </div>
            <div className={style['button-save']}>
                <Button variant="contained">Tạo Mới</Button>
            </div>
        </div>
    );
}

export default AddPosts;