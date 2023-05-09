import React from 'react';
import style from './AddPosts.module.css';
// upload-button
import { Button } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

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
                    <p className={style['title']}>Ảnh</p>
                    <img id='image' className={style['title-image']} src='' />
                    <div className={style['button-image']}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Button variant="contained" component="label" startIcon={<PhotoCamera />}>
                                Upload Image
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>

                        </Stack>
                    </div>
                </div>
            </div>
            <div className={style['button-save']}>
                <Button variant="contained">Create</Button>
            </div>
        </div>
    );
}

export default AddPosts;