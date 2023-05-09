import React from 'react';
import style from './uploadImage.module.css';
import ImageUploading from 'react-images-uploading';
import { Button } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

//npm install --save react-images-uploading
//yarn add react-images-uploading


function UploadImage() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="App">
            <ImageUploading
                //thêm nhiều ảnh -> multiple
                // multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Button
                                variant="contained"
                                component="label"
                                startIcon={<PhotoCamera />}
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Thêm Ảnh
                            </Button>
                        </Stack>

                        {/* kéo thả ảnh*/}
                        {({ imageList, dragProps, isDragging }) => (
                            <div {...dragProps}>
                                {isDragging ? "Drop here please" : "Upload space"}
                                {imageList.map((image, index) => (
                                    <img key={index} src={image.data_url} />
                                ))}
                            </div>
                        )}

                        &nbsp;

                        <div className={style['box-image']}>
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image['data_url']} alt="" className={style['show-image']}/>
                                    <div className="image-item__btn-wrapper">
                                        <Button
                                            variant="contained"
                                            component="label"
                                            startIcon={<DeleteIcon />}
                                            onClick={() => onImageRemove(index)}
                                        >
                                            Xóa Ảnh
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}

export default UploadImage;