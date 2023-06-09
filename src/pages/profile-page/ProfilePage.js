import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import style from './profile.module.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../utils/sidebar/index';
import SearchCircumstances from '../../utils/searchcircumstances';
import Zalo from '../Zalo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPostSearchData } from '../../redux/Slice/postSearchSlice';
import { useSelector } from 'react-redux';
import { MagnifyingGlass } from 'react-loader-spinner';

export default function ProfilePage() {
  const [infoSearch, setInfoSearch] = useState({
    people_name: '',
    birthday: '',
    address: '',
    dad_name: '',
    mom_name: '',
    coalpeople_name: '',
  });

  const [imagePath, setImagePath] = useState({
    uploadedImagePath: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImagePath((prevState) => ({
      ...prevState,
      uploadedImagePath: file,
    }));
  };

  const handleSubmitImageSearch = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append('uploadedImagePath', imagePath.uploadedImagePath);
    try {
      const imageSearch = await axios.post(
        'http://localhost:8080/api/v1/people/people-imageSearch',
        formData
      );
      const resultArray = [imageSearch.data];
      dispatch(setPostSearchData(resultArray));
      console.log({ imageSearch });
    } catch (error) {}
    setIsLoading(false);
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setInfoSearch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const params = {};
    if (infoSearch.people_name) {
      params.people_name = infoSearch.people_name;
    }
    if (infoSearch.birthday) {
      params.birthday = infoSearch.birthday;
    }
    if (infoSearch.address) {
      params.address = infoSearch.address;
    }
    if (infoSearch.dad_name) {
      params.dad_name = infoSearch.dad_name;
    }
    if (infoSearch.mom_name) {
      params.mom_name = infoSearch.mom_name;
    }
    if (infoSearch.coalpeople_name) {
      params.coalpeople_name = infoSearch.coalpeople_name;
    }
    try {
      const result = await axios.get(
        'http://localhost:8080/api/v1/people/people-advancedSearch',
        {
          params,
        }
      );
      if (result) {
        dispatch(setPostSearchData(result.data));
      } else {
      }
    } catch (error) {}
  };

  return (
    <>
      <div className={style['wrapper']}>
        <div className={style['profile-list']}>
          <Outlet />
        </div>
        <div className={style['sidebar']}>
          <button className={style['large-button']}>
            <Link to="/searchRegistration">Đăng ký tìm người thân</Link>
          </button>
          <div class="widget-block">
            <h1 class="widget-title">Tìm kiếm bằng hình ảnh</h1>
            <form class="advanced-search" onSubmit={handleSubmitImageSearch}>
              <input
                name="uploadedImagePath"
                type="file"
                onChange={handleFileChange}
              ></input>
              <button className={style['btn-submitsearch']} type="submit">
                tìm kiếm
                {isLoading ? (
                  <MagnifyingGlass
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor="#c0efff"
                    color="#e15b64"
                  />
                ) : (
                  ''
                )}
              </button>
            </form>
          </div>
          <div class="widget-block">
            <h1 class="widget-title">Tìm kiếm nâng cao</h1>
            <form class="advanced-search" onSubmit={handleSubmit}>
              <p>
                Có thể bạn đang được ai đó mong gặp lại, hoặc người bạn cần tìm
                đã đăng ký với NCHCCCL. Hãy kiểm tra!
              </p>
              <input
                name="people_name"
                placeholder="Họ tên người cần tìm"
                value={infoSearch.people_name}
                onChange={handleChange}
              />
              <input
                name="birthday"
                placeholder="Năm sinh"
                value={infoSearch.birthday}
                onChange={handleChange}
              />
              <input
                name="address"
                placeholder="Quê quán"
                value={infoSearch.address}
                onChange={handleChange}
              />
              <input
                name="dad_name"
                placeholder="Tên cha"
                value={infoSearch.dad_name}
                onChange={handleChange}
              />
              <input
                name="mom_name"
                placeholder="Tên mẹ"
                value={infoSearch.mom_name}
                onChange={handleChange}
              />
              <input
                name="coalpeople_name"
                placeholder="Tên anh, chị em"
                value={infoSearch.coalpeople_name}
                onChange={handleChange}
              />
              <p>
                (*) Nhập thông tin bằng Tiếng Việt có dấu, nhập số cho năm sinh
                và năm thất lạc, quê quán, nhập tên địa danh cũ nếu nhớ
              </p>
              <input class="submit" type="submit" value="Tìm kiếm" />
            </form>
          </div>
          <SearchCircumstances></SearchCircumstances>
          <Sidebar></Sidebar>
        </div>
        <Zalo></Zalo>
      </div>
    </>
  );
}
