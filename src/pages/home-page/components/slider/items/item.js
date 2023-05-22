import './item.module.css';
import style from './item.module.css';
import * as postServices from '../../../../../api/post';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPostData } from '../../../../../redux/Slice/postSlice';
import { Link, useNavigate } from 'react-router-dom';

function Item() {
  const [data, setData] = useState([]);
  const postData = useSelector((state) => state.postData);
  const postSearchData = useSelector((state) => state.postSearchData);
  console.log({ postSearchData });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log({ data });

  useEffect(() => {
    const listPost = async () => {
      const result = await postServices.listPost();
      setData(result);
    };
    listPost();
  }, []);

  useEffect(() => {
    if (postData && postData.id) {
      navigate(`/profile/${postData.id}`);
      window.scrollTo(0, 0);
    }
  }, [postData]);

  const handleClick = async (postId) => {
    try {
      const result = await postServices.detailPost(postId);
      dispatch(setPostData(result));
      // navigate(`/profile/${postData.id}`);
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className={style['profiles']} key={index}>
            <Link to="/profile/{item.id}" onClick={() => handleClick(item.id)}>
              <a
                href=""
                title={item.Search_registration.brief_biography}
                onClick={() => handleClick(item.id)}
              >
                <img
                  src={item.Search_registration.people_image}
                  width="100%"
                  height="180"
                />
              </a>
            </Link>
            <span>
              {' '}
              <b>Mã số hồ sơ:</b> MS{item.id}
            </span>
            <h3>{item.post_title}</h3>
          </div>
        );
      })}
    </>
  );
}

export default Item;
