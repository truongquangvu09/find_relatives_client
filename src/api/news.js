import * as requests from '../utils/request/request';

export const getlist = async () => {
  try {
    const res = await requests.get('news/news-list');
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getDetail = async (id) => {
  try {
    const res = await requests.getDetail(`news/news-detail/${id}`);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
