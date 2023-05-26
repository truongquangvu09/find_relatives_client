import './item.css';
import { Link } from 'react-router-dom';
import * as newsServices from '../../../../api/news';
import { useEffect, useState } from 'react';
import { setNewsData } from '../../../../redux/Slice/newsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Item() {
  const [news, setNews] = useState([]);
  const newsSearchData = useSelector(
    (state) => state.postSearch.postSearchData
  );

  console.log({ newsSearchData });
  useEffect(() => {
    const fetchApi = async () => {
      let filteredNewsData = [];
      const result = await newsServices.getlist();
      if (newsSearchData && newsSearchData.length > 0) {
        filteredNewsData = result.filter((news) => {
          for (let i = 0; i < newsSearchData.length; i++) {
            if (news.id === newsSearchData[i].id) {
              return true;
            }
          }
          return false;
        });
      }
      setNews(filteredNewsData.length > 0 ? filteredNewsData : result);
    };

    fetchApi();
  }, [newsSearchData]);

  const dispatch = useDispatch();
  const handleClick = async (newsId) => {
    try {
      const result = await newsServices.getDetail(newsId);
      dispatch(setNewsData(result));
      window.scrollTo(0, 0);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <>
      {news.map((item) => {
        return (
          <div className="new">
            <h2 className="list-title-news">
              <Link to="/news/{item.id}" onClick={() => handleClick(item.id)}>
                Thông báo : {item.content_text}
              </Link>
            </h2>
            <div className="sub-content-news">
              <div class="content-new-left">
                <Link to="/news/1">
                  <img className="img-item" src={item.image} alt="" />
                </Link>
              </div>
              <div class="content-right">
                <p class="sub-title-news">
                  ({item.createdAt.substring(0, 10)})
                </p>
                <p class="list-excerpt-news">
                  Như chưa hề có cuộc chia ly đã lập TÀI KHOẢN THIỆN NGUYỆN tại
                  Ngân hàng quân đội MBBank – số tài khoản 2700 2700 cũng là số
                  cuộc đoàn tụ trên hành trình 16 năm Tìm kiếm và Kết nối. Và
                  còn hơn 40.000 hồ sơ khác vẫn đang tiếp tục triển khai tìm […]
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Item;
