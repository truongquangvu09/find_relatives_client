import { Link } from 'react-router-dom';
import style from './items.module.css';
import * as postServices from '../../../../api/post';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPostData } from '../../../../redux/Slice/postSlice';
import { useNavigate } from 'react-router-dom';

function Items() {
  const [data, setData] = useState([]);
  const postData = useSelector((state) => state.postData);
  const postSearchData = useSelector(
    (state) => state.postSearch.postSearchData
  );
  console.log({ postSearchData });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log({ data });

  useEffect(() => {
    const fetchData = async () => {
      const result = await postServices.listPost();
      let filteredPostData = [];
      if (postSearchData && postSearchData.length > 0) {
        filteredPostData = result.filter((post) => {
          for (let i = 0; i < postSearchData.length; i++) {
            if (post.id === postSearchData[i].id) {
              return true;
            }
          }
          return false;
        });
      }
      setData(filteredPostData.length > 0 ? filteredPostData : result);
    };
    fetchData();
  }, [postSearchData]);

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
    <div className={style['list-profile']}>
      {data.map((item, index) => {
        return (
          <div className={style['profile']} key={index}>
            <div className={style['profile-left']}>
              <h1 className={style['title']}>
                <Link
                  to="/profile/{item.id}"
                  title={item.Search_registration.brief_biography}
                  onClick={() => handleClick(item.id)}
                >
                  MS{item.id}: {item.post_title}
                </Link>
              </h1>
              <p>Họ và tên: {item.Search_registration.people_name}</p>
              <p>
                Năm sinh:{' '}
                {item.Search_registration.people_birthday.substring(0, 4)}
              </p>
              <p>Tên cha: {item.Search_registration.dad_name}</p>
              <p>Tên mẹ: {item.Search_registration.mom_name}</p>
              <p>Tên anh chị em:{item.Search_registration.coal_people_name}</p>
              <p>
                Năm thất lạc:{' '}
                {item.Search_registration.date_missing.substring(0, 4)}
              </p>
            </div>
            <div className={style['profile-right']}>
              <img
                src={item.Search_registration.people_image}
                width="100%"
                height="200"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
